import { useEffect, useRef } from 'react';
import { Link } from 'react-router';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check, Landmark, ArrowRight } from 'lucide-react';
import PageHero from '@/components/PageHero';

gsap.registerPlugin(ScrollTrigger);

const benefits = [
  'FCA Operational Resilience Framework-aligned IT infrastructure',
  'Audit-ready environment with complete access logs',
  'Encrypted communications and data-at-rest protection',
  'Disaster recovery with tested RTO/RPO targets',
  'Staff cybersecurity awareness training',
  'Microsoft 365 compliance centre configuration',
  'Multi-factor authentication and conditional access policies',
  'Regular penetration testing and vulnerability assessments',
];

const challenges = [
  { title: 'FCA Compliance', desc: 'The FCA requires operational resilience and robust IT controls. We design IT environments that meet and exceed these regulatory expectations.' },
  { title: 'Data Protection', desc: 'Financial data demands the highest levels of protection. Our encryption, access controls, and monitoring keep client assets secure.' },
  { title: 'Audit Readiness', desc: 'Complete access logging, change management trails, and compliance reporting — always ready for regulatory review.' },
  { title: 'Business Continuity', desc: 'Tested DR plans with defined RTO/RPO targets ensure your business can recover from any disruption.' },
];

export default function IndustryFinancial() {
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
      <PageHero breadcrumb="Home > Industries > Financial Services" heading="FCA-ready IT infrastructure for financial businesses." sub="IFAs, accountancy practices, and financial brokerages face heightened regulatory scrutiny. Amarjnet delivers technology that supports FCA obligations and GDPR compliance." />

      <section ref={contentRef} className="py-20 lg:py-28" style={{ background: '#fff' }}>
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="detail-text opacity-0">
              <span className="eyebrow mb-3 block">FINANCIAL SERVICES</span>
              <h2 className="font-semibold mb-5" style={{ fontSize: 'clamp(24px, 3vw, 40px)', color: '#1A2332', lineHeight: 1.15 }}>Technology that meets regulatory expectations.</h2>
              <p className="mb-6" style={{ color: 'rgba(26,35,50,0.7)', fontSize: '16px', lineHeight: 1.6 }}>Financial services firms face some of the tightest regulatory requirements in the UK. The FCA expects operational resilience, robust IT controls, and demonstrable cybersecurity measures. Amarjnet delivers technology environments that support these obligations — without the enterprise price tag.</p>
              <h3 className="font-semibold text-lg mb-4" style={{ color: '#1A2332' }}>What We Deliver for Financial Services</h3>
              <ul className="space-y-3 mb-8">
                {benefits.map((b, j) => (
                  <li key={j} className="benefit-item flex items-start gap-3 opacity-0">
                    <span className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ background: 'rgba(0, 180, 216, 0.15)' }}><Check size={12} style={{ color: '#1A5EAB' }} /></span>
                    <span className="text-sm" style={{ color: '#1A2332' }}>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact#it-review" className="btn-primary">Talk to a Financial IT Specialist</Link>
                <Link to="/pricing" className="btn-outline">See Pricing</Link>
              </div>
            </div>
            <div className="detail-image opacity-0">
              <div className="glass-card p-4 overflow-hidden">
                <img src="/business-shake.png" alt="Financial services IT solutions" className="w-full aspect-square object-cover rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={challengesRef} className="py-20 lg:py-28" style={{ background: '#F4F6F8' }}>
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-12">
          <h2 className="font-semibold text-center mb-12" style={{ fontSize: 'clamp(28px, 3vw, 48px)', color: '#1A2332', lineHeight: 1.1 }}>Challenges we solve for financial firms</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {challenges.map((item, i) => (
              <div key={i} className="challenge-card glass-card p-8 opacity-0">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: 'rgba(0, 180, 216, 0.1)' }}><Landmark size={20} style={{ color: '#1A5EAB' }} /></div>
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
          <h2 className="font-semibold text-white mb-4" style={{ fontSize: 'clamp(28px, 3vw, 48px)', lineHeight: 1.1 }}>Is your IT FCA-ready?</h2>
          <p className="text-white/85 mb-8" style={{ fontSize: '16px', lineHeight: 1.6 }}>Book a free consultation with a specialist who understands financial services regulation and IT.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact#it-review" className="inline-flex items-center justify-center rounded-full font-semibold text-sm transition-all duration-200 bg-white hover:scale-[1.02] h-12 px-8" style={{ color: '#1A5EAB' }}>Talk to a Specialist</Link>
            <Link to="/industries" className="inline-flex items-center gap-1 text-white text-sm font-medium hover:underline">View All Industries <ArrowRight size={14} /></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
