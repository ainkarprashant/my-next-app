"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';

const QUOTES = [
  "The only way to do great work is to love what you do. — Steve Jobs",
  "Don't watch the clock; do what it does. Keep going. — Sam Levenson",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. — Winston Churchill",
  "Believe you can and you're halfway there. — Theodore Roosevelt",
  "The future depends on what you do today. — Mahatma Gandhi",
  "Start where you are. Use what you have. Do what you can. — Arthur Ashe",
  "You are never too old to set another goal or to dream a new dream. — C.S. Lewis",
  "What we achieve inwardly will change outer reality. — Plutarch",
  "Hardships often prepare ordinary people for an extraordinary destiny. — C.S. Lewis",
  "Perseverance is not a long race; it is many short races one after another. — Walter Elliot",
  "The harder you work for something, the greater you'll feel when you achieve it.",
  "Don't stop when you're tired. Stop when you're done.",
  "Dream it. Wish it. Do it.",
  "Little things make big days.",
  "It's going to be hard, but hard does not mean impossible.",
  "Sometimes we're tested not to show our weaknesses, but to discover our strengths.",
  "The key to success is to focus on goals, not obstacles.",
  "Push yourself, because no one else is going to do it for you.",
  "Great things never come from comfort zones.",
  "Work hard in silence, let success make the noise."
  ,
  "Stay patient and trust your journey.",
  "Focus on being productive instead of busy.",
  "Small progress is still progress.",
  "Consistency compounds; keep showing up.",
  "You don't have to be perfect to be amazing."
  ,
  "Leadership is not about titles; it's about impact, influence, and inspiration.",
  "Creativity is intelligence having fun. — Albert Einstein",
  "Resilience is the capacity to recover quickly from difficulties.",
  "Mindfulness: do one thing at a time and do it well.",
  "Productivity comes from focus — eliminate distractions and finish what matters."
  ,
  "You miss 100% of the shots you don't take. — Wayne Gretzky",
  "Act as if what you do makes a difference. It does. — William James",
  "Opportunities don't happen. You create them. — Chris Grosser",
  "Do something today that your future self will thank you for.",
  "The secret of getting ahead is getting started. — Mark Twain"
];

export default function MotivationPage(){
  const [idx, setIdx] = useState(0);
  const [copied, setCopied] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // try to restore last shown quote from localStorage (persisted index)
    try {
      const saved = typeof window !== 'undefined' ? localStorage.getItem('motivation_idx') : null;
      if (saved !== null) {
        const parsed = parseInt(saved, 10);
        if (!isNaN(parsed) && parsed >= 0 && parsed < QUOTES.length) {
          setIdx(parsed);
          setMounted(true);
          return;
        }
      }
    } catch (e) {
      // ignore localStorage errors
    }

    // pick an initial random quote only on the client after mount to avoid SSR/client markup mismatch
    const i = Math.floor(Math.random() * QUOTES.length);
    setIdx(i);
    setMounted(true);
  }, []);

  // persist current quote index so it survives page reloads
  useEffect(() => {
    if (!mounted) return;
    try {
      localStorage.setItem('motivation_idx', String(idx));
    } catch (e) {
      // ignore
    }
  }, [idx, mounted]);

  function nextQuote(){
    let i = Math.floor(Math.random() * QUOTES.length);
    // ensure different
    if(QUOTES.length > 1){
      while(i === idx){
        i = Math.floor(Math.random() * QUOTES.length);
      }
    }
    setIdx(i);
  }

  // share the current quote via Twitter
  function shareTwitter(){
    try{
      const text = `“${QUOTES[idx]}”`;
      const url = typeof window !== 'undefined' ? window.location.href : '';
      const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}${url ? '&url=' + encodeURIComponent(url) : ''}`;
      window.open(shareUrl, '_blank', 'noopener,noreferrer');
    }catch(e){
      // ignore
    }
  }

  // share the current page via LinkedIn (LinkedIn share accepts a URL)
  function shareLinkedIn(){
    try{
      const url = typeof window !== 'undefined' ? window.location.href : '';
      const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
      window.open(shareUrl, '_blank', 'noopener,noreferrer');
    }catch(e){
      // ignore
    }
  }

  // copy current quote to clipboard with small feedback
  async function copyQuote(){
    try{
      const text = `“${QUOTES[idx]}”`;
      if (navigator.clipboard && navigator.clipboard.writeText){
        await navigator.clipboard.writeText(text);
      } else {
        // fallback
        const ta = document.createElement('textarea');
        ta.value = text;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }catch(e){
      // ignore
    }
  }

  return (
    <main style={{ padding: 28, minHeight: '65vh', display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'linear-gradient(180deg,#f5f7ff 0%,#ffffff 40%)' }}>
      <div style={{ maxWidth: 760, width: '100%' }}>
        <div style={{ display: 'flex', gap: 16, alignItems: 'center', marginBottom: 14 }}>
          <Image src="/IMG_5147.jpg" alt="Prashant" width={72} height={72} style={{ borderRadius: 999, boxShadow: '0 6px 18px rgba(15,23,42,0.12)' }} />
          <div>
            <div style={{ fontSize: 22, fontWeight: 800, color: '#0f172a' }}>Motivation</div>
            <div style={{ color: '#475569' }}>Short quotes to boost your day</div>
          </div>
        </div>

        <div style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.85), rgba(248,250,252,0.75))', padding: 28, borderRadius: 14, boxShadow: '0 12px 30px rgba(15,23,42,0.06)', display: 'flex', flexDirection: 'column', gap: 14, border: '1px solid rgba(15,23,42,0.04)', backdropFilter: 'blur(6px)' }}>
          <div style={{ fontSize: 20, color: '#0b1220', minHeight: 88, lineHeight: 1.4, fontStyle: 'italic' }}>
            {mounted ? `“${QUOTES[idx]}”` : 'Loading quote...'}
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ color: '#64748b', fontSize: 13 }}>{mounted ? `Quote ${idx + 1} of ${QUOTES.length}` : ''}</div>
            <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
              <button onClick={copyQuote} style={{ padding: '8px 12px', background: '#eef2ff', color: '#0f172a', border: 'none', borderRadius: 999, cursor: 'pointer', fontSize: 13, boxShadow: '0 4px 10px rgba(79,70,229,0.12)', transition: 'transform .12s ease' }}>{copied ? 'Copied!' : 'Copy'}</button>
              <button onClick={shareTwitter} style={{ padding: '8px 12px', background: '#1da1f2', color: '#fff', border: 'none', borderRadius: 999, cursor: 'pointer', fontSize: 13, boxShadow: '0 4px 10px rgba(29,161,242,0.14)', transition: 'transform .12s ease' }}>Twitter</button>
              <button onClick={shareLinkedIn} style={{ padding: '8px 12px', background: '#0a66c2', color: '#fff', border: 'none', borderRadius: 999, cursor: 'pointer', fontSize: 13, boxShadow: '0 4px 10px rgba(10,102,194,0.14)', transition: 'transform .12s ease' }}>LinkedIn</button>
              <button onClick={nextQuote} style={{ padding: '10px 16px', background: '#6d28d9', color: '#fff', border: 'none', borderRadius: 999, cursor: 'pointer', fontSize: 14, fontWeight: 600, boxShadow: '0 8px 24px rgba(109,40,217,0.12)', transition: 'transform .12s ease' }}>New Quote</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
