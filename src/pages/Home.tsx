import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Monitor, Shield, Cloud, Network, FileCheck,
  Scale, Landmark, Briefcase, Users, ChevronDown,
  ArrowRight, Quote
} from 'lucide-react';


gsap.registerPlugin(ScrollTrigger);

/* ─── Hero ─── */
function HeroSection() {
  const cardRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });
      tl.fromTo(cardRef.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out' })
        .fromTo('.hero-eyebrow', { opacity: 0 }, { opacity: 1, duration: 0.2 }, '-=0.1')
        .fromTo('.hero-headline span', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.3, stagger: 0.05, ease: 'power3.out' }, '-=0.1')
        .fromTo('.hero-sub', { opacity: 0 }, { opacity: 1, duration: 0.2 })
        .fromTo('.hero-cta', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.3, stagger: 0.1 }, '-=0.1')
        .fromTo('.hero-trust', { opacity: 0 }, { opacity: 1, duration: 0.2 });
    }, contentRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden" style={{ marginTop: '-64px', paddingTop: '64px' }}>
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          key="/8439150-uhd_3840_2160_25fps.mp4"
          autoPlay
          muted
          loop
          playsInline
          poster="/abstract-tech-bg.jpg"
          className="w-full h-full object-cover object-top"
        >
          <source src="/8439150-uhd_3840_2160_25fps.mp4" type="video/mp4" />
        </video>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#1A2332]/40" />
      </div>
      <div ref={contentRef} className="relative z-10 max-w-[1280px] mx-auto px-4 md:px-6 lg:px-12 py-12 md:py-20 w-full -translate-y-6 md:-translate-y-12">
        <div ref={cardRef} className="glass-card-dark p-6 md:p-10 max-w-[600px] opacity-0">
          <p className="hero-eyebrow eyebrow mb-4 opacity-0">Trusted Managed IT Services, United Kingdom</p>
          <h1 className="hero-headline text-white font-bold mb-6" style={{ fontSize: 'clamp(36px, 5vw, 64px)', lineHeight: 1.05, letterSpacing: '-0.02em' }}>
            <span className="inline-block opacity-0">Technology</span>{' '}
            <span className="inline-block opacity-0">that</span>{' '}
            <span className="inline-block opacity-0" style={{ color: '#00B4D8' }}>works</span>
            <span className="inline-block opacity-0">.</span>
            <br className="hidden sm:block" />
            <span className="inline-block opacity-0">Business</span>{' '}
            <span className="inline-block opacity-0">that</span>{' '}
            <span className="inline-block opacity-0" style={{ color: '#00B4D8' }}>grows</span>
            <span className="inline-block opacity-0">.</span>
          </h1>
          <p className="hero-sub text-white/80 text-base md:text-lg mb-8 max-w-[540px] opacity-0" style={{ lineHeight: 1.6 }}>
            Amarjnet is your dedicated managed IT partner, delivering proactive support, enterprise-grade cybersecurity, and seamless cloud services to UK businesses that demand more from their technology.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
            <Link to="/contact" className="hero-cta btn-primary opacity-0">Get a Free IT Review</Link>
            <Link to="/services" className="hero-cta btn-secondary opacity-0">Explore Our Services</Link>
          </div>
          <div className="hero-trust flex flex-wrap items-center gap-2 text-[13px] text-white/50 opacity-0">
            <span>Microsoft Solutions Partner</span>
            <span className="opacity-40">&#x2022;</span>
            <span>Cyber Essentials Certified</span>
            <span className="opacity-40">&#x2022;</span>
            <span>ISO 27001 Aligned</span>
            <span className="opacity-40">&#x2022;</span>
            <span>5-Star Client Satisfaction</span>
          </div>
        </div>
      </div>
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="text-white/50" size={24} />
      </div>
    </section>
  );
}

/* ─── Stats ─── */
function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const targets = [30, 99.9, 100, 247];
  const labels = ['P1 Incident Response', 'Uptime SLA Guarantee', 'UK-Based Support Team', 'Emergency Support Access'];
  const prefixes = ['< ', '', '', ' / '];
  const suffixes = [' Min', '%', '%', '7'];

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 85%',
        once: true,
        onEnter: () => {
          targets.forEach((target, i) => {
            gsap.to({ val: 0 }, {
              val: target,
              duration: 1.5,
              ease: 'power2.out',
              onUpdate: function () {
                setCounts(prev => {
                  const next = [...prev];
                  next[i] = Math.round(this.targets()[0].val * 10) / 10;
                  return next;
                });
              },
            });
          });
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} style={{ background: '#F4F6F8' }} className="py-10">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0">
          {targets.map((_, i) => (
            <div key={i} className={`text-center py-4 ${i < 3 ? 'lg:border-r lg:border-[#1A2332]/10' : ''}`}>
              <div className="font-bold" style={{ fontSize: 'clamp(36px, 4vw, 56px)', color: '#00B4D8', letterSpacing: '-0.02em' }}>
                {prefixes[i]}{i === 3 ? '24' : counts[i]}{suffixes[i]}
              </div>
              <div className="text-sm mt-1" style={{ color: '#1A2332' }}>{labels[i]}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Services Overview ─── */
const services = [
  { icon: Monitor, title: 'Managed IT Support', headline: 'Always-on support. Zero surprises.', body: 'Proactive monitoring, fast helpdesk, and predictable fixed-fee contracts. IT that just works.' },
  { icon: Shield, title: 'Cybersecurity', headline: 'Defend. Detect. Recover.', body: 'Layered security from endpoint to email, plus Cyber Essentials certification support.' },
  { icon: Cloud, title: 'Cloud & Microsoft 365', headline: 'Move forward. Move to the cloud.', body: 'Microsoft 365, Azure, and cloud migrations managed by certified experts.' },
  { icon: Network, title: 'Networking & Infrastructure', headline: 'The backbone of your business.', body: 'Firewalls, Wi-Fi, SD-WAN, and infrastructure built for performance and security.' },
  { icon: FileCheck, title: 'Compliance', headline: 'Compliant by design.', body: 'GDPR, Cyber Essentials Plus, FCA-aligned IT. Built for regulated industries.' },
];

function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.service-card',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 lg:py-32" style={{ background: '#fff' }}>
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-12">
        <div className="text-center mb-12">
          <p className="eyebrow mb-3">What We Do</p>
          <h2 className="font-semibold mb-4" style={{ fontSize: 'clamp(32px, 4vw, 56px)', color: '#1A2332', lineHeight: 1.1, letterSpacing: '-0.01em' }}>
            End-to-end IT services. One trusted partner.
          </h2>
          <p className="max-w-[640px] mx-auto" style={{ color: 'rgba(26,35,50,0.7)', fontSize: '16px', lineHeight: 1.6 }}>
            From day-to-day helpdesk support to strategic cloud transformation, Amarjnet delivers the full spectrum of managed IT services your business needs to stay secure, productive, and ahead.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={i} className="service-card glass-card p-8 group cursor-pointer opacity-0">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5" style={{ background: 'rgba(0, 180, 216, 0.1)' }}>
                <s.icon size={24} style={{ color: '#00B4D8' }} />
              </div>
              <h3 className="font-semibold text-xl mb-2" style={{ color: '#1A2332' }}>{s.headline}</h3>
              <p className="text-sm mb-4" style={{ color: 'rgba(26,35,50,0.7)', lineHeight: 1.5 }}>{s.body}</p>
              <Link to="/services" className="inline-flex items-center gap-1 text-sm font-medium hover:underline" style={{ color: '#00B4D8' }}>
                Learn More <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/services" className="btn-primary">View All Services</Link>
        </div>
      </div>
    </section>
  );
}

/* ─── Why Amarjnet ─── */
const features = [
  'Proactive monitoring, 24/7, 365',
  'Fixed monthly pricing',
  'Dedicated account manager',
  'Microsoft-certified team',
  'Cyber Essentials & GDPR expertise',
  'On-site and remote support',
];

function WhySection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.why-left', { x: -30, opacity: 0 }, { x: 0, opacity: 1, duration: 0.7, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' } });
      gsap.fromTo('.why-right', { x: 30, opacity: 0 }, { x: 0, opacity: 1, duration: 0.7, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 lg:py-32" style={{ background: '#1A2332' }}>
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="why-left lg:col-span-3 opacity-0">
            <p className="eyebrow mb-3">Why Amarjnet</p>
            <h2 className="font-semibold text-white mb-6" style={{ fontSize: 'clamp(32px, 4vw, 56px)', lineHeight: 1.1, letterSpacing: '-0.01em' }}>
              Proactive. Not reactive. That's the difference.
            </h2>
            <div className="space-y-4 text-white/80 mb-8" style={{ fontSize: '16px', lineHeight: 1.6 }}>
              <p>Most businesses only think about IT when something breaks. We think about it every day, so you don't have to. Our team monitors your systems around the clock, patches vulnerabilities before they're exploited, and responds to issues before you even notice them.</p>
              <p>This isn't traditional IT support. It's a strategic partnership built on transparency, expertise, and a genuine commitment to your outcomes.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {features.map((f, i) => (
                <span key={i} className="inline-flex items-center gap-2 px-5 py-2.5 text-sm text-white rounded-full" style={{ background: 'rgba(0, 180, 216, 0.15)', border: '1px solid rgba(0, 180, 216, 0.3)' }}>
                  <span style={{ color: '#00B4D8', fontSize: '12px' }}>&#x2713;</span>
                  {f}
                </span>
              ))}
            </div>
          </div>
          <div className="why-right lg:col-span-2 opacity-0">
            <img src="/coworkers-looking-monitor.jpg" alt="Technology visualization" className="w-full h-[540px] object-cover rounded-3xl" style={{ boxShadow: '0 20px 50px rgba(0,0,0,0.3)' }} />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Industries ─── */
const industries = [
  { icon: Scale, name: 'Legal Firms', desc: 'SRA-compliant IT for law firms & chambers' },
  { icon: Landmark, name: 'Financial Services', desc: 'FCA-ready infrastructure for IFAs & accountants' },
  { icon: Briefcase, name: 'Professional Services', desc: 'Scalable IT for consultancies & agencies' },
  { icon: Users, name: 'SMBs (1-50)', desc: 'Full managed IT from £45/seat/month' },
];

function IndustriesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.industry-card', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.08, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 lg:py-32" style={{ background: '#F4F6F8' }}>
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="font-semibold mb-4" style={{ fontSize: 'clamp(32px, 4vw, 56px)', color: '#1A2332', lineHeight: 1.1, letterSpacing: '-0.01em' }}>
            Built for your sector.
          </h2>
          <p className="max-w-[640px] mx-auto" style={{ color: 'rgba(26,35,50,0.7)', fontSize: '16px', lineHeight: 1.6 }}>
            Compliance requirements, workflow tools, and regulatory pressures differ by industry. Our solutions are tailored accordingly.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind, i) => (
            <Link to="/industries" key={i} className="industry-card glass-card p-8 text-center group cursor-pointer hover:border-l-[3px] hover:border-l-[#00B4D8] hover:pl-[29px] transition-all opacity-0">
              <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: 'rgba(0, 180, 216, 0.1)' }}>
                <ind.icon size={24} style={{ color: '#00B4D8' }} />
              </div>
              <h3 className="font-semibold text-lg mb-2" style={{ color: '#1A2332' }}>{ind.name}</h3>
              <p className="text-sm" style={{ color: 'rgba(26,35,50,0.7)' }}>{ind.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Testimonials ─── */
const testimonials = [
  { quote: "Amarjnet transformed our IT overnight. We went from constant helpdesk calls and security worries to a business that just runs. Our team hasn't raised an IT issue in three months.", name: 'Operations Director', company: '38-seat Legal Practice, London', sector: 'Legal' },
  { quote: "The cybersecurity audit alone was worth the contract. Amarjnet identified three critical gaps we didn't know existed. We're now Cyber Essentials Plus certified and genuinely feel secure.", name: 'Practice Manager', company: 'IFA Firm, Manchester', sector: 'Financial' },
  { quote: "Switching to Amarjnet was the best business decision we made last year. Fixed pricing, a real account manager, and IT support that actually picks up the phone.", name: 'CEO', company: 'Marketing Agency, Birmingham', sector: 'Professional Services' },
];

function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => setActive(a => (a + 1) % testimonials.length), 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={sectionRef} className="py-20 lg:py-32" style={{ background: '#fff' }}>
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-12">
        <h2 className="font-semibold text-center mb-12" style={{ fontSize: 'clamp(32px, 4vw, 56px)', color: '#1A2332', lineHeight: 1.1, letterSpacing: '-0.01em' }}>
          Trusted by UK businesses.
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="glass-card p-8">
              <Quote size={32} style={{ color: '#00B4D8' }} className="mb-4 opacity-50" />
              <p className="text-base italic mb-6" style={{ color: '#1A2332', lineHeight: 1.6 }}>"{t.quote}"</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-sm" style={{ color: '#1A2332' }}>{t.name}</p>
                  <p className="text-xs" style={{ color: 'rgba(26,35,50,0.6)' }}>{t.company}</p>
                </div>
                <span className="px-3 py-1 text-xs rounded-full font-medium whitespace-nowrap shrink-0" style={{ background: 'rgba(0, 180, 216, 0.1)', color: '#00B4D8' }}>{t.sector}</span>
              </div>
            </div>
          ))}
        </div>
        {/* Mobile dots */}
        <div className="flex justify-center gap-2 mt-8 lg:hidden">
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => setActive(i)} className="w-2.5 h-2.5 rounded-full transition-colors" style={{ background: i === active ? '#00B4D8' : 'rgba(26,35,50,0.2)' }} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Mid-Page CTA ─── */
function CTABanner() {
  return (
    <section className="relative py-16 lg:py-20 overflow-hidden">
      <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #00B4D8 0%, #1A5EAB 100%)' }} />
      <div className="relative z-10 max-w-[1280px] mx-auto px-4 md:px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="text-center lg:text-left">
          <h2 className="font-semibold text-white mb-3" style={{ fontSize: 'clamp(28px, 3vw, 48px)', lineHeight: 1.1 }}>
            Ready to take IT off your plate for good?
          </h2>
          <p className="text-white/85" style={{ fontSize: '16px' }}>
            Book a free, no-obligation IT Health Check with one of our engineers.
          </p>
        </div>
        <Link to="/contact" className="shrink-0 inline-flex items-center justify-center rounded-full font-semibold text-sm transition-all duration-200 bg-white hover:scale-[1.02] h-12 px-8" style={{ color: '#00B4D8' }}>
          Book My Free IT Review
        </Link>
      </div>
    </section>
  );
}

/* ─── Partner Logos ─── */
const partners = [
  { name: 'Cyber Essentials', logo: '/CEC.png' },
  { name: 'Cyber Essentials Plus', logo: '/CEP.png' },
  { name: 'ConnectWise', logo: '/connectwise-hd.png' },
  { name: 'NinjaRMM', logo: '/ninja-hd.png' },
  { name: 'Acronis', logo: '/Acronis.svg' },
  { name: 'Veeam', logo: '/veeam-hd.png' },
  { name: 'Huntress', logo: '/huntress-hd.png' },
  { name: 'Sophos', logo: '/sophos-hd.png' },
  { name: 'Fortinet', logo: '/fortinet-hd.png' },
  { name: 'ICO', logo: '/ico-hd.png' },
];

function PartnersSection() {
  return (
    <section className="py-12 lg:py-16" style={{ background: '#F8FAFC' }}>
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-12">
        <p className="text-center text-sm font-semibold uppercase tracking-wider mb-10" style={{ color: 'rgba(26, 35, 50, 0.5)' }}>
          Our Technology Partners
        </p>
        <div className="relative overflow-hidden no-scrollbar">
          <div className="flex items-center gap-x-16 animate-infinite-scroll w-max py-4">
            {/* Duplicate the array to create seamless loop */}
            {[...partners, ...partners].map((p, i) => (
              <div
                key={i}
                className="flex-shrink-0 flex items-center justify-center transition-all duration-500 opacity-50 hover:opacity-100 active:opacity-100 grayscale hover:grayscale-0 active:grayscale-0"
                title={p.name}
              >
                <img 
                  src={p.logo} 
                  alt={p.name} 
                  className="h-9 md:h-11 w-auto object-contain mix-blend-multiply"
                />
              </div>
            ))}
          </div>
          {/* Faded edges */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#F8FAFC] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#F8FAFC] to-transparent z-10 pointer-events-none" />
        </div>
      </div>
    </section>
  );
}

/* ─── Home Page ─── */
export default function Home() {
  return (
    <main>
      <HeroSection />
      <div className="relative z-10" style={{ background: '#fff' }}>
        <StatsSection />
        <ServicesSection />
        <WhySection />
        <IndustriesSection />
        <TestimonialsSection />
        <CTABanner />
        <PartnersSection />
      </div>
    </main>
  );
}
