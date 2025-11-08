"use client";
import { useState, useEffect, useRef } from 'react';

const STORAGE_KEY = 'my_next_app_todos_v1';

export default function TodosPage(){
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    try{
      const raw = typeof window !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null;
      if(raw){
        setTasks(JSON.parse(raw));
      }
    }catch(e){
      // ignore
    }
  }, []);

  useEffect(() => {
    try{
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    }catch(e){
      // ignore
    }
  }, [tasks]);

  function addTask(e){
    e && e.preventDefault();
    const v = text.trim();
    if(!v) return;
    const t = { id: Date.now(), text: v, done: false };
    setTasks(prev => [t, ...prev]);
    setText('');
    inputRef.current?.focus();
  }

  function toggleDone(id){
    setTasks(prev => prev.map(t => t.id === id ? { ...t, done: !t.done } : t));
  }

  function removeTask(id){
    setTasks(prev => prev.filter(t => t.id !== id));
  }

  return (
    <main style={{ padding: 28, minHeight: '65vh', display: 'flex', justifyContent: 'center' }}>
      <div style={{ width: 760, maxWidth: '96%' }}>
        <h2 style={{ fontSize: 22, marginBottom: 8, color: '#0f172a' }}>To‑Do</h2>
        <p style={{ color: '#64748b', marginTop: 0, marginBottom: 16 }}>A simple client-side to-do list. Items persist to your browser.</p>

        <form onSubmit={addTask} style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
          <input
            ref={inputRef}
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder="Add a new task..."
            style={{ flex: 1, padding: '10px 12px', borderRadius: 10, border: '1px solid rgba(15,23,42,0.08)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.6)' }}
          />
          <button style={{ padding: '10px 14px', borderRadius: 10, background: '#6d28d9', color: '#fff', border: 'none', cursor: 'pointer' }} onClick={addTask}>Add</button>
        </form>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {tasks.length === 0 && (
            <div style={{ color: '#94a3b8', padding: 20, borderRadius: 10, background: 'linear-gradient(180deg,#fff,#fbfbff)', border: '1px solid rgba(15,23,42,0.04)' }}>No tasks yet — add your first one above.</div>
          )}

          {tasks.map(task => (
            <div key={task.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 12, borderRadius: 10, background: '#fff', border: '1px solid rgba(15,23,42,0.04)', boxShadow: '0 6px 18px rgba(15,23,42,0.04)' }}>
              <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                <input type="checkbox" checked={!!task.done} onChange={() => toggleDone(task.id)} />
                <div style={{ color: task.done ? '#94a3b8' : '#0b1220', textDecoration: task.done ? 'line-through' : 'none' }}>{task.text}</div>
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                <button onClick={() => removeTask(task.id)} style={{ padding: '6px 10px', borderRadius: 8, background: '#fee2e2', color: '#b91c1c', border: 'none', cursor: 'pointer' }}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
