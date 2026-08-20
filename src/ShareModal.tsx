import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
  X, Download, Share2, Upload, Copy, Check, RefreshCw,
  MessageCircle, Facebook, Instagram, Twitter
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Capacitor } from '@capacitor/core';
import { Share } from '@capacitor/share';
import { Filesystem, Directory } from '@capacitor/filesystem';

export interface ShareVerseProps {
  verse: string;
  book: string;
  chapter: number;
  verseNum: number;
  onClose: () => void;
}

interface GradientBg { type: 'gradient'; id: string; name: string; c1: string; c2: string; }
interface ImageBg { type: 'image'; id: string; name: string; src: string; }
type Bg = GradientBg | ImageBg;

const GRADIENTS: GradientBg[] = [
  { type: 'gradient', id: 'g1', name: 'Chieng', c1: '#f97316', c2: '#7c2d12' },
  { type: 'gradient', id: 'g2', name: 'Polo', c1: '#0f172a', c2: '#1e3a8a' },
  { type: 'gradient', id: 'g3', name: 'Sega', c1: '#065f46', c2: '#022c22' },
  { type: 'gradient', id: 'g4', name: 'Sabata', c1: '#7c3aed', c2: '#312e81' },
  { type: 'gradient', id: 'g5', name: 'Okinyi', c1: '#0ea5e9', c2: '#0c4a6e' },
  { type: 'gradient', id: 'g6', name: 'Rachar', c1: '#b91c1c', c2: '#450a0a' },
];

const BUNDLED_IMAGES: ImageBg[] = [
  { type: 'image', id: 'bg1', name: 'Chieng Wuok', src: '/backgrounds/bg1.jpg' },
  { type: 'image', id: 'bg2', name: 'Kitewo', src: '/backgrounds/bg2.jpg' },
  { type: 'image', id: 'bg3', name: 'Otieno', src: '/backgrounds/bg3.jpg' },
];

function wrapText(ctx: CanvasRenderingContext2D, text: string, maxWidth: number): string[] {
  const words = text.split(/\s+/).filter(Boolean);
  const lines: string[] = [];
  let line = '';
  for (const w of words) {
    const test = line ? line + ' ' + w : w;
    if (ctx.measureText(test).width > maxWidth && line) {
      lines.push(line);
      line = w;
    } else {
      line = test;
    }
  }
  if (line) lines.push(line);
  return lines;
}

function drawCover(ctx: CanvasRenderingContext2D, img: HTMLImageElement, W: number, H: number) {
  const ir = img.width / img.height;
  const r = W / H;
  let sw: number, sh: number, sx: number, sy: number;
  if (ir > r) {
    sh = img.height; sw = sh * r; sx = (img.width - sw) / 2; sy = 0;
  } else {
    sw = img.width; sh = sw / r; sx = 0; sy = (img.height - sh) / 2;
  }
  ctx.drawImage(img, sx, sy, sw, sh, 0, 0, W, H);
}

export default function ShareModal({ verse, book, chapter, verseNum, onClose }: ShareVerseProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [bg, setBg] = useState<Bg>(GRADIENTS[0]);
  const [bgImage, setBgImage] = useState<HTMLImageElement | null>(null);
  const [copied, setCopied] = useState(false);
  const [onlineLoading, setOnlineLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const reference = `${book} ${chapter}:${verseNum}`;
  const isNative = Capacitor.isNativePlatform();

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const W = canvas.width, H = canvas.height;
    ctx.clearRect(0, 0, W, H);

    if (bg.type === 'image' && bgImage) {
      drawCover(ctx, bgImage, W, H);
    } else if (bg.type === 'gradient') {
      const g = ctx.createLinearGradient(0, 0, W, H);
      g.addColorStop(0, bg.c1);
      g.addColorStop(1, bg.c2);
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, W, H);
    }

    ctx.fillStyle = 'rgba(0,0,0,0.42)';
    ctx.fillRect(0, 0, W, H);

    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    ctx.fillStyle = 'rgba(255,255,255,0.45)';
    ctx.font = 'bold 170px Georgia, serif';
    ctx.fillText('\u201c', W / 2, 185);

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 58px Georgia, serif';
    const maxWidth = W - 170;
    const lines = wrapText(ctx, verse, maxWidth);
    const lineHeight = 86;
    const total = lines.length * lineHeight;
    let y = (H - total) / 2;
    if (y < 300) y = 300;
    for (const ln of lines) {
      ctx.fillText(ln, W / 2, y);
      y += lineHeight;
    }

    ctx.fillStyle = '#f97316';
    ctx.font = 'bold 54px Georgia, serif';
    ctx.fillText(reference, W / 2, H - 160);
    ctx.fillStyle = 'rgba(255,255,255,0.72)';
    ctx.font = '38px Georgia, serif';
    ctx.fillText('Muma Maler', W / 2, H - 85);
  }, [bg, bgImage, verse, reference]);

  useEffect(() => {
    if (bg.type === 'image' && bg.src) {
      const img = new Image();
      img.crossOrigin = bg.src.startsWith('http') ? 'anonymous' : undefined;
      img.onload = () => { setBgImage(img); };
      img.onerror = () => setBgImage(null);
      img.src = bg.src;
    } else {
      setBgImage(null);
    }
  }, [bg]);

  useEffect(() => { draw(); }, [draw, bgImage]);

  const flashStatus = (msg: string) => {
    setStatus(msg);
    setTimeout(() => setStatus(null), 2500);
  };

  // Returns the rendered verse card as a PNG data URL.
  const getDataUrl = (): string | null => {
    const canvas = canvasRef.current;
    if (!canvas) return null;
    try {
      return canvas.toDataURL('image/png');
    } catch {
      return null;
    }
  };

  // Writes the rendered card to the device cache and returns its file:// URI.
  // The Capacitor Share plugin only accepts file:// URIs (not data: URLs).
  const getImageFileUri = async (): Promise<string | null> => {
    const dataUrl = getDataUrl();
    if (!dataUrl) return null;
    try {
      const base64 = dataUrl.split(',')[1];
      const path = `muma-maler-${book}-${chapter}-${verseNum}-${Date.now()}.png`;
      const result = await Filesystem.writeFile({
        path,
        data: base64,
        directory: Directory.Cache,
      });
      return result.uri;
    } catch {
      return null;
    }
  };

  // Native share (Capacitor) — hands the image file to the Android/iOS share
  // sheet via its file:// URI so the picture (not just text) is shared.
  const nativeShare = async (text: string) => {
    const uri = await getImageFileUri();
    if (!uri) { flashStatus('Koro ok otim tije. Tem kendo.'); return; }
    try {
      await Share.share({
        title: 'Muma Maler',
        text,
        dialogTitle: 'Or wes',
        files: [uri],
      });
    } catch {
      // user cancelled
    }
  };

  // Web share — image via navigator.share, fallback to text links.
  const webShare = async (text: string, textUrl?: string) => {
    const dataUrl = getDataUrl();
    if (dataUrl) {
      const blob = await (await fetch(dataUrl)).blob();
      const file = new File([blob], `${book}-${chapter}-${verseNum}.png`, { type: 'image/png' });
      const nav = navigator as any;
      if (nav.canShare && nav.canShare({ files: [file] })) {
        try { await nav.share({ files: [file], title: 'Muma Maler', text }); return; } catch { return; }
      }
    }
    if (textUrl) window.open(textUrl, '_blank');
    else downloadImage();
  };

  const shareImage = () => {
    const text = `${verse}\n— ${reference}`;
    if (isNative) nativeShare(text);
    else webShare(text);
  };

  const shareWhatsApp = () => {
    const text = `*${reference}*\n${verse}`;
    if (isNative) nativeShare(text);
    else webShare(text, `https://wa.me/?text=${encodeURIComponent(text)}`);
  };

  const shareFacebook = () => {
    const text = `${verse} — ${reference}`;
    if (isNative) nativeShare(text);
    else webShare(text, `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&quote=${encodeURIComponent(text)}`);
  };

  const shareInstagram = () => {
    const text = `${verse} — ${reference}`;
    if (isNative) nativeShare(text);
    else webShare(text);
  };

  const shareTwitter = () => {
    const text = `${verse}\n— ${reference}`;
    if (isNative) nativeShare(text);
    else webShare(text, `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`);
  };

  const downloadImage = async () => {
    const dataUrl = getDataUrl();
    if (!dataUrl) { flashStatus('Koro ok otim tije.'); return; }
    if (isNative) {
      try {
        const base64 = dataUrl.split(',')[1];
        const path = `${book}-${chapter}-${verseNum}.png`;
        await Filesystem.writeFile({
          path,
          data: base64,
          directory: Directory.Documents,
        });
        flashStatus('Osekan e Documents mar app!');
      } catch {
        flashStatus('Koro ok otim tije.');
      }
    } else {
      const a = document.createElement('a');
      a.href = dataUrl;
      a.download = `${book}-${chapter}-${verseNum}.png`;
      a.click();
    }
  };

  const copyText = async () => {
    try {
      await navigator.clipboard.writeText(`${verse}\n— ${reference}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch { /* ignore */ }
  };

  const fetchOnline = () => {
    setOnlineLoading(true);
    const n = Math.floor(Math.random() * 100000);
    const src = `https://picsum.photos/1080/1350?random=${n}`;
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      setBgImage(img);
      setBg({ type: 'image', id: 'online', name: 'Online', src });
      setOnlineLoading(false);
    };
    img.onerror = () => setOnlineLoading(false);
    img.src = src;
  };

  const onUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        setBgImage(img);
        setBg({ type: 'image', id: 'upload', name: 'Miyiero', src: String(reader.result) });
      };
      img.src = String(reader.result);
    };
    reader.readAsDataURL(file);
    e.target.value = '';
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-[80] bg-black/80 backdrop-blur-sm flex items-end sm:items-center justify-center"
      >
        <motion.div
          initial={{ y: '100%' }} animate={{ y: 0 }} exit={{ y: '100%' }}
          transition={{ type: 'spring', damping: 26, stiffness: 220 }}
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-[520px] max-h-[92vh] overflow-y-auto bg-[#1a1a1a] rounded-t-3xl sm:rounded-3xl border-t border-white/10 p-4 space-y-4"
        >
          <div className="flex items-center justify-between">
            <h3 className="font-extrabold text-white text-base uppercase tracking-widest">Or Wes (Share Verse)</h3>
            <button onClick={onClose} className="p-1.5 rounded-lg bg-white/5 text-white/60 hover:text-white">
              <X size={18} />
            </button>
          </div>

          <div className="rounded-2xl overflow-hidden border border-white/10">
            <canvas ref={canvasRef} width={1080} height={1350} className="w-full h-auto" />
          </div>

          <div className="space-y-2">
            <p className="text-[10px] uppercase tracking-widest text-white/40 font-black">Yier Gima Inyalo Ket Bang’ (Background)</p>
            <div className="flex gap-2 overflow-x-auto pb-1">
              {GRADIENTS.map((g) => (
                <button
                  key={g.id}
                  onClick={() => setBg(g)}
                  className="shrink-0 w-12 h-12 rounded-lg border-2 overflow-hidden"
                  style={{ background: `linear-gradient(135deg, ${g.c1}, ${g.c2})`, borderColor: bg.id === g.id ? '#f97316' : 'transparent' }}
                  title={g.name}
                />
              ))}
              {BUNDLED_IMAGES.map((im) => (
                <button
                  key={im.id}
                  onClick={() => setBg(im)}
                  className="shrink-0 w-12 h-12 rounded-lg border-2 overflow-hidden bg-cover bg-center"
                  style={{ backgroundImage: `url(${im.src})`, borderColor: bg.id === im.id ? '#f97316' : 'transparent' }}
                  title={im.name}
                />
              ))}
              <button
                onClick={() => fileInputRef.current?.click()}
                className="shrink-0 w-12 h-12 rounded-lg border-2 border-white/10 bg-white/5 flex items-center justify-center text-white/60 hover:text-white"
                title="Kel e Simbi (From device)"
              >
                <Upload size={18} />
              </button>
              <button
                onClick={fetchOnline}
                disabled={onlineLoading}
                className="shrink-0 w-12 h-12 rounded-lg border-2 border-white/10 bg-white/5 flex items-center justify-center text-white/60 hover:text-white disabled:opacity-40"
                title="Kel e Mbofwa (Online)"
              >
                <RefreshCw size={18} className={onlineLoading ? 'animate-spin' : ''} />
              </button>
            </div>
            <input ref={fileInputRef} type="file" accept="image/*" className="hidden" onChange={onUpload} />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={shareImage}
              className="h-12 bg-orange-500 hover:bg-orange-400 text-black font-black rounded-xl flex items-center justify-center gap-2 text-sm uppercase tracking-wider"
            >
              <Share2 size={18} /> Or (Share)
            </button>
            <button
              onClick={downloadImage}
              className="h-12 bg-white/10 hover:bg-white/15 text-white font-black rounded-xl flex items-center justify-center gap-2 text-sm uppercase tracking-wider"
            >
              <Download size={18} /> Kan E Simbi (Download)
            </button>
          </div>

          {status && (
            <p className="text-center text-xs font-bold text-green-400">{status}</p>
          )}

          <div className="grid grid-cols-4 gap-2">
            <button
              onClick={shareWhatsApp}
              className="h-12 bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#25D366] font-black rounded-xl flex flex-col items-center justify-center gap-0.5 text-[10px] uppercase tracking-wider"
            >
              <MessageCircle size={18} /> WhatsApp
            </button>
            <button
              onClick={shareFacebook}
              className="h-12 bg-[#1877F2]/15 hover:bg-[#1877F2]/25 text-[#1877F2] font-black rounded-xl flex flex-col items-center justify-center gap-0.5 text-[10px] uppercase tracking-wider"
            >
              <Facebook size={18} /> Facebook
            </button>
            <button
              onClick={shareInstagram}
              className="h-12 bg-[#E4405F]/15 hover:bg-[#E4405F]/25 text-[#E4405F] font-black rounded-xl flex flex-col items-center justify-center gap-0.5 text-[10px] uppercase tracking-wider"
            >
              <Instagram size={18} /> Instagram
            </button>
            <button
              onClick={shareTwitter}
              className="h-12 bg-white/10 hover:bg-white/15 text-white font-black rounded-xl flex flex-col items-center justify-center gap-0.5 text-[10px] uppercase tracking-wider"
            >
              <Twitter size={18} /> X
            </button>
          </div>

          <button
            onClick={copyText}
            className="w-full h-11 bg-white/10 hover:bg-white/15 text-white font-black rounded-xl flex items-center justify-center gap-1.5 text-xs uppercase tracking-wider"
          >
            {copied ? <Check size={16} className="text-green-400" /> : <Copy size={16} />} Kopi (Copy)
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
