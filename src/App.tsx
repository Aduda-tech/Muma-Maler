import React, { useState, useMemo, useEffect } from 'react';
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
  UserPlus
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Capacitor } from '@capacitor/core';
import { cn } from './lib/utils';
import { BOOKS } from './constants';
import { BIBLE_DATA } from './data/bible-data';
import { BOOK_INTROS, BookIntro } from './data/book-intros';
import { Book } from './types';

// Storage key for bookmarks
const BOOKMARKS_KEY = 'luo_bible_bookmarks';

interface BibleStory {
  title: string;
  reference: { book: string; chapter: number };
  summary: string;
  iconName: string;
}

const BIBLE_STORIES: BibleStory[] = [
  {
    title: "Nyakol mar Yesu (The Birth of Jesus)",
    reference: { book: "Luka", chapter: 2 },
    summary: "Nyalego mar Yesu Kristo e Bethlehem, kama malaika ne lando ne jokwath moko ni Jandiko onywol.",
    iconName: "Sparkles"
  },
  {
    title: "Yesu Koyo Yamo gi Opepe (Jesus Calms the Storm)",
    reference: { book: "Luka", chapter: 8 },
    summary: "Yesu ni e yie gi jopuonjrene ka yamo maduong' goyo yie. Oelogi kendo okwero yamo kod opepe ma piny lingo thi.",
    iconName: "Wind"
  },
  {
    title: "Batiso mar Yesu (The Baptism of Jesus)",
    reference: { book: "Mathayo", chapter: 3 },
    summary: "Johana Jabatiso batiso Yesu e Aora Jordan, kendo Chuny Maler lor kuome ka akuru.",
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
    title: "Pentekost kod Chuny Maler (Pentecost & The Holy Spirit)",
    reference: { book: "Tich Joote", chapter: 2 },
    summary: "Chuny Maler lornigi jopuonjre e od ranyisi kaka dho-mach, mi gichako wacho dhok mopogore opogore.",
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

  // Daily Verse logic
  const dailyVerse = useMemo(() => {
    const today = new Date().toDateString();
    let hash = 0;
    for (let i = 0; i < today.length; i++) {
        hash = ((hash << 5) - hash) + today.charCodeAt(i);
        hash |= 0; 
    }
    const mathayo1 = BIBLE_DATA['Mathayo']?.[1] || [];
    if (mathayo1.length === 0) return null;
    const index = Math.abs(hash) % mathayo1.length;
    return {
      book: 'Mathayo',
      chapter: 1,
      verse: index + 1,
      text: mathayo1[index]
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

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-[#eaeaea] font-sans selection:bg-orange-500/30">
      <div className="max-w-[520px] mx-auto min-h-screen flex flex-col relative overflow-hidden bg-[#1a1a1a] shadow-2xl">
        {/* Header - Matching Image */}
        <header className="sticky top-0 z-20 bg-[#252525] border-b border-white/5">
          <div className="flex items-center justify-between px-4 h-12">
            <button className="text-white/80">
              <Menu size={24} />
            </button>
            <h1 className="font-extrabold text-sm tracking-widest text-white uppercase">LUO BIBLE</h1>
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
                              <span>Mako Simbi (Install App)</span>
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
                          <span>Mago Moseywaki (Bookmarks)</span>
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

          <div className="px-3 pb-3">
            <div className="flex items-center gap-2">
              <div className="flex-1 flex items-center gap-2 rounded-lg px-3 py-2 bg-white h-11">
                <Search size={20} className="text-[#888]" />
                <input 
                  type="text" 
                  placeholder="Search" 
                  className="w-full bg-transparent outline-none text-base text-black placeholder:text-[#888]"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <button 
                onClick={() => setSearchQuery('')}
                className="bg-[#555] text-white font-bold h-11 px-5 rounded-lg text-sm tracking-wider"
              >
                CANCEL
              </button>
            </div>
            
            <div className="mt-3 bg-[#2a2a2a] rounded-full h-8 flex items-center overflow-hidden relative">
              <div className="whitespace-nowrap inline-block animate-marquee absolute left-full font-bold text-[11px] tracking-wider uppercase text-white/50 px-4">
                MORNING & EVENING DEVOTIONS BY C. SPURGEON • MORNING & EVENING DEVOTIONS BY C. SPURGEON
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
                    <div className="p-12 text-center text-white/40 italic">No results found for "{searchQuery}"</div>
                  )}
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-3">
                  {BOOKS.map((book) => (
                    <div
                      key={book.key}
                      onClick={() => openReader(book.name)}
                      className="p-4 bg-[#333] rounded-xl border border-white/5 flex flex-col relative cursor-pointer active:scale-95 transition-transform"
                    >
                      <span className={cn("font-black text-lg", book.color)}>
                        {book.name}
                      </span>
                      <span className="text-[12px] font-bold text-white/20 mt-1">
                        {book.chapters} Chapters
                      </span>
                      <ChevronRight size={20} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/10" />
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === 'old' && (
            <div className="flex flex-col items-center justify-center p-12 text-center h-[60vh] space-y-6">
              <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center">
                <BookOpen size={40} className="text-white/20" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-black text-white/40 uppercase tracking-widest italic">Muma Machon</h3>
                <p className="text-white/20 text-sm italic max-w-[240px] mx-auto">
                  Muma Machon (Old Testament) is coming soon in the next update.
                </p>
              </div>
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
                      <p className="text-orange-500 text-xs font-black uppercase tracking-wider">Status: Offline & Native Enabled</p>
                    </div>
                  </div>
                  
                  <div className="bg-[#1f1f1f] rounded-xl p-4 text-[12px] text-white/60 space-y-3 border border-white/5 leading-relaxed">
                    <p>
                      Maber! App ni itiach <span className="text-white font-bold">offline</span> kuom simbi ma onge gowi kata gigo ma dwaro mbofwa (internet connection).
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
                    <h3 className="font-extrabold text-white text-base tracking-wide uppercase">Luo Bible e Simbi (Install App)</h3>
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
                    {deferredPrompt ? "Install Luo Bible App" : "Gik ma weko / View App Setup"}
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
                      Luo Biblia Maler runs fully offline once added. It delivers a fast, standalone application interface that looks and behaves like a native utility!
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
                <h2 className="text-xs font-black uppercase tracking-widest text-[#f97316] mb-4">Mago moseywaki (Bookmarks)</h2>
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
            { id: 'stories', icon: Plus, label: 'Stories' },
            { id: 'daily', icon: FileText, label: 'Wes Ma Kawuono' },
            { id: 'more', icon: Info, label: 'More' }
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
                className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[520px] h-[94vh] bg-[#1a1a1a] rounded-t-3xl border-t border-white/10 z-50 flex flex-col overflow-hidden"
              >
                <div className="sticky top-0 z-10 px-4 py-4 bg-[#252525] border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <button onClick={closeReader} className="text-white/60">
                      <ArrowLeft size={24} />
                    </button>
                    <div>
                      <h2 className="font-bold text-lg leading-none">{selectedBook.name}</h2>
                      <span className="text-[10px] uppercase tracking-widest text-[#f97316] font-bold">Muma Manyien</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    {BOOK_INTROS[selectedBook.name] && (
                      <button 
                        onClick={() => setShowIntro(!showIntro)}
                        className={cn(
                          "px-3 py-1.5 rounded-lg text-xs font-black tracking-widest uppercase transition-all",
                          showIntro ? "bg-orange-500 text-black shadow-lg shadow-orange-500/20" : "bg-white/5 text-white/40"
                        )}
                      >
                        Intro
                      </button>
                    )}
                    <div className="flex items-center gap-3 ml-2">
                      <button 
                        onClick={() => {
                          navigateChapter('prev');
                          setShowIntro(false);
                        }}
                        disabled={selectedChapter <= 1}
                        className="p-1 disabled:opacity-30"
                      >
                        <ChevronLeft size={24} />
                      </button>
                      <select
                        value={selectedChapter}
                        onChange={(e) => {
                          setSelectedChapter(parseInt(e.target.value));
                          setShowIntro(false);
                        }}
                        className="bg-[#333] border border-white/10 rounded-lg px-2 py-1.5 font-bold text-white text-[11px] outline-none min-w-[100px]"
                      >
                        {Array.from({ length: selectedBook.chapters }, (_, i) => i + 1).map(ch => (
                          <option key={ch} value={ch}>Chapter {ch}</option>
                        ))}
                      </select>
                      <button 
                        onClick={() => {
                          navigateChapter('next');
                          setShowIntro(false);
                        }}
                        disabled={selectedChapter >= selectedBook.chapters}
                        className="p-1 disabled:opacity-30"
                      >
                        <ChevronRight size={24} />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex-1 overflow-y-auto p-4 space-y-6 custom-scrollbar">
                  {showIntro && BOOK_INTROS[selectedBook.name] ? (
                    <div className="px-2 py-4 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                      <div className="space-y-1">
                        <h1 className="text-4xl font-black text-white italic">{selectedBook.name}</h1>
                        <p className="text-[#f97316] font-black uppercase tracking-[0.2em] text-xs">Wheche Motelo</p>
                      </div>

                      <div className="grid grid-cols-1 gap-4">
                        <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                          <p className="text-[10px] uppercase font-black text-white/30 tracking-widest mb-1">Jandiko (Author)</p>
                          <p className="text-white font-bold">{BOOK_INTROS[selectedBook.name].author}</p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                            <p className="text-[10px] uppercase font-black text-white/30 tracking-widest mb-1">Kar Ndiko</p>
                            <p className="text-white font-bold">{BOOK_INTROS[selectedBook.name].location}</p>
                          </div>
                          <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                            <p className="text-[10px] uppercase font-black text-white/30 tracking-widest mb-1">Kinde Ndiko</p>
                            <p className="text-white font-bold">{BOOK_INTROS[selectedBook.name].date}</p>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h4 className="text-sm font-black uppercase text-[#f97316] tracking-widest px-1">Summary</h4>
                        <div className="p-6 bg-white/5 rounded-3xl border border-white/5 leading-relaxed text-white/80 italic">
                          {BOOK_INTROS[selectedBook.name].summary}
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h4 className="text-sm font-black uppercase text-[#f97316] tracking-widest px-1">Gik Manie Iye</h4>
                        <div className="text-lg leading-relaxed text-white/70 space-y-4 px-2">
                          {BOOK_INTROS[selectedBook.name].overview.split('. ').map((p, i) => (
                            <p key={i}>{p}.</p>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h4 className="text-sm font-black uppercase text-[#f97316] tracking-widest px-1">Weche Mochan</h4>
                        <div className="space-y-2">
                          {BOOK_INTROS[selectedBook.name].sections.map((s, i) => (
                            <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5 group hover:bg-orange-500/10 transition-colors">
                              <span className="text-white/60 font-bold text-sm">{s.title}</span>
                              <span className="text-orange-500 font-black text-xs tabular-nums">{s.range}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <button 
                        onClick={() => setShowIntro(false)}
                        className="w-full py-5 bg-white text-black font-black rounded-2xl uppercase tracking-widest text-sm hover:bg-orange-500 transition-colors shadow-xl shadow-white/5"
                      >
                        Chak Somo (Start Reading)
                      </button>
                    </div>
                  ) : (
                    <div className="px-2">
                      <h3 className="font-serif text-3xl mb-8 text-white/90 text-center">{selectedBook.name} {selectedChapter}</h3>
                      <div className="space-y-6">
                      {BIBLE_DATA[selectedBook.name]?.[selectedChapter]?.map((verse, i) => {
                        const verseNum = i + 1;
                        const isBookmarked = isVerseBookmarked(selectedBook.name, selectedChapter, verseNum);
                        return (
                          <div key={i} className="flex gap-4 group">
                            <span 
                              className={cn(
                                "shrink-0 w-8 h-8 rounded-lg flex items-center justify-center font-black text-xs transition-colors",
                                isBookmarked ? "bg-orange-500 text-black" : "bg-white/5 text-[#f97316] group-hover:bg-white/10"
                              )}
                              onClick={() => toggleBookmark(selectedBook.name, selectedChapter, verseNum, verse)}
                            >
                              {verseNum}
                            </span>
                            <div className="flex-1 flex flex-col gap-2">
                              <div className="flex justify-between items-start gap-2">
                                <p className="text-lg leading-relaxed text-white/80 font-serif flex-1">
                                  {verse}
                                </p>
                                <button 
                                  onClick={() => toggleBookmark(selectedBook.name, selectedChapter, verseNum, verse)}
                                  className={cn(
                                    "p-1.5 rounded-lg transition-colors shrink-0",
                                    isBookmarked ? "text-orange-500" : "text-white/10 hover:text-white/30"
                                  )}
                                >
                                  {isBookmarked ? <BookmarkCheck size={20} /> : <Bookmark size={20} />}
                                </button>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                      {(!BIBLE_DATA[selectedBook.name] || !BIBLE_DATA[selectedBook.name][selectedChapter]) && (
                        <div className="py-20 flex flex-col items-center justify-center text-center px-8">
                          <BookOpen size={48} className="text-white/10 mb-4" />
                          <p className="text-white/40 italic font-serif">Muma manyien en piny owacho... (Scripture content for this chapter is being updated.)</p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
                <div className="h-20" />
              </div>
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
    </div>
  );
}
