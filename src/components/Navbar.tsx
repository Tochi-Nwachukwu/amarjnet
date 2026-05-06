import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X, ChevronDown } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  {
    label: 'Services',
    href: '/services',
    dropdown: [
      { label: 'Managed IT Support', href: '/services' },
      { label: 'Cybersecurity', href: '/services' },
      { label: 'Cloud & M365', href: '/services' },
      { label: 'Networking', href: '/services' },
      { label: 'All Services', href: '/services' },
    ],
  },
  {
    label: 'Industries',
    href: '/industries',
    dropdown: [
      { label: 'Legal', href: '/industries' },
      { label: 'Financial Services', href: '/industries' },
      { label: 'Professional Services', href: '/industries' },
      { label: 'SMBs', href: '/industries' },
    ],
  },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
  { label: 'Resources', href: '/resources' },
  { label: 'Client Portal', href: '/client-portal' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

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
          top: '36px',
          height: '64px',
          background: scrolled || !isHome
            ? 'rgba(26, 35, 50, 0.95)'
            : 'transparent',
          backdropFilter: scrolled || !isHome ? 'blur(16px)' : 'none',
        }}
      >
        <div className="max-w-[1280px] mx-auto h-full flex items-center justify-between px-4 md:px-6 lg:px-12">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: '#00B4D8' }}>
              <span className="text-white font-bold text-sm">a</span>
            </div>
            <span className="text-white font-semibold text-lg tracking-tight">amarjnet</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.dropdown && setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
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
                    className="absolute top-full left-0 mt-1 py-2 px-1 min-w-[200px]"
                    style={{
                      background: 'rgba(15, 43, 76, 0.95)',
                      backdropFilter: 'blur(24px)',
                      borderRadius: '16px',
                      border: '1px solid rgba(0, 180, 216, 0.15)',
                      boxShadow: '0 12px 40px rgba(0,0,0,0.2)',
                    }}
                  >
                    {link.dropdown.map((item, i) => (
                      <Link
                        key={i}
                        to={item.href}
                        className="block px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-xl transition-all"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
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
          className="fixed inset-0 z-[55] lg:hidden"
          style={{ background: 'rgba(26, 35, 50, 0.98)', top: '100px' }}
        >
          <nav className="flex flex-col p-6 gap-2">
            {navLinks.map((link) => (
              <div key={link.label}>
                <Link
                  to={link.href}
                  className="block py-3 text-lg font-medium text-white/90 hover:text-[#00B4D8] transition-colors"
                >
                  {link.label}
                </Link>
                {link.dropdown && (
                  <div className="pl-4 flex flex-col gap-1">
                    {link.dropdown.map((item, i) => (
                      <Link
                        key={i}
                        to={item.href}
                        className="py-2 text-sm text-white/60 hover:text-[#00B4D8]"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link to="/contact" className="btn-primary mt-4 text-center">
              Get a Free IT Review
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
