export default function Footer() {
  return (
    <footer style={{
      background: 'linear-gradient(90deg, #312e81 0%, #a21caf 100%)',
      color: '#f3f4f6',
      padding: '1.5rem 0',
      textAlign: 'center',
      marginTop: 'auto',
      fontWeight: 500,
      letterSpacing: '0.5px',
      fontSize: '1.1rem',
      boxShadow: '0 -2px 12px #0002',
    }}>
      <div>© {new Date().getFullYear()} <span style={{ color: '#fbbf24' }}>My Next App</span>. All rights reserved.</div>
    </footer>
  );
}
