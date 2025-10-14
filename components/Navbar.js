export default function Navbar() {
  return (
    <nav style={{ padding: '1rem', background: '#4f46e5', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <h1 style={{ color: '#fff' }}>Navbar</h1>
      <ul style={{ display: 'flex', gap: '1.5rem', listStyle: 'none', margin: 0, padding: 0 }}>
        <li><a href="/" style={{ textDecoration: 'none', color: '#fff' }}>Home</a></li>
        <li><a href="/about" style={{ textDecoration: 'none', color: '#fff' }}>About</a></li>
        <li><a href="/sample" style={{ textDecoration: 'none', color: '#fff' }}>Sample</a></li>
        <li><a href="/contact" style={{ textDecoration: 'none', color: '#fff' }}>Contact</a></li>
      </ul>
    </nav>
  );
}
