"use client";
import { useState, useEffect, useRef } from 'react';

const STORAGE_KEY = 'my_next_app_todos_v1';

export default function TodosPage(){
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState('');
  const [filter, setFilter] = useState('all'); // all | active | completed
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState('');
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

  function startEdit(task){
    setEditingId(task.id);
    setEditingText(task.text);
  }

  function saveEdit(id){
    const v = editingText.trim();
    if(!v){
      // if emptied, remove
      removeTask(id);
    } else {
      setTasks(prev => prev.map(t => t.id === id ? { ...t, text: v } : t));
    }
    setEditingId(null);
    setEditingText('');
  }

  function cancelEdit(){
    setEditingId(null);
    setEditingText('');
  }

  function toggleDone(id){
    setTasks(prev => prev.map(t => t.id === id ? { ...t, done: !t.done } : t));
  }

  function removeTask(id){
    setTasks(prev => prev.filter(t => t.id !== id));
  }

  function clearCompleted(){
    setTasks(prev => prev.filter(t => !t.done));
  }

  function clearAll(){
    setTasks([]);
  }

  return (
    <main style={{ padding: 28, minHeight: '65vh', display: 'flex', justifyContent: 'center' }}>
      <div style={{ width: 760, maxWidth: '96%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
          <div>
            <h2 style={{ fontSize: 22, margin: 0, color: '#0f172a' }}>To‑Do</h2>
            <div style={{ color: '#64748b', fontSize: 13 }}>A simple client-side to-do list. Items persist to your browser.</div>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <button onClick={clearCompleted} style={{ padding: '8px 10px', borderRadius: 8, background: '#f1f5f9', color: '#0f172a', border: '1px solid rgba(15,23,42,0.04)', cursor: 'pointer' }}>Clear completed</button>
            <button onClick={clearAll} style={{ padding: '8px 10px', borderRadius: 8, background: '#fee2e2', color: '#b91c1c', border: 'none', cursor: 'pointer' }}>Clear all</button>
          </div>
        </div>

        <form onSubmit={addTask} style={{ display: 'flex', gap: 8, marginBottom: 14 }}>
          <input
            ref={inputRef}
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder="Add a new task..."
            style={{ flex: 1, padding: '12px 14px', borderRadius: 12, border: '1px solid rgba(15,23,42,0.06)', background: '#fff', color: '#0b1220', outline: 'none', fontSize: 15 }}
          />
          <button style={{ padding: '10px 16px', borderRadius: 12, background: '#6d28d9', color: '#fff', border: 'none', cursor: 'pointer' }} onClick={addTask}>Add</button>
        </form>

        <div style={{ display: 'flex', gap: 8, marginBottom: 10 }}>
          <button onClick={() => setFilter('all')} style={{ padding: '6px 10px', borderRadius: 8, background: filter === 'all' ? '#eef2ff' : '#f8fafc', border: '1px solid rgba(15,23,42,0.04)', cursor: 'pointer' }}>All</button>
          <button onClick={() => setFilter('active')} style={{ padding: '6px 10px', borderRadius: 8, background: filter === 'active' ? '#eef2ff' : '#f8fafc', border: '1px solid rgba(15,23,42,0.04)', cursor: 'pointer' }}>Active</button>
          <button onClick={() => setFilter('completed')} style={{ padding: '6px 10px', borderRadius: 8, background: filter === 'completed' ? '#eef2ff' : '#f8fafc', border: '1px solid rgba(15,23,42,0.04)', cursor: 'pointer' }}>Completed</button>
          <div style={{ marginLeft: 'auto', color: '#64748b', alignSelf: 'center' }}>{tasks.length} items</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {tasks.filter(t => filter === 'all' ? true : filter === 'active' ? !t.done : t.done).length === 0 && (
            <div style={{ color: '#94a3b8', padding: 20, borderRadius: 10, background: 'linear-gradient(180deg,#fff,#fbfbff)', border: '1px solid rgba(15,23,42,0.04)' }}>No tasks — try adding one.</div>
          )}

          {tasks.filter(t => filter === 'all' ? true : filter === 'active' ? !t.done : t.done).map(task => (
            <div key={task.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 12, borderRadius: 10, background: '#fff', border: '1px solid rgba(15,23,42,0.04)', boxShadow: '0 6px 18px rgba(15,23,42,0.04)' }}>
              <div style={{ display: 'flex', gap: 12, alignItems: 'center', width: '100%' }}>
                <input type="checkbox" checked={!!task.done} onChange={() => toggleDone(task.id)} />
                {editingId === task.id ? (
                  <input
                    value={editingText}
                    onChange={e => setEditingText(e.target.value)}
                    onKeyDown={e => { if(e.key === 'Enter') saveEdit(task.id); if(e.key === 'Escape') cancelEdit(); }}
                    onBlur={() => saveEdit(task.id)}
                    autoFocus
                    style={{ flex: 1, padding: '8px 10px', borderRadius: 8, border: '1px solid rgba(15,23,42,0.06)' }}
                  />
                ) : (
                  <div onDoubleClick={() => startEdit(task)} style={{ color: task.done ? '#94a3b8' : '#0b1220', textDecoration: task.done ? 'line-through' : 'none', flex: 1 }}>{task.text}</div>
                )}
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                <button onClick={() => startEdit(task)} style={{ padding: '6px 10px', borderRadius: 8, background: '#f8fafc', color: '#0f172a', border: '1px solid rgba(15,23,42,0.04)', cursor: 'pointer' }}>Edit</button>
                <button onClick={() => removeTask(task.id)} style={{ padding: '6px 10px', borderRadius: 8, background: '#fee2e2', color: '#b91c1c', border: 'none', cursor: 'pointer' }}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
