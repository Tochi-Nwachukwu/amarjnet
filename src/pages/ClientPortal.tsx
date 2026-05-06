import { useEffect, useRef } from 'react';
import { Phone, Mail, AlertTriangle } from 'lucide-react';
import PageHero from '@/components/PageHero';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const portals = [
  { icon: 'Monitor', name: 'IT Support Desk', desc: 'Log a ticket, check ticket status, view history', url: '#' },
  { icon: 'Activity', name: 'Systems Dashboard', desc: 'View your live IT health, uptime, and alerts', url: '#' },
  { icon: 'Cloud', name: 'Microsoft 365', desc: 'Access your M365 apps, email, SharePoint & Teams', url: 'https://office.com' },
  { icon: 'Mail', name: 'Email & Messaging', desc: 'Outlook Web Access -- access email from any browser', url: 'https://outlook.office.com' },
  { icon: 'UserPlus', name: 'Client Onboarding', desc: 'Complete your onboarding steps and IT audit forms', url: '#' },
  { icon: 'GraduationCap', name: 'Training & Awareness', desc: 'Security awareness training, phishing simulations', url: '#' },
  { icon: 'BookOpen', name: 'Documentation & KB', desc: 'Your IT runbooks, how-to guides, and knowledge base', url: '#' },
  { icon: 'CreditCard', name: 'Billing & Invoices', desc: 'View invoices, update payment details, download statements', url: '#' },
  { icon: 'Key', name: 'Password Manager', desc: 'Access your business password vault', url: '#' },
  { icon: 'MonitorSmartphone', name: 'Remote Access', desc: 'Securely connect to your work desktop from anywhere', url: '#' },
];

export default function ClientPortal() {
  const tilesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.portal-tile', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.06, ease: 'power3.out', scrollTrigger: { trigger: tilesRef.current, start: 'top 80%' } });
    }, tilesRef);
    return () => ctx.revert();
  }, []);

  return (
    <main>
      <PageHero heading="Your Client Portal" sub="Everything you need -- in one place. Access your IT support desk, systems monitoring, Microsoft 365, training, and more below." />

      {/* Portal Tiles */}
      <section ref={tilesRef} className="py-20 lg:py-28" style={{ background: '#fff' }}>
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {portals.map((portal, i) => (
              <a
                key={i}
                href={portal.url}
                target="_blank"
                rel="noopener noreferrer"
                className="portal-tile glass-card p-6 group block opacity-0"
                style={{ borderLeft: '3px solid #00B4D8' }}
              >
                <div className="flex items-start justify-between mb-3">
                  <h4 className="font-semibold text-base" style={{ color: '#1A2332' }}>{portal.name}</h4>
                  <span className="text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: '#00B4D8' }}>
                    Open &rarr;
                  </span>
                </div>
                <p className="text-sm" style={{ color: 'rgba(26,35,50,0.7)' }}>{portal.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Support Contact Strip */}
      <section className="py-12 lg:py-16" style={{ background: '#F4F6F8' }}>
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-12">
          <h3 className="font-semibold text-center mb-8" style={{ color: '#1A2332' }}>Need help? Reach us directly.</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card p-6 text-center">
              <Phone size={24} className="mx-auto mb-3" style={{ color: '#00B4D8' }} />
              <p className="font-semibold text-sm mb-1" style={{ color: '#1A2332' }}>+44 20 7839 0199</p>
              <p className="text-xs" style={{ color: 'rgba(26,35,50,0.6)' }}>Mon--Fri 08:00--18:00</p>
            </div>
            <div className="glass-card p-6 text-center">
              <Mail size={24} className="mx-auto mb-3" style={{ color: '#00B4D8' }} />
              <p className="font-semibold text-sm mb-1" style={{ color: '#1A2332' }}>support@amarjnet.uk</p>
              <p className="text-xs" style={{ color: 'rgba(26,35,50,0.6)' }}>Response within 1 hour</p>
            </div>
            <div className="glass-card p-6 text-center">
              <AlertTriangle size={24} className="mx-auto mb-3" style={{ color: '#00B4D8' }} />
              <p className="font-semibold text-sm mb-1" style={{ color: '#1A2332' }}>Emergency: +44 20 7839 0199</p>
              <p className="text-xs" style={{ color: 'rgba(26,35,50,0.6)' }}>Available 24/7 for P1 incidents</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
