export default function Footer() {
  return (
    <footer style={{
      background: '#1e293b',
      color: '#fff',
      padding: '1.5rem 0',
      textAlign: 'center',
      marginTop: 'auto',
    }}>
      <div>© {new Date().getFullYear()} My Next App. All rights reserved.</div>
    </footer>
  );
}
