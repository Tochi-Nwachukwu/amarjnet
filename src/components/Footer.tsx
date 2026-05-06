import { Link } from 'react-router';
import { Linkedin, Twitter } from 'lucide-react';

const serviceLinks = [
  { label: 'Managed IT Support', href: '/services' },
  { label: 'Cybersecurity & Compliance', href: '/services' },
  { label: 'Cloud & Microsoft 365', href: '/services' },
  { label: 'Networking & Infrastructure', href: '/services' },
  { label: 'All Services', href: '/services' },
];

const companyLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Industries', href: '/industries' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Resources', href: '/resources' },
  { label: 'Careers', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const clientLinks = [
  { label: 'IT Support Desk', href: '/client-portal' },
  { label: 'Systems Dashboard', href: '/client-portal' },
  { label: 'Microsoft 365', href: '/client-portal' },
  { label: 'Email (Outlook Web)', href: '/client-portal' },
  { label: 'Training Portal', href: '/client-portal' },
  { label: 'Client Portal (All)', href: '/client-portal' },
];

export default function Footer() {
  return (
    <footer style={{ background: '#1A2332' }} className="text-white">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-12 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: '#00B4D8' }}>
                <span className="text-white font-bold text-sm">a</span>
              </div>
              <span className="font-semibold text-lg tracking-tight">amarjnet</span>
            </div>
            <p className="text-sm text-white/60 mb-6 leading-relaxed">
              Technology that works. Business that grows.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 hover:bg-[#00B4D8] transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 hover:bg-[#00B4D8] transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-sm mb-4 tracking-wide">Services</h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm text-white/50 hover:text-[#00B4D8] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-sm mb-4 tracking-wide">Company</h4>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm text-white/50 hover:text-[#00B4D8] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Client Access */}
          <div>
            <h4 className="font-semibold text-sm mb-4 tracking-wide">Client Access</h4>
            <ul className="space-y-2.5">
              {clientLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm text-white/50 hover:text-[#00B4D8] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Base Bar */}
        <div className="mt-12 pt-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/40 text-center md:text-left">
              &copy; 2026 Amarjnet Limited. Registered in Scotland, United Kingdom. Company Number: SC444231. Registered Office: 5 South Charlotte Street, Edinburgh, EH2 4AN.
            </p>
            <div className="flex items-center gap-3 text-xs text-white/40">
              <Link to="/" className="hover:text-white/70 transition-colors">Privacy Policy</Link>
              <span className="opacity-30">|</span>
              <Link to="/" className="hover:text-white/70 transition-colors">Cookie Policy</Link>
              <span className="opacity-30">|</span>
              <Link to="/" className="hover:text-white/70 transition-colors">Terms of Service</Link>
              <span className="opacity-30">|</span>
              <Link to="/" className="hover:text-white/70 transition-colors">Acceptable Use</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
