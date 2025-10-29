import Image from 'next/image'

export default function Portfolio() {
  return (
    <main style={{ padding: '2rem', minHeight: '60vh', maxWidth: 800, margin: '0 auto', background: '#fff', color: '#222' }}>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
        <Image src="/IMG_5147.jpg" alt="Prashant Ainkar" width={140} height={140} style={{ borderRadius: '999px', boxShadow: '0 8px 30px rgba(16,24,40,0.12)' }} />
      </div>
      <h1 style={{ fontSize: '2.5rem', color: '#3b2f7f', marginBottom: '1rem', textAlign: 'center' }}>Prashant Ainkar</h1>
      <h2 style={{ fontSize: '1.5rem', color: '#1e293b', marginBottom: '1rem' }}>Senior Software Developer</h2>
      <p style={{ fontSize: '1.1rem', color: '#222', marginBottom: '2rem' }}>
        I am a full-stack developer with experience in Laravel, AdonisJS, React, Angular, and Flutter. I enjoy building scalable APIs and modern UI web apps.
      </p>

      <h3 style={{ fontSize: '1.3rem', color: '#3b2f7f', marginBottom: '0.5rem' }}>About Me</h3>
      <p style={{ fontSize: '1rem', color: '#222', marginBottom: '1.5rem' }}>
        I have hands-on experience building scalable APIs and modern web applications using Laravel, AdonisJS, React, Angular, and Flutter. My expertise includes RESTful API design, dashboard development, and mobile app UI. I am comfortable working with MySQL, Docker, and Git for deployment and version control.
      </p>
      <div style={{ marginBottom: '2rem' }}>
        <strong style={{ color: '#3b2f7f' }}>Tech Stack:</strong>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '0.75rem' }}>
          {['Laravel','AdonisJS','Node.js','React','Next.js','Angular','Flutter','MySQL','Docker','Git', 'n8n', ].map((tech) => (
            <span key={tech} style={{
              display: 'inline-block',
              padding: '0.5rem 1.1rem',
              borderRadius: '999px',
              background: '#6366f1',
              color: '#fff',
              fontWeight: 500,
              fontSize: '1rem',
              boxShadow: '0 2px 8px #6366f122',
              border: 'none',
              cursor: 'pointer',
              transition: 'background 0.2s',
            }}>{tech}</span>
          ))}
        </div>
        <p style={{ marginTop: '1.2rem', color: '#444', fontSize: '0.98rem' }}>
          I use these technologies daily for building scalable APIs, modern web apps, and mobile solutions. I believe in continuous learning and regularly explore new frameworks and tools to stay updated with industry trends.
        </p>
      </div>

      <h3 style={{ fontSize: '1.3rem', color: '#3b2f7f', marginBottom: '0.5rem' }}>Projects</h3>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem', marginBottom: '2rem' }}>
        <div style={{ border: '1px solid #e0e7ff', borderRadius: '1rem', padding: '1rem', background: '#f8fafc', color: '#222' }}>
          <strong style={{ color: '#3b2f7f' }}>RexiPortal</strong> <br />
          <span style={{ color: '#6366f1' }}>AdonisJS + React + MySQL</span>
          <p>Admin & User dashboard, authentication, GST/Invoice module.</p>
          <a href="#" style={{ color: '#3b2f7f', textDecoration: 'underline' }}>View More</a>
        </div>
        <div style={{ border: '1px solid #e0e7ff', borderRadius: '1rem', padding: '1rem', background: '#f8fafc', color: '#222' }}>
          <strong style={{ color: '#3b2f7f' }}>Orca Payment</strong> <br />
          <span style={{ color: '#6366f1' }}>Laravel + MySQL</span>
          <p>Payment solution with merchant onboarding.</p>
          <a href="#" style={{ color: '#3b2f7f', textDecoration: 'underline' }}>View More</a>
        </div>
        <div style={{ border: '1px solid #e0e7ff', borderRadius: '1rem', padding: '1rem', background: '#f8fafc', color: '#222' }}>
          <strong style={{ color: '#3b2f7f' }}>LibertyRent2</strong> <br />
          <span style={{ color: '#6366f1' }}>Laravel APIs</span>
          <p>API development.</p>
          <a href="#" style={{ color: '#3b2f7f', textDecoration: 'underline' }}>View More</a>
        </div>
        <div style={{ border: '1px solid #e0e7ff', borderRadius: '1rem', padding: '1rem', background: '#f8fafc', color: '#222' }}>
          <strong style={{ color: '#3b2f7f' }}>Family Restaurant App</strong> <br />
          <span style={{ color: '#6366f1' }}>Flutter</span>
          <p>Order management + UI for customers.</p>
          <a href="#" style={{ color: '#3b2f7f', textDecoration: 'underline' }}>View More</a>
        </div>
      </div>

      <h3 style={{ fontSize: '1.3rem', color: '#3b2f7f', marginBottom: '0.5rem' }}>Experience</h3>
      <div style={{ border: '1px solid #e0e7ff', borderRadius: '1rem', padding: '1rem', marginBottom: '2rem', background: '#f8fafc', color: '#222' }}>
        <strong style={{ color: '#3b2f7f' }}>ImmensoTech</strong> — Software Developer <br />
        <span style={{ color: '#222', fontSize: '0.95rem' }}>2021 - Present</span>
        <ul style={{ marginTop: '0.5rem', paddingLeft: '1.2rem', color: '#222' }}>
          <li>Built REST APIs using Laravel/AdonisJS.</li>
          <li>Developed dashboards using React.</li>
          <li>Worked on Flutter mobile app development.</li>
          <li>Participated in product discussions & deployment.</li>
        </ul>
      </div>

      <h3 style={{ fontSize: '1.3rem', color: '#3b2f7f', marginBottom: '0.5rem' }}>Contact</h3>
      <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '1rem' }}>
        <a href="#" style={{ color: '#3b2f7f', fontSize: '1.1rem', textDecoration: 'none' }}>GitHub</a>
        <a href="#" style={{ color: '#3b2f7f', fontSize: '1.1rem', textDecoration: 'none' }}>LinkedIn</a>
        <a href="#" style={{ color: '#3b2f7f', fontSize: '1.1rem', textDecoration: 'none' }}>Email</a>
      </div>

      {/* Availability CTA */}
      <div style={{ marginBottom: '1.5rem', padding: '1rem', borderRadius: '12px', background: 'linear-gradient(90deg,#eef2ff, #fce7f3)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
        <div>
          <div style={{ fontWeight: 700, color: '#3b2f7f', fontSize: '1.05rem' }}>Availability</div>
          <div style={{ color: '#1f2937' }}>Open to opportunities — available for freelance or full-time roles.</div>
        </div>
        <div>
          <a href="mailto:prashant@example.com" style={{ padding: '0.6rem 1.1rem', background: '#4f46e5', color: '#fff', borderRadius: '999px', textDecoration: 'none', fontWeight: 600 }}>Contact Me</a>
        </div>
      </div>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid #e6edf7', paddingTop: '1rem', paddingBottom: '2rem', color: '#334155' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <div>© {new Date().getFullYear()} Prashant Ainkar. All rights reserved.</div>
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <a href="#" style={{ color: '#3b2f7f', textDecoration: 'none' }}>Privacy</a>
            <a href="#" style={{ color: '#3b2f7f', textDecoration: 'none' }}>Terms</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
