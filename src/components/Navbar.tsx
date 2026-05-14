import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X, ChevronDown } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  {
    label: 'Services',
    href: '/services',
    dropdown: [
      { label: 'Managed IT Support', href: '/services/managed-it-support' },
      { label: 'Cybersecurity', href: '/services/cybersecurity' },
      { label: 'Cloud & M365', href: '/services/cloud-microsoft-365' },
      { label: 'Networking', href: '/services/networking-infrastructure' },
      { label: 'All Services', href: '/services' },
    ],
  },
  {
    label: 'Industries',
    href: '/industries',
    dropdown: [
      { label: 'Legal', href: '/industries/legal' },
      { label: 'Financial Services', href: '/industries/financial-services' },
      { label: 'Professional Services', href: '/industries/professional-services' },
      { label: 'SMBs', href: '/industries/smb' },
      { label: 'All Industries', href: '/industries' },
    ],
  },
  { label: 'Pricing', href: '/pricing' },
  {
    label: 'About',
    href: '/about',
    dropdown: [
      { label: 'Team', href: '/about#team' },
      { label: 'Accreditations', href: '/about#accreditations' },
      { label: 'Careers', href: '/careers' },
    ],
  },
  {
    label: 'Resources',
    href: '/resources',
    dropdown: [
      { label: 'Blog', href: '/resources#blog' },
      { label: 'Guides & Downloads', href: '/resources#downloads' },
      { label: 'Case Studies', href: '/resources#case-studies' },
    ],
  },
  {
    label: 'Client Portal',
    href: '/client-portal',
    dropdown: [
      { label: 'IT Support Desk', href: 'https://usehalo.com/halopsa/' },
      { label: 'Systems Dashboard', href: 'https://www.connectwise.com/' },
      { label: 'Microsoft 365', href: 'https://office.com' },
      { label: 'Email & Messaging', href: 'https://outlook.office.com' },
      { label: 'Client Onboarding', href: '/contact' },
      { label: 'Training & Awareness', href: 'https://www.knowbe4.com/' },
      { label: 'Documentation & KB', href: 'https://www.itglue.com/' },
      { label: 'Billing & Invoices', href: 'https://www.xero.com/' },
      { label: 'Password Manager', href: 'https://1password.com/' },
      { label: 'Remote Access', href: 'https://www.connectwise.com/platform/rmm' },
      { label: 'Client Portal Overview', href: '/client-portal' },
    ],
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 250);
  };

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 100);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const isHome = location.pathname === '/';

  return (
    <>
      <header
        className="sticky z-50 transition-all duration-300"
        style={{
          top: '0px',
          height: '80px',
          background: scrolled || !isHome
            ? 'rgba(26, 35, 50, 0.95)'
            : 'transparent',
          backdropFilter: scrolled || !isHome ? 'blur(16px)' : 'none',
        }}
      >
        <div className="max-w-[1280px] mx-auto h-full flex items-center justify-between px-4 md:px-6 lg:px-12">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <img src="/amarjnet_logo_white.svg" alt="amarjnet logo" className="h-8 w-auto object-contain" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.dropdown && handleMouseEnter(link.label)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to={link.href}
                  className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors rounded-full"
                >
                  {link.label}
                  {link.dropdown && <ChevronDown size={14} />}
                </Link>
                {link.dropdown && openDropdown === link.label && (
                  <div
                    className="absolute top-full left-0 pt-2 min-w-[220px]"
                    onMouseEnter={() => handleMouseEnter(link.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div
                      className="py-2 px-1"
                      style={{
                        background: 'rgba(15, 43, 76, 0.95)',
                        backdropFilter: 'blur(24px)',
                        borderRadius: '16px',
                        border: '1px solid rgba(0, 180, 216, 0.15)',
                        boxShadow: '0 12px 40px rgba(0,0,0,0.2)',
                      }}
                    >
                      {link.dropdown.map((item, i) => {
                        const isExternal = item.href.startsWith('http');
                        return isExternal ? (
                          <a
                            key={i}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-xl transition-all"
                          >
                            {item.label}
                          </a>
                        ) : (
                          <Link
                            key={i}
                            to={item.href}
                            className="block px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-xl transition-all"
                          >
                            {item.label}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              to="/contact#it-review"
              className="hidden sm:inline-flex btn-primary text-xs h-10 px-5"
            >
              Get a Free IT Review
            </Link>
            <button
              className="lg:hidden text-white p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-[55] lg:hidden overflow-y-auto"
          style={{ background: 'rgba(26, 35, 50, 0.98)', top: '80px' }}
        >
          <nav className="flex flex-col p-6 gap-1">
            {navLinks.map((link) => (
              <div key={link.label}>
                {link.dropdown ? (
                  <>
                    <button
                      onClick={() => setMobileDropdown(mobileDropdown === link.label ? null : link.label)}
                      className="flex items-center justify-between w-full py-3 text-lg font-medium text-white/90 hover:text-[#1A5EAB] transition-colors"
                    >
                      {link.label}
                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-200 ${mobileDropdown === link.label ? 'rotate-180' : ''}`}
                      />
                    </button>
                    {mobileDropdown === link.label && (
                      <div className="pl-4 pb-2 flex flex-col gap-1">
                        {link.dropdown.map((item, i) => {
                          const isExternal = item.href.startsWith('http');
                          return isExternal ? (
                            <a
                              key={i}
                              href={item.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={() => setMobileOpen(false)}
                              className="py-2 text-sm text-white/60 hover:text-[#1A5EAB] transition-colors"
                            >
                              {item.label}
                            </a>
                          ) : (
                            <Link
                              key={i}
                              to={item.href}
                              onClick={() => setMobileOpen(false)}
                              className="py-2 text-sm text-white/60 hover:text-[#1A5EAB] transition-colors"
                            >
                              {item.label}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-3 text-lg font-medium text-white/90 hover:text-[#1A5EAB] transition-colors"
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <Link 
              to="/contact#it-review" 
              onClick={() => setMobileOpen(false)}
              className="btn-primary mt-4 text-center"
            >
              Get a Free IT Review
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
