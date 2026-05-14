import { useEffect, useRef } from 'react';
import { Link } from 'react-router';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check, Users, ArrowRight } from 'lucide-react';
import PageHero from '@/components/PageHero';

gsap.registerPlugin(ScrollTrigger);

const benefits = [
  'Full managed IT from day one, no internal IT hire needed',
  'Simple per-seat pricing, scales as your team grows',
  'Microsoft 365 included in Business and Enterprise+ tiers',
  'Free onboarding and IT audit on sign-up',
  '30-minute P1 response SLA',
  'Proactive monitoring and patch management on all devices',
  'Cybersecurity essentials included at every tier',
  'Dedicated account manager from 15+ seats',
];

const challenges = [
  { title: 'No In-House IT Team', desc: 'You don\'t need to hire an IT manager. Amarjnet becomes your fully outsourced IT department from day one.' },
  { title: 'Budget Predictability', desc: 'Fixed per-seat pricing means you know exactly what IT will cost every month. No surprise invoices.' },
  { title: 'Growing Pains', desc: 'Adding seats is seamless. No renegotiation, no contract changes. Just pro-rata billing from day one.' },
  { title: 'Enterprise-Level Security', desc: 'Small businesses are the #1 target for cyberattacks. We give you the same protection large enterprises use.' },
];

export default function IndustrySMB() {
  const contentRef = useRef<HTMLDivElement>(null);
  const challengesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.detail-text', { x: -40, opacity: 0 }, { x: 0, opacity: 1, duration: 0.7, ease: 'power3.out', scrollTrigger: { trigger: contentRef.current, start: 'top 75%' } });
      gsap.fromTo('.detail-image', { x: 40, opacity: 0 }, { x: 0, opacity: 1, duration: 0.7, ease: 'power3.out', scrollTrigger: { trigger: contentRef.current, start: 'top 75%' } });
      gsap.fromTo('.benefit-item', { x: -20, opacity: 0 }, { x: 0, opacity: 1, duration: 0.4, stagger: 0.06, ease: 'power3.out', scrollTrigger: { trigger: contentRef.current, start: 'top 65%' } });
      gsap.fromTo('.challenge-card', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: challengesRef.current, start: 'top 80%' } });
    });
    return () => ctx.revert();
  }, []);

  return (
    <main>
      <PageHero breadcrumb="Home > Industries > SMBs" heading="Enterprise IT. SMB budget." sub="Small and growing businesses deserve the same IT protection and reliability that large enterprises enjoy. Starting from £45 per seat per month." />

      <section ref={contentRef} className="py-20 lg:py-28" style={{ background: '#fff' }}>
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="detail-text opacity-0">
              <span className="eyebrow mb-3 block">SMBs (1–50 SEATS)</span>
              <h2 className="font-semibold mb-5" style={{ fontSize: 'clamp(24px, 3vw, 40px)', color: '#1A2332', lineHeight: 1.15 }}>Your fully outsourced IT department.</h2>
              <p className="mb-6" style={{ color: 'rgba(26,35,50,0.7)', fontSize: '16px', lineHeight: 1.6 }}>Small and growing businesses deserve the same IT protection and reliability that large enterprises enjoy. Amarjnet's Essentials plan starts from £45 per seat per month, giving you proactive support, security, and cloud tools without the overhead of an in-house IT team.</p>
              <h3 className="font-semibold text-lg mb-4" style={{ color: '#1A2332' }}>What You Get</h3>
              <ul className="space-y-3 mb-8">
                {benefits.map((b, j) => (
                  <li key={j} className="benefit-item flex items-start gap-3 opacity-0">
                    <span className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ background: 'rgba(0, 180, 216, 0.15)' }}><Check size={12} style={{ color: '#1A5EAB' }} /></span>
                    <span className="text-sm" style={{ color: '#1A2332' }}>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact#it-review" className="btn-primary">Get a Free IT Review</Link>
                <Link to="/pricing" className="btn-outline">See Pricing</Link>
              </div>
            </div>
            <div className="detail-image opacity-0">
              <div className="glass-card p-4 overflow-hidden">
                <img src="/office-building.jpg" alt="Small business office" className="w-full aspect-square object-cover rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={challengesRef} className="py-20 lg:py-28" style={{ background: '#F4F6F8' }}>
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-12">
          <h2 className="font-semibold text-center mb-12" style={{ fontSize: 'clamp(28px, 3vw, 48px)', color: '#1A2332', lineHeight: 1.1 }}>Challenges we solve for SMBs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {challenges.map((item, i) => (
              <div key={i} className="challenge-card glass-card p-8 opacity-0">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: 'rgba(0, 180, 216, 0.1)' }}><Users size={20} style={{ color: '#1A5EAB' }} /></div>
                <h3 className="font-semibold text-base mb-2" style={{ color: '#1A2332' }}>{item.title}</h3>
                <p className="text-sm" style={{ color: 'rgba(26,35,50,0.7)', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(140deg, #1A5EAB 0%, #00B4D8 100%)' }} />
        <div className="relative z-10 max-w-[800px] mx-auto px-4 md:px-6 lg:px-12 text-center">
          <h2 className="font-semibold text-white mb-4" style={{ fontSize: 'clamp(28px, 3vw, 48px)', lineHeight: 1.1 }}>Ready to get IT off your plate?</h2>
          <p className="text-white/85 mb-8" style={{ fontSize: '16px', lineHeight: 1.6 }}>Book a free IT review. We'll show you how managed IT can transform your business — starting from just £45/seat/month.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact#it-review" className="inline-flex items-center justify-center rounded-full font-semibold text-sm transition-all duration-200 bg-white hover:scale-[1.02] h-12 px-8" style={{ color: '#1A5EAB' }}>Get a Free IT Review</Link>
            <Link to="/industries" className="inline-flex items-center gap-1 text-white text-sm font-medium hover:underline">View All Industries <ArrowRight size={14} /></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
