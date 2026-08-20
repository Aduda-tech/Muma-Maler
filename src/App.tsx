import React, { useState, useMemo, useEffect, useRef } from 'react';
import { 
  Menu, 
  MoreVertical, 
  Search, 
  X, 
  ArrowLeft, 
  ChevronRight, 
  Home, 
  BookOpen, 
  Plus, 
  FileText, 
  Info,
  Bookmark,
  BookmarkCheck,
  ChevronLeft,
  Smartphone,
  Download,
  Code,
  Waves,
  Wind,
  Flame,
  Sparkles,
  Sunrise,
  UserPlus,
  Compass,
  ChevronDown,
  ChevronUp,
  Sun,
  Moon,
  Palette,
  Minus,
  Type,
  Share2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Capacitor } from '@capacitor/core';
import { cn } from './lib/utils';
import { BOOKS } from './constants';
import { BIBLE_DATA } from './data/bible-data';
import { BOOK_INTROS, BookIntro } from './data/book-intros';
import { HEADINGS } from './data/headings';
import { RED_LETTER } from './data/red-letter';
import { Book } from './types';
import ShareModal from './ShareModal';

// Storage key for bookmarks
const BOOKMARKS_KEY = 'luo_bible_bookmarks';

// Reading themes
type ReaderTheme = 'dark' | 'sepia' | 'light';
const READER_THEMES: Record<ReaderTheme, {
  label: string;
  bg: string;
  surface: string;
  surface2: string;
  text: string;
  muted: string;
  border: string;
  accent: string;
  red: string;
}> = {
  dark: {
    label: 'Otim (Dark)',
    bg: '#1a1a1a',
    surface: '#252525',
    surface2: '#2f2f2f',
    text: '#eaeaea',
    muted: 'rgba(255,255,255,0.55)',
    border: 'rgba(255,255,255,0.1)',
    accent: '#f97316',
    red: '#ff6b6b',
  },
  sepia: {
    label: 'Sepia',
    bg: '#f4ecd8',
    surface: '#eadfc4',
    surface2: '#e2d4b4',
    text: '#3b3527',
    muted: 'rgba(59,53,39,0.6)',
    border: 'rgba(59,53,39,0.15)',
    accent: '#b45309',
    red: '#b91c1c',
  },
  light: {
    label: 'Ler (Light)',
    bg: '#ffffff',
    surface: '#f5f5f5',
    surface2: '#ebebeb',
    text: '#111111',
    muted: 'rgba(0,0,0,0.55)',
    border: 'rgba(0,0,0,0.12)',
    accent: '#c2410c',
    red: '#d62828',
  },
};

const FONT_STEPS = ['text-base', 'text-lg', 'text-xl', 'text-2xl'];
const THEME_KEY = 'luo_bible_theme';
const FONT_KEY = 'luo_bible_font_size';

// Old-Testament book groups (used to split the two testaments)
const OT_GROUPS = ['Pentateuch', 'Old History', 'Poetry', 'Major Prophets', 'Minor Prophets'];
const OT_BOOKS = BOOKS.filter(b => OT_GROUPS.includes(b.group));
const NT_BOOKS = BOOKS.filter(b => !OT_GROUPS.includes(b.group));

interface BibleStory {
  title: string;
  reference: { book: string; chapter: number };
  summary: string;
  iconName: string;
}

const BIBLE_STORIES: BibleStory[] = [
  {
    title: "Nyuol mar Yesu (The Birth of Jesus)",
    reference: { book: "Luka", chapter: 2 },
    summary: "Nyuol mar Yesu Kristo e Bethlehem, kama malaika ne lando ne jokwath ni Jawar onywol.",
    iconName: "Sparkles"
  },
  {
    title: "Yesu Kueyo Yamo gi Opepe (Jesus Calms the Storm)",
    reference: { book: "Luka", chapter: 8 },
    summary: "Yesu ni e yie gi jopuonjrene ka yamo maduong' goyo yie. Oelogi kendo okwero yamo kod opepe ma piny lingo thi.",
    iconName: "Wind"
  },
  {
    title: "Batiso mar Yesu (The Baptism of Jesus)",
    reference: { book: "Mathayo", chapter: 3 },
    summary: "Johana Jabatiso batiso Yesu e Aora Jordan, kendo Roho Maler lor kuome ka akuru.",
    iconName: "Waves"
  },
  {
    title: "Yesu Chiero Lazaro (Jesus Raises Lazarus)",
    reference: { book: "Johana", chapter: 11 },
    summary: "Yesu dhi kuom liel mar Lazaro mosegayo ndalo ang'wen e liel, kendo oluonge ni, 'Lazaro, wuog oko!' mi ochier.",
    iconName: "UserPlus"
  },
  {
    title: "Chier mar Yesu (The Resurrection of Jesus)",
    reference: { book: "Mathayo", chapter: 28 },
    summary: "Malaika long'ore ne mon ma odhi liel, kendo landogi ni Yesu osechier e kind jo-motho kaka ne owacho.",
    iconName: "Sunrise"
  },
  {
    title: "Pentekost kod Roho Maler (Pentecost & The Holy Spirit)",
    reference: { book: "Tich Joote", chapter: 2 },
    summary: "Roho Maler lornigi jopuonjre kaka dho-mach, mi gichako wacho dhok mopogore opogore.",
    iconName: "Flame"
  }
];

const STORY_ICONS: Record<string, React.ComponentType<any>> = {
  Sparkles,
  Wind,
  Waves,
  UserPlus,
  Sunrise,
  Flame
};

// Curated daily devotional verses — encouraging, inspiring passages (not a
// random verse). One per day, cycling through the list.
interface Devotional {
  book: string;
  chapter: number;
  verse: number;
  theme: string; // short inspiring Luo caption
}

const DEVOTIONALS: Devotional[] = [
  { book: 'Mathayo', chapter: 11, verse: 28, theme: 'Yweyo (Rest)' },
  { book: 'Mathayo', chapter: 6, verse: 33, theme: 'Dwar Pinyruodhe (Seek First)' },
  { book: 'Mathayo', chapter: 5, verse: 14, theme: 'Ler Mar Piny (Light)' },
  { book: 'Mathayo', chapter: 28, verse: 20, theme: 'An Kodu (I Am With You)' },
  { book: 'Johana', chapter: 3, verse: 16, theme: 'Hera (Love)' },
  { book: 'Johana', chapter: 14, verse: 27, theme: 'Kuwe (Peace)' },
  { book: 'Johana', chapter: 16, verse: 33, theme: 'Lojo (Overcome)' },
  { book: 'Johana', chapter: 8, verse: 12, theme: 'Ler Mar Piny (Light)' },
  { book: 'Jo-Rumi', chapter: 8, verse: 28, theme: 'Tiyo Maber (Works For Good)' },
  { book: 'Jo-Rumi', chapter: 8, verse: 38, theme: 'Hera Maok We (Unfailing Love)' },
  { book: 'Jo-Rumi', chapter: 15, verse: 13, theme: 'Geno (Hope)' },
  { book: 'Jo-Filipi', chapter: 4, verse: 6, theme: 'Kik Iparru (Do Not Worry)' },
  { book: 'Jo-Filipi', chapter: 4, verse: 7, theme: 'Kuwe Mar Nyasaye (God\'s Peace)' },
  { book: 'Jo-Filipi', chapter: 4, verse: 13, theme: 'Teko (Strength)' },
  { book: 'Jo-Filipi', chapter: 4, verse: 19, theme: 'Chiwo (Provision)' },
  { book: '1 Jo-Korintho', chapter: 13, verse: 13, theme: 'Hera (Love)' },
  { book: '2 Jo-Korintho', chapter: 12, verse: 9, theme: 'Ng\'wono (Grace)' },
  { book: '2 Jo-Korintho', chapter: 5, verse: 17, theme: 'Chwech Manyien (New Creation)' },
  { book: 'Jo-Efeso', chapter: 3, verse: 20, theme: 'Teko (Power)' },
  { book: 'Jo-Kolosai', chapter: 3, verse: 15, theme: 'Kuwe Mar Kristo (Peace of Christ)' },
  { book: 'Jo-Hibrania', chapter: 13, verse: 5, theme: 'Ok Anaweu (Never Forsake)' },
  { book: 'Jo-Hibrania', chapter: 4, verse: 16, theme: 'Ng\'wono (Grace)' },
  { book: 'Jakobo', chapter: 1, verse: 5, theme: 'Rieko (Wisdom)' },
  { book: '1 Petro', chapter: 5, verse: 7, theme: 'Ket Dwachu (Cast Your Cares)' },
  { book: '2 Petro', chapter: 1, verse: 3, theme: 'Ngima (Life)' },
  { book: '1 Johana', chapter: 4, verse: 19, theme: 'Hera (Love)' },
  { book: 'Fweny', chapter: 21, verse: 4, theme: 'Geno Mogik (Final Hope)' },
  { book: 'Fweny', chapter: 3, verse: 20, theme: 'Luongo (He Knocks)' },
];

interface BookmarkItem {
  book: string;
  chapter: number;
  verse: number;
  text: string;
}

export default function App() {
  const [activeTab, setActiveTab] = useState('new');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [selectedChapter, setSelectedChapter] = useState(1);
  const [isReaderOpen, setIsReaderOpen] = useState(false);
  const [showIntro, setShowIntro] = useState(false);
  const [bookmarks, setBookmarks] = useState<BookmarkItem[]>([]);
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showInstallBtn, setShowInstallBtn] = useState(false);
  const [showInstallHelp, setShowInstallHelp] = useState(false);

  // Quick Selector & Scroll Tracking States
  const [isSelectorOpen, setIsSelectorOpen] = useState(false);
  const [selectorBook, setSelectorBook] = useState('Mathayo');
  const [selectorChapter, setSelectorChapter] = useState(1);
  const [selectorVerse, setSelectorVerse] = useState<number | null>(null);
  const [currentReadingVerse, setCurrentReadingVerse] = useState(1);
  const [targetScrollVerse, setTargetScrollVerse] = useState<number | null>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchStartY, setTouchStartY] = useState<number | null>(null);
  const [selectorTab, setSelectorTab] = useState<'book' | 'chapter' | 'verse'>('book');

  // Reading theme + font size states
  const [readerTheme, setReaderTheme] = useState<ReaderTheme>('dark');
  const [fontSizeIndex, setFontSizeIndex] = useState(1);
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);

  // Share verse state
  const [shareVerse, setShareVerse] = useState<{ verse: string; book: string; chapter: number; verseNum: number } | null>(null);

  const theme = READER_THEMES[readerTheme];

  // Top Search/Selector States
  const [isQuickJumpOpen, setIsQuickJumpOpen] = useState(false);
  const [quickBook, setQuickBook] = useState('Mathayo');
  const [quickChapter, setQuickChapter] = useState(1);
  const [quickVerse, setQuickVerse] = useState('');

  const readerScrollRef = useRef<HTMLDivElement>(null);

  const isNative = useMemo(() => {
    return Capacitor.isNativePlatform();
  }, []);

  // Listen for native mobile PWA prompt trigger
  useEffect(() => {
    const handleBeforeInstallPrompt = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallBtn(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    if (window.matchMedia('(display-mode: standalone)').matches) {
      setShowInstallBtn(false);
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallPWA = async () => {
    if (deferredPrompt) {
      try {
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        console.log(`PWA native install outcome: ${outcome}`);
        setDeferredPrompt(null);
        setShowInstallBtn(false);
      } catch (err) {
        console.error("Installation error:", err);
      }
    } else {
      setShowInstallHelp(!showInstallHelp);
    }
  };

  // Load bookmarks
  useEffect(() => {
    const saved = localStorage.getItem(BOOKMARKS_KEY);
    if (saved) {
      try {
        setBookmarks(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse bookmarks", e);
      }
    }
  }, []);

  // Save bookmarks
  useEffect(() => {
    localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(bookmarks));
  }, [bookmarks]);

  // Load theme + font size
  useEffect(() => {
    const savedTheme = localStorage.getItem(THEME_KEY);
    if (savedTheme === 'dark' || savedTheme === 'sepia' || savedTheme === 'light') {
      setReaderTheme(savedTheme);
    }
    const savedFont = localStorage.getItem(FONT_KEY);
    if (savedFont) {
      const idx = parseInt(savedFont, 10);
      if (idx >= 0 && idx < FONT_STEPS.length) setFontSizeIndex(idx);
    }
  }, []);

  // Persist theme + font size
  useEffect(() => {
    localStorage.setItem(THEME_KEY, readerTheme);
  }, [readerTheme]);
  useEffect(() => {
    localStorage.setItem(FONT_KEY, String(fontSizeIndex));
  }, [fontSizeIndex]);

  // Daily Verse logic — picks a curated, inspiring verse for the day
  const dailyVerse = useMemo(() => {
    const today = new Date();
    const start = new Date(today.getFullYear(), 0, 0);
    const dayOfYear = Math.floor((today.getTime() - start.getTime()) / 86400000);
    const dev = DEVOTIONALS[dayOfYear % DEVOTIONALS.length];
    const text = BIBLE_DATA[dev.book]?.[dev.chapter]?.[dev.verse - 1];
    if (!text) return null;
    // strip stray opening/closing quote marks for clean display
    const clean = text.replace(/^["\u201c'\u2018]+/, '').replace(/["\u201d'\u2019]+$/, '');
    return {
      book: dev.book,
      chapter: dev.chapter,
      verse: dev.verse,
      theme: dev.theme,
      text: clean
    };
  }, []);

  // Search logic
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const results: { book: string; chapter: number; verse: number; text: string }[] = [];
    const query = searchQuery.toLowerCase();

    Object.entries(BIBLE_DATA).forEach(([bookName, chapters]) => {
      Object.entries(chapters).forEach(([chapterNum, verses]) => {
        verses.forEach((text, index) => {
          if (text.toLowerCase().includes(query)) {
            results.push({
              book: bookName,
              chapter: parseInt(chapterNum),
              verse: index + 1,
              text
            });
            if (results.length >= 50) return;
          }
        });
        if (results.length >= 50) return;
      });
      if (results.length >= 50) return;
    });
    return results;
  }, [searchQuery]);

  const openReader = (bookName: string, chapter: number = 1) => {
    const book = BOOKS.find(b => b.name === bookName);
    if (book) {
      setSelectedBook(book);
      setSelectedChapter(chapter);
      setShowIntro(chapter === 1 && !!BOOK_INTROS[book.name]);
      setIsReaderOpen(true);
    }
  };

  const closeReader = () => {
    setIsReaderOpen(false);
  };

  const toggleBookmark = (book: string, chapter: number, verse: number, text: string) => {
    const isBookmarked = bookmarks.some(b => b.book === book && b.chapter === chapter && b.verse === verse);
    if (isBookmarked) {
      setBookmarks(bookmarks.filter(b => !(b.book === book && b.chapter === chapter && b.verse === verse)));
    } else {
      setBookmarks([...bookmarks, { book, chapter, verse, text }]);
    }
  };

  const isVerseBookmarked = (book: string, chapter: number, verse: number) => {
    return bookmarks.some(b => b.book === book && b.chapter === chapter && b.verse === verse);
  };

  const navigateChapter = (dir: 'prev' | 'next') => {
    if (!selectedBook) return;
    if (dir === 'prev' && selectedChapter > 1) {
      setSelectedChapter(selectedChapter - 1);
    } else if (dir === 'next' && selectedChapter < selectedBook.chapters) {
      setSelectedChapter(selectedChapter + 1);
    }
  };

  // Synchronize selector state with current book and chapter being read
  useEffect(() => {
    if (selectedBook) {
      setSelectorBook(selectedBook.name);
      setSelectorChapter(selectedChapter);
      if (!isSelectorOpen) {
        setSelectorVerse(currentReadingVerse);
      }
    }
  }, [selectedBook, selectedChapter, currentReadingVerse, isSelectorOpen]);

  // Synchronize top Quick Jump state with current book, chapter and verse being read
  useEffect(() => {
    if (selectedBook && !isQuickJumpOpen) {
      setQuickBook(selectedBook.name);
      setQuickChapter(selectedChapter);
      setQuickVerse(String(currentReadingVerse));
    }
  }, [selectedBook, selectedChapter, currentReadingVerse, isQuickJumpOpen]);

  const handleCollapseQuickJump = () => {
    if (selectedBook) {
      setQuickBook(selectedBook.name);
      setQuickChapter(selectedChapter);
      setQuickVerse(String(currentReadingVerse));
    } else {
      setQuickBook('Mathayo');
      setQuickChapter(1);
      setQuickVerse('');
    }
    setIsQuickJumpOpen(false);
  };

  const handleQuickRead = () => {
    const bookName = quickBook;
    const chapterNum = quickChapter ? parseInt(String(quickChapter)) : 1;
    const verseNum = quickVerse ? parseInt(quickVerse) : 1;

    jumpToVerse(bookName, chapterNum, verseNum);
    setIsQuickJumpOpen(false);
  };

  // Handle auto-scroll to selected target verse
  useEffect(() => {
    if (isReaderOpen && selectedBook && targetScrollVerse !== null) {
      const timer = setTimeout(() => {
        const el = document.getElementById(`verse-${targetScrollVerse}`);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        setTargetScrollVerse(null);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isReaderOpen, selectedBook, selectedChapter, targetScrollVerse]);

  const jumpToVerse = (bookName: string, chapterNum: number | null, verseNum: number | null) => {
    const book = BOOKS.find(b => b.name === bookName);
    if (!book) return;

    const finalChapter = chapterNum || 1;
    const finalVerse = verseNum || 1;

    setSelectedBook(book);
    setSelectedChapter(finalChapter);
    setTargetScrollVerse(finalVerse);
    setShowIntro(false);
    setIsReaderOpen(true);
    setIsSelectorOpen(false);
  };

  const handleReaderScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const containerTop = container.getBoundingClientRect().top;
    
    const verseElements = container.querySelectorAll('[id^="verse-"]');
    let currentActiveVerse = 1;
    let minDiff = Infinity;
    
    verseElements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      const diff = Math.abs(rect.top - containerTop - 30);
      if (diff < minDiff) {
        minDiff = diff;
        const idMatch = el.id.match(/verse-(\d+)/);
        if (idMatch) {
          currentActiveVerse = parseInt(idMatch[1]);
        }
      }
    });
    
    setCurrentReadingVerse(currentActiveVerse);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
    setTouchStartY(e.touches[0].clientY);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null || touchStartY === null) return;
    
    const diffX = e.changedTouches[0].clientX - touchStartX;
    const diffY = e.changedTouches[0].clientY - touchStartY;
    
    // Only a deliberate horizontal swipe opens the quick navigator.
    // Vertical movement (normal scrolling) never opens it, so the reader can
    // scroll freely to the end of the chapter without interruption.
    if (Math.abs(diffX) > 120 && Math.abs(diffY) < 40) {
      setIsSelectorOpen(true);
      setSelectorTab('book');
    }
    
    setTouchStartX(null);
    setTouchStartY(null);
  };

  // Render a verse, colouring the words of Jesus (red-letter) using the
  // character spans in RED_LETTER.
  const renderVerse = (verse: string, bookName: string, chapter: number, verseNum: number) => {
    const spans = RED_LETTER[bookName]?.[chapter]?.[verseNum];
    if (!spans || spans.length === 0) return verse;
    const nodes: React.ReactNode[] = [];
    let last = 0;
    spans.forEach(([s, e], idx) => {
      if (s > last) nodes.push(verse.slice(last, s));
      nodes.push(<span key={idx} style={{ color: theme.red }}>{verse.slice(s, e)}</span>);
      last = e;
    });
    if (last < verse.length) nodes.push(verse.slice(last));
    return nodes;
  };

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-[#eaeaea] font-sans selection:bg-orange-500/30">
      <div className="max-w-[520px] mx-auto min-h-screen flex flex-col relative overflow-hidden bg-[#1a1a1a] shadow-2xl">
        {/* Header - Matching Image */}
        <header className="sticky top-0 z-20 bg-[#252525] border-b border-white/5">
          <div className="flex items-center justify-between px-4 h-12">
            <button className="text-white/80">
              <Menu size={24} />
            </button>
            <h1 className="font-extrabold text-sm tracking-widest text-white uppercase">MUMA MALER</h1>
            <div className="relative">
              <button 
                onClick={() => setIsMoreMenuOpen(!isMoreMenuOpen)}
                className={cn("text-white/80 p-1 rounded-lg hover:bg-white/5 active:bg-white/10 transition-colors", isMoreMenuOpen && "text-orange-500")}
              >
                <MoreVertical size={24} />
              </button>
              
              <AnimatePresence>
                {isMoreMenuOpen && (
                  <>
                    <div 
                      className="fixed inset-0 z-40" 
                      onClick={() => setIsMoreMenuOpen(false)}
                    />
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95, y: -10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: -10 }}
                      className="absolute right-0 mt-2 w-56 bg-[#252525] border border-white/10 rounded-2xl shadow-2xl z-50 overflow-hidden"
                    >
                      <div className="p-2 space-y-1">
                        {!isNative && (
                          <>
                            <button 
                              onClick={() => {
                                setIsMoreMenuOpen(false);
                                setActiveTab('more');
                                setTimeout(() => {
                                  const installSection = document.getElementById('install-section');
                                  if (installSection) {
                                    installSection.scrollIntoView({ behavior: 'smooth' });
                                  }
                                }, 100);
                              }}
                              className="flex items-center gap-3 w-full px-3 py-2.5 rounded-xl text-left text-sm font-bold text-orange-400 hover:bg-orange-500/10 transition-colors"
                            >
                              <Smartphone size={18} />
                              <span>Ket e Simbi (Install App)</span>
                            </button>
                            <a 
                              href="/luo-bible-source.zip" 
                              download="luo-bible-source.zip"
                              onClick={() => setIsMoreMenuOpen(false)}
                              className="flex items-center gap-3 w-full px-3 py-2.5 rounded-xl text-left text-sm font-bold text-teal-400 hover:bg-teal-500/10 transition-colors"
                            >
                              <Code size={18} />
                              <span>Download Source ZIP</span>
                            </a>
                          </>
                        )}
                        <button
                          onClick={() => {
                            setActiveTab('more');
                            setIsMoreMenuOpen(false);
                          }}
                          className="flex items-center gap-3 w-full px-3 py-2.5 rounded-xl text-left text-sm font-bold text-white/80 hover:bg-white/5 transition-colors"
                        >
                          <Bookmark size={18} />
                          <span>Weche Mokan (Bookmarks)</span>
                        </button>
                        <button
                          onClick={() => {
                            setActiveTab('daily');
                            setIsMoreMenuOpen(false);
                          }}
                          className="flex items-center gap-3 w-full px-3 py-2.5 rounded-xl text-left text-sm font-bold text-white/80 hover:bg-white/5 transition-colors"
                        >
                          <FileText size={18} />
                          <span>Wes Ma Kawuono</span>
                        </button>
                        <div className="h-px bg-white/5 my-1" />
                        <div className="px-3 py-1.5 text-[10px] text-white/30 font-black uppercase tracking-widest">
                          Version 1.0.0 (Beta)
                        </div>
                      </div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Collapsible Search & Scripture Reference Navigation Box */}
          <div className="relative border-b border-white/5 bg-[#252525]/30 group/nav transition-all duration-300">
            {/* The Toggle Bar - transparent by default, becomes visible when cursor hovers over it, or when open */}
            <div 
              className={cn(
                "flex justify-center items-center h-8 cursor-pointer select-none transition-all duration-300",
                "bg-[#202020]/20 hover:bg-[#202020]/80 border-b border-white/5",
                isQuickJumpOpen ? "opacity-100" : "opacity-35 hover:opacity-100 focus-within:opacity-100"
              )}
              onClick={() => {
                if (isQuickJumpOpen) {
                  handleCollapseQuickJump();
                } else {
                  setIsQuickJumpOpen(true);
                }
              }}
            >
              <span className="text-[10px] uppercase tracking-widest text-white/60 font-black flex items-center gap-1.5">
                {isQuickJumpOpen ? (
                  <>
                    <span>Pand (Collapse)</span>
                    <ChevronUp size={14} className="text-[#f97316]" />
                  </>
                ) : (
                  <>
                    <span>Sula gi Wes (Quick Jump)</span>
                    <ChevronDown size={14} className="text-[#f97316] animate-bounce" />
                  </>
                )}
              </span>
            </div>

            {/* Sliding Panel - transparent/semitransparent by default, becomes fully visible on hover/focus */}
            <AnimatePresence>
              {isQuickJumpOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className={cn(
                    "bg-[#222]/90 border-b border-white/10 px-4 py-4 space-y-4 shadow-2xl relative z-30 transition-all duration-300",
                    "opacity-50 hover:opacity-100 focus-within:opacity-100"
                  )}
                >
                  <div className="flex flex-col gap-3">
                    {/* Controls row */}
                    <div className="grid grid-cols-12 gap-2 items-end">
                      {/* Book combo box */}
                      <div className="col-span-5 space-y-1">
                        <label className="block text-[9px] uppercase tracking-widest text-white/40 font-black">Buku (Book)</label>
                        <select
                          value={quickBook}
                          onChange={(e) => {
                            setQuickBook(e.target.value);
                            setQuickChapter(1);
                          }}
                          className="w-full h-11 px-2 bg-neutral-900 border border-white/10 rounded-xl text-xs font-bold text-white focus:outline-none focus:border-orange-500 transition-colors"
                        >
                          {BOOKS.map(b => (
                            <option key={b.name} value={b.name} className="bg-neutral-950 text-white font-semibold">
                              {b.name}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Chapter box */}
                      <div className="col-span-3 space-y-1">
                        <label className="block text-[9px] uppercase tracking-widest text-white/40 font-black">Sula (Ch.)</label>
                        <select
                          value={quickChapter}
                          onChange={(e) => setQuickChapter(parseInt(e.target.value))}
                          className="w-full h-11 px-2 bg-neutral-900 border border-white/10 rounded-xl text-xs font-bold text-white focus:outline-none focus:border-orange-500 transition-colors"
                        >
                          {Array.from(
                            { length: BOOKS.find(b => b.name === quickBook)?.chapters || 1 },
                            (_, i) => i + 1
                          ).map(ch => (
                            <option key={ch} value={ch} className="bg-neutral-950 text-white font-semibold">
                              {ch}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Verse typing box */}
                      <div className="col-span-2 space-y-1">
                        <label className="block text-[9px] uppercase tracking-widest text-white/40 font-black">Wes (Ver.)</label>
                        <input
                          type="number"
                          placeholder="1"
                          min="1"
                          max="150"
                          value={quickVerse}
                          onChange={(e) => setQuickVerse(e.target.value)}
                          className="w-full h-11 px-2 bg-neutral-900 border border-white/10 rounded-xl text-xs font-bold text-white text-center focus:outline-none focus:border-orange-500 transition-colors placeholder:text-white/20"
                        />
                      </div>

                      {/* Read button */}
                      <div className="col-span-2">
                        <button
                          onClick={handleQuickRead}
                          className="w-full h-11 bg-orange-500 hover:bg-orange-400 text-black font-black rounded-xl text-xs uppercase tracking-wider active:scale-95 transition-all flex items-center justify-center shadow-lg shadow-orange-500/10 cursor-pointer"
                        >
                          Soma
                        </button>
                      </div>
                    </div>

                    {/* Quick Search bar - so users can still search! */}
                    <div className="flex items-center gap-2">
                      <div className="flex-1 flex items-center gap-2 rounded-xl px-3 py-1.5 bg-neutral-900 h-10 border border-white/5">
                        <Search size={16} className="text-[#888]" />
                        <input 
                          type="text" 
                          placeholder="Kata manyo weche..." 
                          className="w-full bg-transparent outline-none text-xs text-white placeholder:text-[#888]"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        {searchQuery && (
                          <button onClick={() => setSearchQuery('')} className="text-white/40 hover:text-white">
                            <X size={14} />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Marquee Banner */}
            <div className="bg-[#1f1f1f] h-6 flex items-center overflow-hidden relative border-t border-white/5">
              <div className="whitespace-nowrap inline-block animate-marquee absolute left-full font-bold text-[9px] tracking-wider uppercase text-white/40 px-4">
                Nikech Nyasaye nohero piny ahinya, omiyo nochiwo Wuode achiel makende, mondo ng'ato ang'ata moyie kuome kik lal, to obed gi ngima manyaka chieng'. (Johana 3:16) • Nikech Nyasaye nohero piny ahinya, omiyo nochiwo Wuode achiel makende, mondo ng'ato ang'ata moyie kuome kik lal, to obed gi ngima manyaka chieng'. (Johana 3:16)
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 p-3 pb-24 overflow-y-auto">
          {activeTab === 'new' && (
            <div className="space-y-4">
              {searchQuery ? (
                <div className="space-y-3">
                  {searchResults.length > 0 ? (
                    searchResults.map((res, i) => (
                      <div 
                        key={i}
                        onClick={() => openReader(res.book, res.chapter)}
                        className="p-4 bg-[#333] rounded-xl border border-white/5 cursor-pointer flex justify-between items-center group"
                      >
                        <div className="flex-1">
                          <h3 className="font-bold text-white text-sm">{res.book} {res.chapter}:{res.verse}</h3>
                          <p className="mt-1 text-sm text-white/60 line-clamp-2">{res.text}</p>
                        </div>
                        <ChevronRight size={18} className="text-white/20 group-hover:text-orange-500 transition-colors" />
                      </div>
                    ))
                  ) : (
                    <div className="p-12 text-center text-white/40 italic">Onge wach moyudi ne "{searchQuery}"</div>
                  )}
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-3">
                  {NT_BOOKS.map((book) => (
                    <div
                      key={book.key}
                      onClick={() => openReader(book.name)}
                      className="p-4 bg-[#333] rounded-xl border border-white/5 flex flex-col relative cursor-pointer active:scale-95 transition-transform"
                    >
                      <span className={cn("font-black text-lg", book.color)}>
                        {book.name}
                      </span>
                      <span className="text-[12px] font-bold text-white/20 mt-1">
                        {book.chapters} Sula
                      </span>
                      <ChevronRight size={20} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/10" />
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === 'old' && (
            <div className="space-y-4">
              {searchQuery ? (
                <div className="space-y-3">
                  {searchResults.length > 0 ? (
                    searchResults.map((res, i) => (
                      <div
                        key={i}
                        onClick={() => openReader(res.book, res.chapter)}
                        className="p-4 bg-[#333] rounded-xl border border-white/5 cursor-pointer flex justify-between items-center group"
                      >
                        <div className="flex-1">
                          <h3 className="font-bold text-white text-sm">{res.book} {res.chapter}:{res.verse}</h3>
                          <p className="mt-1 text-sm text-white/60 line-clamp-2">{res.text}</p>
                        </div>
                        <ChevronRight size={18} className="text-white/20 group-hover:text-orange-500 transition-colors" />
                      </div>
                    ))
                  ) : (
                    <div className="p-12 text-center text-white/40 italic">Onge wach moyudi ne "{searchQuery}"</div>
                  )}
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-3">
                  {OT_BOOKS.map((book) => (
                    <div
                      key={book.key}
                      onClick={() => openReader(book.name)}
                      className="p-4 bg-[#333] rounded-xl border border-white/5 flex flex-col relative cursor-pointer active:scale-95 transition-transform"
                    >
                      <span className={cn("font-black text-lg", book.color)}>
                        {book.name}
                      </span>
                      <span className="text-[12px] font-bold text-white/20 mt-1">
                        {book.chapters} Sula
                      </span>
                      <ChevronRight size={20} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/10" />
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === 'stories' && (
            <div className="space-y-4 animate-in fade-in duration-300">
              <div className="space-y-1 px-1">
                <h2 className="text-xs font-black uppercase tracking-widest text-[#f97316]">Sigendni mag Muma (Bible Stories)</h2>
                <p className="text-white/40 text-[11px]">Sigendni moko ma joma dongo kod nyithindo somo e Muma Manyien.</p>
              </div>
              
              <div className="grid grid-cols-1 gap-3">
                {BIBLE_STORIES.map((story, idx) => {
                  const StoryIcon = STORY_ICONS[story.iconName] || BookOpen;
                  return (
                    <div
                      key={idx}
                      onClick={() => openReader(story.reference.book, story.reference.chapter)}
                      className="p-5 bg-[#252525] hover:bg-[#2c2c2c] rounded-2xl border border-white/5 flex gap-4 cursor-pointer active:scale-[0.98] transition-all group"
                    >
                      <div className="p-3.5 bg-orange-500/10 text-orange-500 rounded-xl h-fit">
                        <StoryIcon size={24} />
                      </div>
                      <div className="space-y-1 flex-1">
                        <h3 className="font-extrabold text-white text-base leading-tight group-hover:text-orange-400 transition-colors">{story.title}</h3>
                        <p className="text-xs font-black text-orange-500/80 uppercase tracking-wider">{story.reference.book} {story.reference.chapter}</p>
                        <p className="text-white/60 text-xs leading-relaxed mt-1.5">{story.summary}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {activeTab === 'more' && (
            <div className="space-y-6">
              {isNative && (
                <section className="bg-gradient-to-br from-orange-500/10 to-[#1e1e1e]/40 p-6 rounded-2xl border border-orange-500/15 space-y-4 shadow-lg animate-in fade-in duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-orange-500/10 text-orange-500 rounded-xl">
                      <Smartphone size={28} />
                    </div>
                    <div className="space-y-1 flex-1">
                      <h3 className="font-extrabold text-white text-base tracking-wide uppercase">Muma Manyien (Native App)</h3>
                      <p className="text-orange-500 text-xs font-black uppercase tracking-wider">Koro: Offline & Native</p>
                    </div>
                  </div>
                  
                  <div className="bg-[#1f1f1f] rounded-xl p-4 text-[12px] text-white/60 space-y-3 border border-white/5 leading-relaxed">
                    <p>
                      Maber! App ni tiyo <span className="text-white font-bold">offline</span> e simbi, maonge gima dwaro mbofwa (internet).
                    </p>
                    <p>
                      All books, offline search engine, and device bookmarking are compiled natively within this APK package.
                    </p>
                    <div className="h-px bg-white/5 my-1" />
                    <div className="flex justify-between text-[11px] text-white/40">
                      <span>Platform:</span>
                      <span className="font-bold text-teal-400 uppercase">{Capacitor.getPlatform()}</span>
                    </div>
                    <div className="flex justify-between text-[11px] text-white/40">
                      <span>Database Status:</span>
                      <span className="font-bold text-orange-400">100% Preloaded</span>
                    </div>
                  </div>
                </section>
              )}

              {!isNative && (
                <section id="install-section" className="bg-gradient-to-br from-[#252525] to-[#1e1e1e] p-5 rounded-2xl border border-white/5 space-y-4 shadow-lg animate-in fade-in duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-orange-500/10 text-orange-500 rounded-xl">
                    <Smartphone size={28} />
                  </div>
                  <div className="space-y-1 flex-1">
                    <h3 className="font-extrabold text-white text-base tracking-wide uppercase">Muma Maler e Simbi (Install App)</h3>
                    <p className="text-white/50 text-xs leading-relaxed">
                      Sudo maber kendo tich offline gi simbi! Install this application on your phone as a home screen app with zero parse errors, full-offline capability, and an elegant custom launcher icon.
                    </p>
                  </div>
                </div>
                
                <div className="pt-2">
                  <button 
                    onClick={handleInstallPWA}
                    className="w-full h-11 bg-orange-500 hover:bg-orange-600 text-black font-black flex items-center justify-center gap-2 rounded-xl text-sm uppercase tracking-wider transition-colors shadow-lg shadow-orange-500/10 active:scale-95 cursor-pointer border-0"
                  >
                    {deferredPrompt ? <Download size={18} /> : <Smartphone size={18} />}
                    {deferredPrompt ? "Ket App Muma Maler" : "Ne Kaka Iketo (App Setup)"}
                  </button>
                </div>
                
                {(deferredPrompt || showInstallHelp || !deferredPrompt) && (
                  <div className="bg-[#1f1f1f] rounded-xl p-4 text-[12px] text-white/60 space-y-3 border border-white/5">
                    <div>
                      <p className="font-black uppercase text-[10px] tracking-widest text-[#f97316] mb-1">Android (Chrome / Edge / Opera):</p>
                      <p className="leading-relaxed">
                        Press the <span className="font-bold text-white">"Install"</span> button if prompted by your browser. Alternatively, tap the browser menu (three dots <span className="font-extrabold">&#8942;</span>) and tap <span className="font-bold text-white">"Install app"</span> or <span className="font-bold text-white">"Add to Home screen"</span>.
                      </p>
                    </div>
                    <div className="h-px bg-white/5" />
                    <div>
                      <p className="font-black uppercase text-[10px] tracking-widest text-teal-400 mb-1">Apple iOS (Safari on iPhone/iPad):</p>
                      <p className="leading-relaxed">
                        Tap the browser's Share icon (square with action arrow <span className="font-extrabold">↑</span>) in the bottom navigation bar, scroll down the options, and select <span className="font-bold text-white">"Add to Home Screen"</span>.
                      </p>
                    </div>
                    <div className="h-px bg-white/5" />
                    <div className="text-[10px] text-white/30 italic leading-relaxed">
                      Muma Maler runs fully offline once added. It delivers a fast, standalone application interface that looks and behaves like a native utility!
                    </div>
                  </div>
                )}
              </section>
              )}

              {/* Download Source Code & Cloud Build Section */}
              {!isNative && (
              <section className="bg-gradient-to-br from-[#252525] to-[#1e1e1e] p-5 rounded-2xl border border-white/5 space-y-4 shadow-lg animate-in fade-in duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-teal-500/10 text-teal-400 rounded-xl">
                    <Code size={28} />
                  </div>
                  <div className="space-y-1 flex-1">
                    <h3 className="font-extrabold text-white text-base tracking-wide uppercase">Capacitor Android & Cloud Compiler</h3>
                    <p className="text-white/50 text-xs leading-relaxed">
                      Download the complete mobile-ready project! This ZIP includes a professional Capacitor.js Native wrapper pre-configured with a <span className="text-teal-400 font-bold">Free GitHub Actions Cloud Compiler</span> to build a real Android APK (.apk) fully online.
                    </p>
                  </div>
                </div>
                
                <div className="pt-2">
                  <a 
                    href="/luo-bible-source.zip" 
                    download="luo-bible-source.zip"
                    className="w-full h-11 bg-teal-500 hover:bg-teal-600 text-black font-black flex items-center justify-center gap-2 rounded-xl text-sm uppercase tracking-wider transition-colors shadow-lg shadow-teal-500/10 active:scale-95 cursor-pointer"
                  >
                    <Download size={18} />
                    Download Project ZIP
                  </a>
                </div>
                
                <div className="bg-[#1f1f1f] rounded-xl p-4 text-[12px] text-white/60 space-y-3 border border-white/5">
                  <p className="font-bold uppercase text-[9px] tracking-widest text-teal-400">Gik ma iyudo e iye (Package contents):</p>
                  <p className="leading-relaxed">• <span className="text-white font-bold">.github/workflows/build-apk.yml</span>: Prebuilt GitHub Actions workflow to compile your APK automatically in the cloud.</p>
                  <p className="leading-relaxed">• <span className="text-white font-bold">android/</span>: A pre-configured Native Gradle project ready to load into Android Studio.</p>
                  <p className="leading-relaxed">• <span className="text-white font-bold">capacitor.config.ts</span>: Mobile-ready configuration settings matching the custom logo, splash colors, and bundle ID.</p>
                  <p className="leading-relaxed">• <span className="text-white font-bold">src/ & data/</span>: Cleaned Luo Bible Scripture databases, custom web layouts, bookmarks engine, and search filters.</p>
                  
                  <div className="h-px bg-white/5 my-2" />
                  
                  <p className="font-bold uppercase text-[9px] tracking-widest text-orange-500">Method 1: Automatic Online Cloud Compiler (Free & Recommended)</p>
                  <p className="leading-relaxed font-bold text-white text-[11px]">No computer setup or software compilation is required on your local PC:</p>
                  <p className="leading-relaxed">1. Create a free account on <span className="text-white font-semibold">GitHub.com</span> and create a new repository.</p>
                  <p className="leading-relaxed">2. Unzip the downloaded <span className="text-teal-400 font-semibold">luo-bible-source.zip</span> and upload the files to your GitHub repository.</p>
                  <p className="leading-relaxed">3. Navigate to the <span className="text-white font-bold">"Actions"</span> tab on your repository header.</p>
                  <p className="leading-relaxed">4. You will see the <span className="text-teal-400 font-semibold">"Build Android APK"</span> workflow. It triggers automatically on your uploaded code or you can click <span className="text-white font-bold">"Run workflow"</span>.</p>
                  <p className="leading-relaxed">5. Wait ~2 minutes. Once the compilation completes successfully, click on the run to download the compiled, fully working <span className="text-orange-400 font-bold">luo-bible-android-apk</span> artifact directly to your phone!</p>

                  <div className="h-px bg-white/5 my-2" />

                  <p className="font-bold uppercase text-[9px] tracking-widest text-[#f97316]">Method 2: Compile Locally using Android Studio</p>
                  <p className="leading-relaxed font-bold text-white text-[11px]">Build locally using your physical computer:</p>
                  <p className="leading-relaxed">1. Install <span className="text-white font-bold">Android Studio</span> on your desktop/laptop (requires Java 17+ installed).</p>
                  <p className="leading-relaxed">2. Open Android Studio and select <span className="text-white font-bold">"Open"</span>, and browse to choose the <span className="text-teal-400 font-semibold">"android"</span> folder from your unzipped files.</p>
                  <p className="leading-relaxed">3. Wait for the IDE to sync Gradle modules automatically.</p>
                  <p className="leading-relaxed">4. Inside the top header toolbar, go to <span className="text-white font-bold">Build &gt; Build Bundle(s) / APK(s) &gt; Build APK(s)</span>.</p>
                  <p className="leading-relaxed">5. Transfer the compiled native <span className="text-orange-400 font-bold">app-debug.apk</span> directly to your phone and install it!</p>
                </div>
              </section>
              )}

              <section>
                <h2 className="text-xs font-black uppercase tracking-widest text-[#f97316] mb-4">Weche Mokan (Bookmarks)</h2>
                {bookmarks.length > 0 ? (
                  <div className="space-y-3">
                    {bookmarks.map((b, i) => (
                      <div 
                        key={i}
                        className="p-4 bg-[#333] rounded-xl border border-white/5 flex flex-col relative group"
                        onClick={() => openReader(b.book, b.chapter)}
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-xs font-black text-[#f97316]">{b.book} {b.chapter}:{b.verse}</span>
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleBookmark(b.book, b.chapter, b.verse, b.text);
                            }}
                            className="text-white/20 hover:text-red-500 transition-colors"
                          >
                            <X size={16} />
                          </button>
                        </div>
                        <p className="text-sm text-white/80 line-clamp-2">{b.text}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="p-8 border border-dashed border-white/10 rounded-xl text-center text-white/30 text-sm">
                    Pok iketo wes moro amora (No bookmarks yet)
                  </div>
                )}
              </section>
            </div>
          )}

          {activeTab === 'daily' && (
            <div className="space-y-4">
              <h2 className="text-xs font-black uppercase tracking-widest text-[#f97316] mb-2 px-1">Wes Ma Kawuono</h2>
              {dailyVerse && (
                <div 
                  className="p-6 bg-gradient-to-br from-orange-500/20 to-transparent border border-orange-500/20 rounded-3xl cursor-pointer"
                  onClick={() => openReader(dailyVerse.book, dailyVerse.chapter)}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full bg-orange-500/15 text-orange-400 text-[10px] font-black uppercase tracking-widest">
                      {dailyVerse.theme}
                    </span>
                  </div>
                  <p className="font-serif text-xl leading-relaxed text-white italic mb-6">"{dailyVerse.text}"</p>
                  <div className="flex justify-between items-center">
                    <span className="font-black text-orange-500">{dailyVerse.book} {dailyVerse.chapter}:{dailyVerse.verse}</span>
                    <ChevronRight size={18} className="text-orange-500" />
                  </div>
                </div>
              )}
            </div>
          )}
        </main>

        {/* Bottom Nav - Matching Image */}
        <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[520px] bg-[#222] border-t border-white/5 h-16 grid grid-cols-5 items-center px-1">
          {[
            { id: 'old', icon: Home, label: 'Muma Machon' },
            { id: 'new', icon: BookOpen, label: 'Muma Manyien' },
            { id: 'stories', icon: Plus, label: 'Sigendni' },
            { id: 'daily', icon: FileText, label: 'Wes Ma Kawuono' },
            { id: 'more', icon: Info, label: 'Mamoko' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "flex flex-col items-center justify-center gap-0.5 transition-all h-full",
                activeTab === tab.id ? "text-orange-500" : "text-[#777]"
              )}
            >
              <div className={cn(
                "p-1 rounded-sm flex items-center justify-center transition-all",
                activeTab === tab.id ? "bg-orange-500/10" : ""
              )}>
                <tab.icon size={22} strokeWidth={2.5} />
              </div>
              <span className="text-[10px] font-bold whitespace-nowrap">{tab.label}</span>
            </button>
          ))}
        </nav>

        {/* Reader Overlay - Enhanced with Navigation */}
        <AnimatePresence>
          {isReaderOpen && selectedBook && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeReader}
                className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
              />
              <motion.div
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[520px] h-[94vh] rounded-t-3xl z-50 flex flex-col overflow-hidden"
                style={{ backgroundColor: theme.bg, borderTop: `1px solid ${theme.border}` }}
              >
                <div className="sticky top-0 z-10 px-4 py-4 flex items-center justify-between" style={{ backgroundColor: theme.surface, borderBottom: `1px solid ${theme.border}` }}>
                  <div className="flex items-center gap-3">
                    <button onClick={closeReader} style={{ color: theme.muted }}>
                      <ArrowLeft size={24} />
                    </button>
                    <div className="cursor-pointer select-none" onClick={() => { setIsSelectorOpen(true); setSelectorTab('book'); }}>
                      <h2 className="font-bold text-lg leading-none transition-colors flex items-center gap-1.5" style={{ color: theme.text }}>
                        {selectedBook.name} <Compass size={14} className="animate-pulse" style={{ color: theme.accent }} />
                      </h2>
                      <span className="text-[10px] uppercase tracking-widest font-black" style={{ color: theme.accent }}>Lok Somo</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    {BOOK_INTROS[selectedBook.name] && (
                      <button 
                        onClick={() => setShowIntro(!showIntro)}
                        className={cn(
                          "px-3 py-1.5 rounded-lg text-xs font-black tracking-widest uppercase transition-all",
                          showIntro ? "text-white shadow-lg" : ""
                        )}
                        style={showIntro ? { backgroundColor: theme.accent, color: '#000' } : { backgroundColor: theme.surface2, color: theme.muted }}
                      >
                        Nonro
                      </button>
                    )}
                    {/* Theme settings button */}
                    <div className="relative">
                      <button 
                        onClick={() => setIsThemeMenuOpen(!isThemeMenuOpen)}
                        className="p-2 rounded-lg transition-colors"
                        style={{ backgroundColor: theme.surface2, color: theme.muted }}
                        aria-label="Reading theme settings"
                      >
                        <Palette size={16} />
                      </button>
                      <AnimatePresence>
                        {isThemeMenuOpen && (
                          <>
                            <div className="fixed inset-0 z-40" onClick={() => setIsThemeMenuOpen(false)} />
                            <motion.div
                              initial={{ opacity: 0, scale: 0.95, y: -6 }}
                              animate={{ opacity: 1, scale: 1, y: 0 }}
                              exit={{ opacity: 0, scale: 0.95, y: -6 }}
                              className="absolute right-0 mt-2 w-52 rounded-2xl shadow-2xl z-50 overflow-hidden p-3 space-y-3"
                              style={{ backgroundColor: theme.surface, border: `1px solid ${theme.border}` }}
                            >
                              <div>
                                <p className="text-[10px] uppercase tracking-widest font-black mb-2 flex items-center gap-1.5" style={{ color: theme.muted }}>
                                  <Palette size={12} /> Kit Rang (Theme)
                                </p>
                                <div className="grid grid-cols-3 gap-1.5">
                                  {(Object.keys(READER_THEMES) as ReaderTheme[]).map(t => (
                                    <button
                                      key={t}
                                      onClick={() => setReaderTheme(t)}
                                      className="rounded-lg py-2 px-1 flex flex-col items-center gap-1 transition-all"
                                      style={{
                                        backgroundColor: READER_THEMES[t].surface,
                                        color: READER_THEMES[t].text,
                                        border: `1px solid ${readerTheme === t ? theme.accent : theme.border}`,
                                      }}
                                    >
                                      {t === 'dark' ? <Moon size={14} /> : t === 'sepia' ? <Sun size={14} /> : <Type size={14} />}
                                      <span className="text-[9px] font-black uppercase">{t === 'dark' ? 'Otim' : t === 'sepia' ? 'Sepia' : 'Ler'}</span>
                                    </button>
                                  ))}
                                </div>
                              </div>
                              <div>
                                <p className="text-[10px] uppercase tracking-widest font-black mb-2 flex items-center gap-1.5" style={{ color: theme.muted }}>
                                  <Type size={12} /> Duong Ndiko (Font)
                                </p>
                                <div className="flex items-center justify-between gap-2">
                                  <button
                                    onClick={() => setFontSizeIndex(Math.max(0, fontSizeIndex - 1))}
                                    disabled={fontSizeIndex === 0}
                                    className="p-2 rounded-lg disabled:opacity-30"
                                    style={{ backgroundColor: theme.surface2, color: theme.text }}
                                  >
                                    <Minus size={14} />
                                  </button>
                                  <span className="text-xs font-black" style={{ color: theme.text }}>{fontSizeIndex + 1}x</span>
                                  <button
                                    onClick={() => setFontSizeIndex(Math.min(FONT_STEPS.length - 1, fontSizeIndex + 1))}
                                    disabled={fontSizeIndex === FONT_STEPS.length - 1}
                                    className="p-2 rounded-lg disabled:opacity-30"
                                    style={{ backgroundColor: theme.surface2, color: theme.text }}
                                  >
                                    <Plus size={14} />
                                  </button>
                                </div>
                              </div>
                            </motion.div>
                          </>
                        )}
                      </AnimatePresence>
                    </div>
                    <div className="flex items-center gap-3 ml-2">
                      <button 
                        onClick={() => {
                          navigateChapter('prev');
                          setShowIntro(false);
                        }}
                        disabled={selectedChapter <= 1}
                        className="p-1 disabled:opacity-30"
                        style={{ color: theme.muted }}
                      >
                        <ChevronLeft size={24} />
                      </button>
                      <select
                        value={selectedChapter}
                        onChange={(e) => {
                          setSelectedChapter(parseInt(e.target.value));
                          setShowIntro(false);
                        }}
                        className="rounded-lg px-2 py-1.5 font-bold text-[11px] outline-none min-w-[100px]"
                        style={{ backgroundColor: theme.surface2, color: theme.text, border: `1px solid ${theme.border}` }}
                      >
                        {Array.from({ length: selectedBook.chapters }, (_, i) => i + 1).map(ch => (
                          <option key={ch} value={ch}>Sula {ch}</option>
                        ))}
                      </select>
                      <button 
                        onClick={() => {
                          navigateChapter('next');
                          setShowIntro(false);
                        }}
                        disabled={selectedChapter >= selectedBook.chapters}
                        className="p-1 disabled:opacity-30"
                        style={{ color: theme.muted }}
                      >
                        <ChevronRight size={24} />
                      </button>
                    </div>
                  </div>
                </div>

                <div 
                  ref={readerScrollRef}
                  onScroll={handleReaderScroll}
                  onTouchStart={handleTouchStart}
                  onTouchEnd={handleTouchEnd}
                  className="flex-1 overflow-y-auto p-4 space-y-6 custom-scrollbar"
                >
                  {showIntro && BOOK_INTROS[selectedBook.name] ? (
                    <div className="px-2 py-4 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                      <div className="space-y-1">
                        <h1 className="text-4xl font-black italic" style={{ color: theme.text }}>{selectedBook.name}</h1>
                        <p className="font-black uppercase tracking-[0.2em] text-xs" style={{ color: theme.accent }}>Weche Motelo</p>
                      </div>

                      <div className="grid grid-cols-1 gap-4">
                        <div className="p-4 rounded-2xl" style={{ backgroundColor: theme.surface, border: `1px solid ${theme.border}` }}>
                          <p className="text-[10px] uppercase font-black tracking-widest mb-1" style={{ color: theme.muted }}>Jandiko (Author)</p>
                          <p className="font-bold" style={{ color: theme.text }}>{BOOK_INTROS[selectedBook.name].author}</p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="p-4 rounded-2xl" style={{ backgroundColor: theme.surface, border: `1px solid ${theme.border}` }}>
                            <p className="text-[10px] uppercase font-black tracking-widest mb-1" style={{ color: theme.muted }}>Kar Ndiko</p>
                            <p className="font-bold" style={{ color: theme.text }}>{BOOK_INTROS[selectedBook.name].location}</p>
                          </div>
                          <div className="p-4 rounded-2xl" style={{ backgroundColor: theme.surface, border: `1px solid ${theme.border}` }}>
                            <p className="text-[10px] uppercase font-black tracking-widest mb-1" style={{ color: theme.muted }}>Kinde Ndiko</p>
                            <p className="font-bold" style={{ color: theme.text }}>{BOOK_INTROS[selectedBook.name].date}</p>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h4 className="text-sm font-black uppercase tracking-widest px-1" style={{ color: theme.accent }}>Wach Machwok (Summary)</h4>
                        <div className="p-6 rounded-3xl leading-relaxed italic" style={{ backgroundColor: theme.surface, border: `1px solid ${theme.border}`, color: theme.text }}>
                          {BOOK_INTROS[selectedBook.name].summary}
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h4 className="text-sm font-black uppercase tracking-widest px-1" style={{ color: theme.accent }}>Gik Manie Iye</h4>
                        <div className="text-lg leading-relaxed space-y-4 px-2" style={{ color: theme.muted }}>
                          {BOOK_INTROS[selectedBook.name].overview.split('. ').map((p, i) => (
                            <p key={i}>{p}.</p>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h4 className="text-sm font-black uppercase tracking-widest px-1" style={{ color: theme.accent }}>Weche Mochan</h4>
                        <div className="space-y-2">
                          {BOOK_INTROS[selectedBook.name].sections.map((s, i) => (
                            <div key={i} className="flex items-center justify-between p-4 rounded-xl group transition-colors" style={{ backgroundColor: theme.surface, border: `1px solid ${theme.border}` }}>
                              <span className="font-bold text-sm" style={{ color: theme.muted }}>{s.title}</span>
                              <span className="font-black text-xs tabular-nums" style={{ color: theme.accent }}>{s.range}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <button 
                        onClick={() => setShowIntro(false)}
                        className="w-full py-5 font-black rounded-2xl uppercase tracking-widest text-sm transition-colors"
                        style={{ backgroundColor: theme.accent, color: '#000' }}
                      >
                        Chak Somo (Start Reading)
                      </button>
                    </div>
                  ) : (
                    <div className="px-2">
                      <h3 className="font-serif text-3xl mb-8 text-center" style={{ color: theme.text }}>{selectedBook.name} {selectedChapter}</h3>
                      <div className="space-y-6">
                      {BIBLE_DATA[selectedBook.name]?.[selectedChapter]?.map((verse, i) => {
                        const verseNum = i + 1;
                        const isBookmarked = isVerseBookmarked(selectedBook.name, selectedChapter, verseNum);
                        const headings = (HEADINGS[selectedBook.name]?.[selectedChapter] ?? []).filter(h => h.verse === verseNum);
                        return (
                          <div key={i} id={`verse-${verseNum}`}>
                            {headings.map((h, j) => (
                              <h4 key={j} className="font-serif text-xl font-bold mt-8 mb-2 first:mt-0 text-left" style={{ color: theme.accent }}>
                                {h.title}
                              </h4>
                            ))}
                            <div className="flex gap-4 group">
                              <span 
                                className="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center font-black text-xs transition-colors"
                                style={isBookmarked ? { backgroundColor: theme.accent, color: '#000' } : { backgroundColor: theme.surface2, color: theme.accent }}
                                onClick={() => toggleBookmark(selectedBook.name, selectedChapter, verseNum, verse)}
                              >
                                {verseNum}
                              </span>
                              <div className="flex-1 flex flex-col gap-2">
                                <div className="flex justify-between items-start gap-2">
                                  <p className={cn("leading-relaxed font-serif flex-1", FONT_STEPS[fontSizeIndex])} style={{ color: theme.text }}>
                                    {renderVerse(verse, selectedBook.name, selectedChapter, verseNum)}
                                  </p>
                                  <div className="flex items-start gap-0.5 shrink-0">
                                    <button 
                                      onClick={() => setShareVerse({ verse, book: selectedBook.name, chapter: selectedChapter, verseNum })}
                                      className="p-1.5 rounded-lg transition-colors shrink-0"
                                      style={{ color: theme.muted }}
                                      title="Or wes (Share verse)"
                                    >
                                      <Share2 size={18} />
                                    </button>
                                    <button 
                                      onClick={() => toggleBookmark(selectedBook.name, selectedChapter, verseNum, verse)}
                                      className="p-1.5 rounded-lg transition-colors shrink-0"
                                      style={{ color: isBookmarked ? theme.accent : theme.border }}
                                    >
                                      {isBookmarked ? <BookmarkCheck size={20} /> : <Bookmark size={20} />}
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                      {(!BIBLE_DATA[selectedBook.name] || !BIBLE_DATA[selectedBook.name][selectedChapter]) && (
                        <div className="py-20 flex flex-col items-center justify-center text-center px-8">
                          <BookOpen size={48} className="mb-4" style={{ color: theme.border }} />
                          <p className="italic font-serif" style={{ color: theme.muted }}>Muma manyien en piny owacho... (Scripture content for this chapter is being updated.)</p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
                <div className="h-20" />
              </div>



              {/* Quick Selector Sliding Panel */}
              <AnimatePresence>
                {isSelectorOpen && (
                  <motion.div
                    initial={{ y: '100%' }}
                    animate={{ y: 0 }}
                    exit={{ y: '100%' }}
                    transition={{ type: 'spring', damping: 25, stiffness: 220 }}
                    className="absolute inset-0 bg-[#161616] z-50 flex flex-col overflow-hidden"
                  >
                    {/* Pull tab handle indicator */}
                    <div className="w-full flex justify-center py-2 bg-[#222]">
                      <div className="w-12 h-1 rounded-full bg-white/20" />
                    </div>

                    {/* Header */}
                    <div className="px-4 py-3.5 bg-[#222] border-b border-white/5 flex items-center justify-between">
                      <div className="space-y-0.5">
                        <h3 className="font-extrabold text-white text-sm uppercase tracking-wider">Yor Manyo (Quick Navigator)</h3>
                        <p className="text-[11px] text-white/40">Goch sula kata wes ma idwaro somo piyo.</p>
                      </div>
                      <button
                        onClick={() => setIsSelectorOpen(false)}
                        className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/60"
                      >
                        <X size={18} />
                      </button>
                    </div>

                    {/* Current selection display */}
                    <div className="px-4 py-2.5 bg-[#1b1b1b] border-b border-white/5 flex items-center justify-between text-xs font-bold">
                      <span className="text-white/40">Moyiero:</span>
                      <span className="text-[#f97316] font-black uppercase tracking-wider">
                        {selectorBook} {selectorChapter}{selectorVerse ? ` : ${selectorVerse}` : ''}
                      </span>
                    </div>

                    {/* Segmented Tab Controls */}
                    <div className="p-2 bg-[#1b1b1b] flex gap-1 border-b border-white/5">
                      {[
                        { id: 'book', label: 'Buku (Book)' },
                        { id: 'chapter', label: 'Sula (Chapter)' },
                        { id: 'verse', label: 'Wes (Verse)' }
                      ].map(tab => (
                        <button
                          key={tab.id}
                          onClick={() => setSelectorTab(tab.id as any)}
                          className={cn(
                            "flex-1 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all",
                            selectorTab === tab.id
                              ? "bg-orange-500 text-black shadow-lg shadow-orange-500/10"
                              : "text-white/40 hover:text-white/60 hover:bg-white/5"
                          )}
                        >
                          {tab.label}
                        </button>
                      ))}
                    </div>

                    {/* Scrollable Content Area */}
                    <div className="flex-1 overflow-y-auto p-4 custom-scrollbar bg-[#161616]">
                      {selectorTab === 'book' && (
                        <div className="space-y-4">
                          <div className="grid grid-cols-2 gap-2">
                            {BOOKS.map(book => {
                              const isCurrent = selectorBook === book.name;
                              return (
                                <button
                                  key={book.name}
                                  onClick={() => {
                                    setSelectorBook(book.name);
                                    setSelectorChapter(1);
                                    setSelectorVerse(null);
                                    setSelectorTab('chapter');
                                  }}
                                  className={cn(
                                    "p-3 rounded-xl border text-left flex flex-col justify-between h-16 transition-all",
                                    isCurrent
                                      ? "bg-orange-500/10 border-orange-500/30 text-orange-400 font-extrabold"
                                      : "bg-white/5 border-white/5 text-white/70 hover:bg-white/10"
                                  )}
                                >
                                  <span className="text-[13px] font-extrabold leading-tight">{book.name}</span>
                                  <span className="text-[9px] uppercase tracking-widest text-white/30 font-bold">
                                    {book.chapters} Sula
                                  </span>
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      )}

                      {selectorTab === 'chapter' && (
                        <div className="space-y-4">
                          <div className="grid grid-cols-5 gap-2">
                            {Array.from(
                              { length: BOOKS.find(b => b.name === selectorBook)?.chapters || 1 },
                              (_, i) => i + 1
                            ).map(ch => {
                              const isCurrent = selectorChapter === ch;
                              return (
                                <button
                                  key={ch}
                                  onClick={() => {
                                    setSelectorChapter(ch);
                                    setSelectorVerse(null);
                                    setSelectorTab('verse');
                                  }}
                                  className={cn(
                                    "aspect-square rounded-xl border flex items-center justify-center font-bold transition-all text-sm",
                                    isCurrent
                                      ? "bg-orange-500 border-orange-500 text-black font-black"
                                      : "bg-white/5 border-white/5 text-white/70 hover:bg-white/10"
                                  )}
                                >
                                  {ch}
                                </button>
                              );
                            })}
                          </div>
                          <button
                            onClick={() => jumpToVerse(selectorBook, selectorChapter, null)}
                            className="w-full mt-4 py-4 bg-white text-black hover:bg-orange-500 hover:text-black font-black rounded-xl text-xs uppercase tracking-widest transition-all"
                          >
                            Soma Sula {selectorChapter} (Read Chapter)
                          </button>
                        </div>
                      )}

                      {selectorTab === 'verse' && (
                        <div className="space-y-4">
                          <div className="grid grid-cols-6 gap-2">
                            {Array.from(
                              { length: BIBLE_DATA[selectorBook]?.[selectorChapter]?.length || 30 },
                              (_, i) => i + 1
                            ).map(v => {
                              const isCurrent = selectorVerse === v;
                              return (
                                <button
                                  key={v}
                                  onClick={() => {
                                    setSelectorVerse(v);
                                    jumpToVerse(selectorBook, selectorChapter, v);
                                  }}
                                  className={cn(
                                    "aspect-square rounded-xl border flex items-center justify-center font-bold transition-all text-xs",
                                    isCurrent
                                      ? "bg-orange-500 border-orange-500 text-black font-black"
                                      : "bg-white/5 border-white/5 text-white/70 hover:bg-white/10"
                                    )}
                                  >
                                    {v}
                                  </button>
                                );
                              })}
                            </div>
                            <button
                              onClick={() => jumpToVerse(selectorBook, selectorChapter, null)}
                              className="w-full mt-4 py-4 bg-white/5 border border-white/10 text-white hover:bg-orange-500 hover:text-black font-black rounded-xl text-xs uppercase tracking-widest transition-all"
                            >
                              Soma Sula {selectorChapter} duto
                            </button>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
      
      <style>{`
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.2);
        }
      `}</style>

      {shareVerse && (
        <ShareModal
          verse={shareVerse.verse}
          book={shareVerse.book}
          chapter={shareVerse.chapter}
          verseNum={shareVerse.verseNum}
          onClose={() => setShareVerse(null)}
        />
      )}
    </div>
  );
}
