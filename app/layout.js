
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)' }}>
        <Navbar />
        <div style={{ flex: 1 }}>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
