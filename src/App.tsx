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
import Careers from '@/pages/Careers';
import ClientPortal from '@/pages/ClientPortal';
import Resources from '@/pages/Resources';
import Contact from '@/pages/Contact';
import NotFound from '@/pages/NotFound';

// Individual service pages
import ManagedITSupport from '@/pages/services/ManagedITSupport';
import Cybersecurity from '@/pages/services/Cybersecurity';
import CloudM365 from '@/pages/services/CloudM365';
import NetworkingInfrastructure from '@/pages/services/NetworkingInfrastructure';

// Individual industry pages
import IndustryLegal from '@/pages/industries/Legal';
import IndustryFinancial from '@/pages/industries/FinancialServices';
import IndustryProfessional from '@/pages/industries/ProfessionalServices';
import IndustrySMB from '@/pages/industries/SMB';

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  
  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  
  return null;
}

function Layout() {
  return (
    <div className="min-h-[100dvh] flex flex-col" style={{ fontFamily: "'Inter', sans-serif" }}>
      <ScrollToTop />
      <TopBar />
      <Navbar />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/managed-it-support" element={<ManagedITSupport />} />
          <Route path="/services/cybersecurity" element={<Cybersecurity />} />
          <Route path="/services/cloud-microsoft-365" element={<CloudM365 />} />
          <Route path="/services/networking-infrastructure" element={<NetworkingInfrastructure />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/industries/legal" element={<IndustryLegal />} />
          <Route path="/industries/financial-services" element={<IndustryFinancial />} />
          <Route path="/industries/professional-services" element={<IndustryProfessional />} />
          <Route path="/industries/smb" element={<IndustrySMB />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/client-portal" element={<ClientPortal />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default function App() {
  return <Layout />;
}
