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
];

export default function MotivationPage(){
  const [idx, setIdx] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // pick an initial random quote only on the client after mount to avoid SSR/client markup mismatch
    const i = Math.floor(Math.random() * QUOTES.length);
    setIdx(i);
    setMounted(true);
  }, []);

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

  return (
    <main style={{ padding: 24, minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ maxWidth: 760, width: '100%' }}>
        <div style={{ display: 'flex', gap: 16, alignItems: 'center', marginBottom: 12 }}>
          <Image src="/IMG_5147.jpg" alt="Prashant" width={64} height={64} style={{ borderRadius: 999 }} />
          <div>
            <div style={{ fontSize: 20, fontWeight: 700, color: '#111827' }}>Motivation</div>
            <div style={{ color: '#374151' }}>Short quotes to boost your day</div>
          </div>
        </div>

        <div style={{ background: 'linear-gradient(180deg,#ffffff,#f8fafc)', padding: 24, borderRadius: 12, boxShadow: '0 10px 30px rgba(2,6,23,0.08)', display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ fontSize: 18, color: '#111827', minHeight: 72 }}>
            {mounted ? `“${QUOTES[idx]}”` : 'Loading quote...'}
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ color: '#6b7280', fontSize: 13 }}>{mounted ? `Quote ${idx + 1} of ${QUOTES.length}` : ''}</div>
            <div>
              <button onClick={nextQuote} style={{ padding: '8px 14px', background: '#4f46e5', color: '#fff', border: 'none', borderRadius: 999, cursor: 'pointer' }}>New Quote</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
