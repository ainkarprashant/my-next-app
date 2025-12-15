'use client';
import { useState } from 'react';

export default function ClientComponentPage() {
  const [btnState, setBtnState] = useState({ hover: false, active: false, focus: false });

  return (
    <div style={{ padding: 24, fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif', color: '#0b1220', background: '#f8fafc', minHeight: '60vh' }}>
      <h1 style={{ fontSize: 28, margin: '0 0 8px 0', color: '#0f172a' }}>Client Component</h1>
      <p style={{ margin: '0 0 16px 0', color: '#475569' }}>This is a client component page.</p>
      <button
        onClick={() => alert('Button clicked!')}
        aria-label="Click me button"
      >
        Click Me
      </button>
    </div>
  );
}
