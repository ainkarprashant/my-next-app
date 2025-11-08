export default function Navbar() {
  return (
    <nav style={{
      padding: '1rem 2rem',
      background: 'linear-gradient(90deg, #312e81 0%, #6366f1 60%, #a21caf 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      boxShadow: '0 2px 12px #0002',
    }}>
      <h1 style={{ color: '#fff', fontWeight: 700, letterSpacing: '1px', fontSize: '1.5rem' }}>My Next App</h1>
      <ul style={{ display: 'flex', gap: '1.5rem', listStyle: 'none', margin: 0, padding: 0 }}>
        <li><a href="/" style={{ textDecoration: 'none', color: '#fbbf24', fontWeight: 500 }}>Home</a></li>
        <li><a href="/about" style={{ textDecoration: 'none', color: '#f3f4f6', fontWeight: 500 }}>About</a></li>
        <li><a href="/sample" style={{ textDecoration: 'none', color: '#a5b4fc', fontWeight: 500 }}>Sample</a></li>
        <li><a href="/career" style={{ textDecoration: 'none', color: '#f472b6', fontWeight: 500 }}>Career</a></li>
        <li><a href="/practice" style={{ textDecoration: 'none', color: '#38bdf8', fontWeight: 500 }}>Practice</a></li>
  <li><a href="/portfolio" style={{ textDecoration: 'none', color: '#6366f1', fontWeight: 500 }}>Portfolio</a></li>
  <li><a href="/motivation" style={{ textDecoration: 'none', color: '#fcd34d', fontWeight: 500 }}>Motivation</a></li>
  <li><a href="/todos" style={{ textDecoration: 'none', color: '#fda4af', fontWeight: 500 }}>To‑Do</a></li>
  <li><a href="/contact" style={{ textDecoration: 'none', color: '#6ee7b7', fontWeight: 500 }}>Contact</a></li>
      </ul>
    </nav>
  );
}
