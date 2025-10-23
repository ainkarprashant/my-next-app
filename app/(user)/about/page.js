export default function About() {
    return (
        <main style={{ padding: '2rem', minHeight: '60vh', background: 'linear-gradient(120deg, #e0e7ff 0%, #f3e8ff 100%)', borderRadius: '1rem', margin: '2rem auto', maxWidth: 700, boxShadow: '0 2px 16px #6366f122' }}>
            <h1 style={{ fontSize: '2rem', color: '#6366f1', marginBottom: '1rem' }}>About Us</h1>
            <p style={{ fontSize: '1.1rem', color: '#312e81', marginBottom: '1.5rem' }}>
                We are a company dedicated to providing the best services to our customers, with a passion for modern web technology and design.
            </p>
            <section style={{ marginBottom: '1.5rem' }}>
                <h2 style={{ color: '#a21caf', fontSize: '1.3rem', marginBottom: '0.5rem' }}>Our Mission</h2>
                <p style={{ color: '#4f46e5' }}>
                    To empower businesses and individuals by building beautiful, scalable, and high-performance web applications.
                </p>
            </section>
            <section style={{ marginBottom: '1.5rem' }}>
                <h2 style={{ color: '#a21caf', fontSize: '1.3rem', marginBottom: '0.5rem' }}>Our Values</h2>
                <ul style={{ color: '#312e81', paddingLeft: '1.2rem', margin: 0 }}>
                    <li>Innovation & Creativity</li>
                    <li>Customer-Centric Approach</li>
                    <li>Integrity & Transparency</li>
                    <li>Continuous Learning</li>
                </ul>
            </section>
            <section>
                <h2 style={{ color: '#a21caf', fontSize: '1.3rem', marginBottom: '0.5rem' }}>Meet the Team</h2>
                <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                    <div style={{ background: '#fff', borderRadius: '0.5rem', boxShadow: '0 1px 6px #6366f122', padding: '1rem', minWidth: 120 }}>
                        <strong style={{ color: '#6366f1' }}>Alex</strong>
                        <div style={{ color: '#312e81', fontSize: '0.95rem' }}>Founder & CEO</div>
                    </div>
                    <div style={{ background: '#fff', borderRadius: '0.5rem', boxShadow: '0 1px 6px #6366f122', padding: '1rem', minWidth: 120 }}>
                        <strong style={{ color: '#6366f1' }}>Jordan</strong>
                        <div style={{ color: '#312e81', fontSize: '0.95rem' }}>Lead Developer</div>
                    </div>
                    <div style={{ background: '#fff', borderRadius: '0.5rem', boxShadow: '0 1px 6px #6366f122', padding: '1rem', minWidth: 120 }}>
                        <strong style={{ color: '#6366f1' }}>Taylor</strong>
                        <div style={{ color: '#312e81', fontSize: '0.95rem' }}>UI/UX Designer</div>
                    </div>
                </div>
            </section>
        </main>
    );
}