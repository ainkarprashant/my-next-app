export default function CareerPage() {
  return (
    <main style={{ padding: '2rem', minHeight: '60vh' }}>
      <h2 style={{ fontSize: '2rem', color: '#4f46e5', marginBottom: '1rem' }}>Careers at My Next App</h2>
      <p style={{ fontSize: '1.1rem', color: '#333', marginBottom: '2rem' }}>
        Join our team and help us build the future of web applications! We are always looking for talented and passionate people.
      </p>
      <ul style={{ lineHeight: '2', fontSize: '1rem', color: '#222' }}>
        <li><strong>Frontend Developer</strong> – React/Next.js, CSS, UI/UX</li>
        <li><strong>Backend Developer</strong> – Node.js, API design, Databases</li>
        <li><strong>Designer</strong> – Web & Mobile, Branding, Figma</li>
      </ul>
      <p style={{ marginTop: '2rem', color: '#4f46e5' }}>
        Interested? Email us at <a href="mailto:careers@example.com" style={{ color: '#4f46e5', textDecoration: 'underline' }}>careers@example.com</a>
      </p>
    </main>
  );
}
