import { useEffect, useRef } from 'react';
import { Link } from 'react-router';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check, Shield, ArrowRight } from 'lucide-react';
import PageHero from '@/components/PageHero';

gsap.registerPlugin(ScrollTrigger);

const features = [
  'Endpoint Detection & Response (EDR), SentinelOne or Microsoft Defender',
  'Email security: anti-phishing, DKIM/SPF/DMARC configuration',
  'Dark web monitoring and credential exposure alerts',
  'Security awareness training (monthly phishing simulations)',
  'Cyber Essentials & Cyber Essentials Plus certification support',
  'GDPR advisory: data mapping, DPA templates, breach response planning',
  'Multi-factor authentication rollout and enforcement',
  'Vulnerability scanning and remediation reporting',
  'Incident response planning and tabletop exercises',
  'Security Operations Centre (SOC) monitoring via Microsoft Sentinel',
];

const whyChoose = [
  { title: 'Layered Defence', desc: "We don't rely on a single tool. Our security stack covers endpoints, email, identity, network, and cloud." },
  { title: 'Compliance-Ready', desc: 'We help you achieve Cyber Essentials, Cyber Essentials Plus, and align to ISO 27001 and GDPR.' },
  { title: 'Human + Machine', desc: 'Automated detection paired with experienced analysts means threats are caught fast.' },
  { title: 'Affordable Enterprise Security', desc: 'SMB-friendly pricing for the same tools used by large enterprises.' },
];

export default function Cybersecurity() {
  const contentRef = useRef<HTMLDivElement>(null);
  const whyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.detail-text', { x: -40, opacity: 0 }, { x: 0, opacity: 1, duration: 0.7, ease: 'power3.out', scrollTrigger: { trigger: contentRef.current, start: 'top 75%' } });
      gsap.fromTo('.detail-image', { x: 40, opacity: 0 }, { x: 0, opacity: 1, duration: 0.7, ease: 'power3.out', scrollTrigger: { trigger: contentRef.current, start: 'top 75%' } });
      gsap.fromTo('.feature-item', { x: -20, opacity: 0 }, { x: 0, opacity: 1, duration: 0.4, stagger: 0.06, ease: 'power3.out', scrollTrigger: { trigger: contentRef.current, start: 'top 65%' } });
      gsap.fromTo('.why-card', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: whyRef.current, start: 'top 80%' } });
    });
    return () => ctx.revert();
  }, []);

  return (
    <main>
      <PageHero breadcrumb="Home > Services > Cybersecurity" heading="Enterprise-grade security. SMB-friendly pricing." sub="Cyber threats don't discriminate by company size. We deliver layered, proactive, compliance-aligned protection at a price that works for growing businesses." />

      <section ref={contentRef} className="py-20 lg:py-28" style={{ background: '#fff' }}>
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="detail-text lg:order-2 opacity-0">
              <span className="eyebrow mb-3 block">SECURITY</span>
              <h2 className="font-semibold mb-5" style={{ fontSize: 'clamp(24px, 3vw, 40px)', color: '#1A2332', lineHeight: 1.15 }}>Defend. Detect. Recover.</h2>
              <p className="mb-6" style={{ color: 'rgba(26,35,50,0.7)', fontSize: '16px', lineHeight: 1.6 }}>Cyberattacks are not a question of if, but when. Ransomware, phishing, credential theft, and insider threats target businesses of every size. Amarjnet delivers a multi-layered defence strategy protecting your endpoints, email, identity, and network.</p>
              <h3 className="font-semibold text-lg mb-4" style={{ color: '#1A2332' }}>What's Included</h3>
              <ul className="space-y-3 mb-8">
                {features.map((f, j) => (
                  <li key={j} className="feature-item flex items-start gap-3 opacity-0">
                    <span className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ background: 'rgba(0, 180, 216, 0.15)' }}><Check size={12} style={{ color: '#1A5EAB' }} /></span>
                    <span className="text-sm" style={{ color: '#1A2332' }}>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact#it-review" className="btn-primary">Get a Security Assessment</Link>
                <Link to="/pricing" className="btn-outline">See Pricing</Link>
              </div>
            </div>
            <div className="detail-image lg:order-1 opacity-0">
              <div className="glass-card p-4 overflow-hidden">
                <img src="/security.png" alt="Cybersecurity services icon" className="w-full aspect-square object-cover rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={whyRef} className="py-20 lg:py-28" style={{ background: '#F4F6F8' }}>
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-12">
          <h2 className="font-semibold text-center mb-12" style={{ fontSize: 'clamp(28px, 3vw, 48px)', color: '#1A2332', lineHeight: 1.1 }}>Why choose Amarjnet for cybersecurity?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {whyChoose.map((item, i) => (
              <div key={i} className="why-card glass-card p-8 opacity-0">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: 'rgba(0, 180, 216, 0.1)' }}><Shield size={20} style={{ color: '#1A5EAB' }} /></div>
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
          <h2 className="font-semibold text-white mb-4" style={{ fontSize: 'clamp(28px, 3vw, 48px)', lineHeight: 1.1 }}>How secure is your business, really?</h2>
          <p className="text-white/85 mb-8" style={{ fontSize: '16px', lineHeight: 1.6 }}>Book a free cybersecurity assessment. We'll identify gaps and give you an actionable plan.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact#it-review" className="inline-flex items-center justify-center rounded-full font-semibold text-sm transition-all duration-200 bg-white hover:scale-[1.02] h-12 px-8" style={{ color: '#1A5EAB' }}>Book a Security Assessment</Link>
            <Link to="/services" className="inline-flex items-center gap-1 text-white text-sm font-medium hover:underline">View All Services <ArrowRight size={14} /></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
