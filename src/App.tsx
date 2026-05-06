import { Routes, Route, useLocation } from 'react-router';
import { useEffect } from 'react';
import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
import Services from '@/pages/Services';
import Industries from '@/pages/Industries';
import Pricing from '@/pages/Pricing';
import About from '@/pages/About';
import ClientPortal from '@/pages/ClientPortal';
import Resources from '@/pages/Resources';
import Contact from '@/pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Layout() {
  return (
    <div className="min-h-[100dvh] flex flex-col" style={{ fontFamily: "'Outfit', sans-serif" }}>
      <ScrollToTop />
      <TopBar />
      <Navbar />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/client-portal" element={<ClientPortal />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default function App() {
  return <Layout />;
}
