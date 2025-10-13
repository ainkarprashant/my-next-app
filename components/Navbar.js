export default function Navbar() {
  return (
    <nav style={{ padding: '1rem', background: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <h1>Navbar</h1>
      <ul style={{ display: 'flex', gap: '1.5rem', listStyle: 'none', margin: 0, padding: 0 }}>
        <li><a href="/" style={{ textDecoration: 'none', color: '#333' }}>Home</a></li>
        <li><a href="/about" style={{ textDecoration: 'none', color: '#333' }}>About</a></li>
        <li><a href="/contact" style={{ textDecoration: 'none', color: '#333' }}>Contact</a></li>
      </ul>
    </nav>
  );
}
