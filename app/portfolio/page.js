export default function Portfolio() {
  return (
    <main style={{ padding: '2rem', minHeight: '60vh', maxWidth: 800, margin: '0 auto' }}>
      <h1 style={{ fontSize: '2.5rem', color: '#6366f1', marginBottom: '1rem' }}>Prashant Ainkar</h1>
      <h2 style={{ fontSize: '1.5rem', color: '#312e81', marginBottom: '1rem' }}>Senior Software Developer</h2>
      <p style={{ fontSize: '1.1rem', color: '#444', marginBottom: '2rem' }}>
        I am a full-stack developer with experience in Laravel, AdonisJS, React, Angular, and Flutter. I enjoy building scalable APIs and modern UI web apps.
      </p>

      <h3 style={{ fontSize: '1.3rem', color: '#6366f1', marginBottom: '0.5rem' }}>About Me</h3>
      <p style={{ fontSize: '1rem', color: '#444', marginBottom: '1.5rem' }}>
        I have hands-on experience building scalable APIs and modern web applications using Laravel, AdonisJS, React, Angular, and Flutter. My expertise includes RESTful API design, dashboard development, and mobile app UI. I am comfortable working with MySQL, Docker, and Git for deployment and version control.
      </p>
      <div style={{ marginBottom: '2rem' }}>
        <strong>Tech Stack:</strong>
        <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', listStyle: 'none', padding: 0, marginTop: '0.5rem', color: '#6366f1', fontWeight: 500 }}>
          <li>Laravel</li>
          <li>AdonisJS</li>
          <li>Node.js</li>
          <li>React</li>
          <li>Next.js</li>
          <li>Angular</li>
          <li>Flutter</li>
          <li>MySQL</li>
          <li>Docker</li>
          <li>Git</li>
        </ul>
      </div>

      <h3 style={{ fontSize: '1.3rem', color: '#6366f1', marginBottom: '0.5rem' }}>Projects</h3>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem', marginBottom: '2rem' }}>
        <div style={{ border: '1px solid #e0e7ff', borderRadius: '1rem', padding: '1rem' }}>
          <strong>RexiPortal</strong> <br />
          <span style={{ color: '#6366f1' }}>AdonisJS + React + MySQL</span>
          <p>Admin & User dashboard, authentication, GST/Invoice module.</p>
          <a href="#" style={{ color: '#6366f1', textDecoration: 'underline' }}>View More</a>
        </div>
        <div style={{ border: '1px solid #e0e7ff', borderRadius: '1rem', padding: '1rem' }}>
          <strong>Orca Payment</strong> <br />
          <span style={{ color: '#6366f1' }}>Laravel + MySQL</span>
          <p>Payment solution with merchant onboarding.</p>
          <a href="#" style={{ color: '#6366f1', textDecoration: 'underline' }}>View More</a>
        </div>
        <div style={{ border: '1px solid #e0e7ff', borderRadius: '1rem', padding: '1rem' }}>
          <strong>LibertyRent2</strong> <br />
          <span style={{ color: '#6366f1' }}>Laravel APIs</span>
          <p>API development.</p>
          <a href="#" style={{ color: '#6366f1', textDecoration: 'underline' }}>View More</a>
        </div>
        <div style={{ border: '1px solid #e0e7ff', borderRadius: '1rem', padding: '1rem' }}>
          <strong>Family Restaurant App</strong> <br />
          <span style={{ color: '#6366f1' }}>Flutter</span>
          <p>Order management + UI for customers.</p>
          <a href="#" style={{ color: '#6366f1', textDecoration: 'underline' }}>View More</a>
        </div>
      </div>

      <h3 style={{ fontSize: '1.3rem', color: '#6366f1', marginBottom: '0.5rem' }}>Experience</h3>
      <div style={{ border: '1px solid #e0e7ff', borderRadius: '1rem', padding: '1rem', marginBottom: '2rem' }}>
        <strong>ImmensoTech</strong> — Software Developer <br />
        <span style={{ color: '#444', fontSize: '0.95rem' }}>2021 - Present</span>
        <ul style={{ marginTop: '0.5rem', paddingLeft: '1.2rem', color: '#444' }}>
          <li>Built REST APIs using Laravel/AdonisJS.</li>
          <li>Developed dashboards using React.</li>
          <li>Worked on Flutter mobile app development.</li>
          <li>Participated in product discussions & deployment.</li>
        </ul>
      </div>

      <h3 style={{ fontSize: '1.3rem', color: '#6366f1', marginBottom: '0.5rem' }}>Contact</h3>
      <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '2rem' }}>
        <a href="#" style={{ color: '#6366f1', fontSize: '1.5rem', textDecoration: 'none' }}>GitHub</a>
        <a href="#" style={{ color: '#6366f1', fontSize: '1.5rem', textDecoration: 'none' }}>LinkedIn</a>
        <a href="#" style={{ color: '#6366f1', fontSize: '1.5rem', textDecoration: 'none' }}>Email</a>
      </div>
    </main>
  );
}
