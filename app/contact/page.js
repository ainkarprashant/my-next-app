export default function ContactPage() {
  return (
    <main style={{ padding: '2rem', minHeight: '60vh' }}>
      <h2 style={{ fontSize: '2rem', color: '#4f46e5', marginBottom: '1rem' }}>Contact Us</h2>
      <form style={{ maxWidth: '400px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem', background: '#f8fafc', padding: '2rem', borderRadius: '8px', boxShadow: '0 2px 8px #0001' }}>
        <label style={{ fontWeight: 'bold' }}>
          Name
          <input type="text" name="name" required style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #cbd5e1', marginTop: '0.5rem' }} />
        </label>
        <label style={{ fontWeight: 'bold' }}>
          Email
          <input type="email" name="email" required style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #cbd5e1', marginTop: '0.5rem' }} />
        </label>
        <label style={{ fontWeight: 'bold' }}>
          Message
          <textarea name="message" required rows={4} style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #cbd5e1', marginTop: '0.5rem' }} />
        </label>
        <button type="submit" style={{ background: '#4f46e5', color: '#fff', padding: '0.75rem', border: 'none', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' }}>
          Send Message
        </button>
      </form>
    </main>
  );
}
