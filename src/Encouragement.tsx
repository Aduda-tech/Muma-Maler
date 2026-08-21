import React, { useState, useRef, useEffect } from 'react';
import { Send, BookOpen, Share2, Sparkles } from 'lucide-react';
import { BIBLE_DATA } from './data/bible-data';
import {
  EMOTIONS, GREETING, FALLBACK_REPLY, FALLBACK_VERSE, detectEmotion,
  EmotionVerse,
} from './data/encouragement';

interface VerseRef {
  book: string;
  chapter: number;
  verse: number;
  text: string;
}

interface Msg {
  id: number;
  role: 'app' | 'user';
  kind: 'text' | 'verse';
  text?: string;
  verse?: VerseRef;
}

interface Props {
  onOpen: (book: string, chapter: number, verse: number) => void;
  onShare: (verse: string, book: string, chapter: number, verseNum: number) => void;
}

let idc = 0;
const nextId = () => ++idc;

function toRef(r: EmotionVerse): VerseRef | null {
  const text = BIBLE_DATA[r.book]?.[r.chapter]?.[r.verse - 1];
  if (!text) return null;
  return { book: r.book, chapter: r.chapter, verse: r.verse, text };
}

export default function Encouragement({ onOpen, onShare }: Props) {
  const [messages, setMessages] = useState<Msg[]>([
    { id: nextId(), role: 'app', kind: 'text', text: GREETING },
  ]);
  const [input, setInput] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages]);

  const respond = (userText: string, forcedEmotionId?: string) => {
    const userMsg: Msg = { id: nextId(), role: 'user', kind: 'text', text: userText };
    const emotion = forcedEmotionId
      ? EMOTIONS.find(e => e.id === forcedEmotionId) ?? detectEmotion(userText)
      : detectEmotion(userText);

    const newMsgs: Msg[] = [userMsg];
    if (emotion) {
      newMsgs.push({ id: nextId(), role: 'app', kind: 'text', text: emotion.reply });
      for (const vr of emotion.verses) {
        const ref = toRef(vr);
        if (ref) newMsgs.push({ id: nextId(), role: 'app', kind: 'verse', verse: ref });
      }
    } else {
      newMsgs.push({ id: nextId(), role: 'app', kind: 'text', text: FALLBACK_REPLY });
      const ref = toRef(FALLBACK_VERSE);
      if (ref) newMsgs.push({ id: nextId(), role: 'app', kind: 'verse', verse: ref });
    }
    setMessages(m => [...m, ...newMsgs]);
  };

  const onSend = () => {
    const t = input.trim();
    if (!t) return;
    setInput('');
    respond(t);
  };

  const onChip = (emotionId: string, label: string) => {
    respond(label, emotionId);
  };

  return (
    <div className="flex flex-col h-full">
      {/* Chat area */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3 custom-scrollbar">
        {messages.map(m => {
          if (m.kind === 'text') {
            const isUser = m.role === 'user';
            return (
              <div key={m.id} className={isUser ? 'flex justify-end' : 'flex justify-start'}>
                <div
                  className={isUser
                    ? "max-w-[80%] px-4 py-2.5 rounded-2xl rounded-br-sm bg-orange-500 text-black text-sm font-medium"
                    : "max-w-[80%] px-4 py-2.5 rounded-2xl rounded-bl-sm bg-[#2a2a2a] border border-white/5 text-white/90 text-sm leading-relaxed"
                  }
                >
                  {m.text}
                </div>
              </div>
            );
          }
          // verse bubble
          const v = m.verse!;
          return (
            <div key={m.id} className="flex justify-start">
              <div className="max-w-[88%] p-4 rounded-2xl rounded-bl-sm bg-gradient-to-br from-orange-500/15 to-transparent border border-orange-500/20">
                <div className="flex items-center gap-1.5 mb-1 text-orange-400">
                  <Sparkles size={12} />
                  <span className="text-[10px] font-black uppercase tracking-widest">Wach Mar Nyasaye</span>
                </div>
                <p className="text-white/90 font-serif leading-relaxed mb-3">"{v.text}"</p>
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => onOpen(v.book, v.chapter, v.verse)}
                    className="text-[11px] font-black text-orange-500 hover:text-orange-300 flex items-center gap-1"
                  >
                    <BookOpen size={13} /> {v.book} {v.chapter}:{v.verse}
                  </button>
                  <button
                    onClick={() => onShare(v.text, v.book, v.chapter, v.verse)}
                    className="p-1.5 rounded-lg text-white/40 hover:text-white/80 transition-colors"
                    title="Or wes (Share)"
                  >
                    <Share2 size={15} />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Emotion chips */}
      <div className="px-3 pt-2">
        <p className="text-[10px] uppercase tracking-widest text-white/40 font-black mb-2 px-1">
          Iwinjo nade? (How do you feel?)
        </p>
        <div className="flex flex-wrap gap-1.5">
          {EMOTIONS.map(e => (
            <button
              key={e.id}
              onClick={() => onChip(e.id, e.label)}
              className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/70 hover:bg-orange-500/10 hover:border-orange-500/30 hover:text-white text-[11px] font-bold transition-colors"
            >
              <span className="mr-1">{e.emoji}</span>{e.label}
            </button>
          ))}
        </div>
      </div>

      {/* Input */}
      <div className="p-3 flex items-center gap-2">
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => { if (e.key === 'Enter') onSend(); }}
          placeholder="Ndik e pache wachnigo... (Type how you feel)"
          className="flex-1 h-11 px-4 bg-neutral-900 border border-white/10 rounded-xl text-sm text-white placeholder:text-white/30 outline-none focus:border-orange-500 transition-colors"
        />
        <button
          onClick={onSend}
          className="h-11 w-11 rounded-xl bg-orange-500 hover:bg-orange-400 text-black flex items-center justify-center active:scale-95 transition-all"
        >
          <Send size={18} />
        </button>
      </div>
    </div>
  );
}
