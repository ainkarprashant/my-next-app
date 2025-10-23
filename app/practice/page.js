import Image from 'next/image'

export default function Practice() {
  return (
    <main style={{ padding: '2rem', minHeight: '60vh', background: 'linear-gradient(120deg, #e0f2fe 0%, #a5b4fc 100%)', borderRadius: '1rem', margin: '2rem auto', maxWidth: 700, boxShadow: '0 2px 16px #38bdf822' }}>
      <h2 style={{ fontSize: '2rem', color: '#38bdf8', marginBottom: '1rem' }}>Practice Page</h2>
      <p style={{ fontSize: '1.1rem', color: '#312e81' }}>
        Welcome to the Practice section! Here you can find exercises, coding challenges, and resources to improve your skills.
      </p>
      <ul style={{ color: '#6366f1', marginTop: '1.5rem', paddingLeft: '1.2rem' }}>
        <li>JavaScript & React practice problems</li>
        <li>Frontend UI/UX mini-projects</li>
        <li>Backend API design exercises</li>
      </ul>

      {/* Practice Card for Image Component */}
      <section style={{ marginTop: '2.5rem', display: 'flex', justifyContent: 'center' }}>
        <div style={{
          background: '#fff',
          borderRadius: '1rem',
          boxShadow: '0 4px 24px #38bdf822',
          padding: '2rem',
          minWidth: 280,
          maxWidth: 370,
          border: '2px solid #38bdf8',
          textAlign: 'center',
        }}>
          <h3 style={{ color: '#38bdf8', fontSize: '1.2rem', marginBottom: '1rem', fontWeight: 600 }}>Image Component Practice Card</h3>
          <p style={{ color: '#312e81', fontSize: '1rem', marginBottom: '1.5rem' }}>Below is a sample Next.js <code>Image</code> component. Try changing its props, style, or source to see how it works!</p>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
            <Image
              src="/IMG_5147.jpg"
              alt="Prashant Ainkar"
              width={140}
              height={140}
              style={{ borderRadius: '50%', boxShadow: '0 2px 8px #38bdf822', border: '2px solid #a5b4fc' }}
            />
            <span style={{ color: '#6366f1', fontWeight: 500, fontSize: '1rem' }}>Prashant Ainkar</span>
            </div>
        </div>
      </section>
    </main>
  );
}
