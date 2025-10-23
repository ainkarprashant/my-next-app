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
        <div style={{ background: '#fff', borderRadius: '1rem', boxShadow: '0 2px 12px #38bdf822', padding: '2rem', minWidth: 280, maxWidth: 350 }}>
          <h3 style={{ color: '#38bdf8', fontSize: '1.2rem', marginBottom: '1rem' }}>Image Component Practice Card</h3>
          <p style={{ color: '#312e81', fontSize: '1rem' }}>Add your Next.js <code>Image</code> component here and experiment with its props and features.</p>
          <Image src="/IMG_5147.jpg" 
          className='rounded-full'
          alt="Prashant Ainkar" 
          width={100} 
          height={100}/>
        </div>
      </section>
    </main>
  );
}
