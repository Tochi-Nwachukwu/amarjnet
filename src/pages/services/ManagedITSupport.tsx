import { useEffect, useRef } from 'react';
import { Link } from 'react-router';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check, Monitor, ArrowRight } from 'lucide-react';
import PageHero from '@/components/PageHero';

gsap.registerPlugin(ScrollTrigger);

const features = [
  '24/5 helpdesk with 24/7 emergency line',
  'Proactive endpoint monitoring & automated patch management',
  'Antivirus and threat protection on all devices',
  'Remote and on-site support included',
  'Dedicated account manager (Business & Enterprise+ tiers)',
  'Monthly reporting dashboard',
  'SLA: P1 response within 30 minutes | P2 within 2 hours',
  'Vendor management and third-party liaison',
  'User onboarding and offboarding',
  'Quarterly IT strategy reviews',
];

const whyChoose = [
  { title: 'Proactive, Not Reactive', desc: 'We detect and fix problems before they impact your team, reducing downtime and lost productivity.' },
  { title: 'UK-Based Team', desc: 'Every engineer and account manager is UK-based. No offshore helpdesks, no language barriers.' },
  { title: 'Fixed Monthly Pricing', desc: 'Predictable per-seat costs with no hidden fees. Budget with confidence every month.' },
  { title: 'Named Account Manager', desc: 'You get a dedicated point of contact who knows your business inside out.' },
];

export default function ManagedITSupport() {
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
      <PageHero
        breadcrumb="Home > Services > Managed IT Support"
        heading="Always-on IT support that keeps your business running."
        sub="Our managed IT support service is built on one principle: prevent problems before they happen. Through our RMM platform, we watch over every device, server, and connection in your environment, 24/7."
      />

      {/* Main Content */}
      <section ref={contentRef} className="py-20 lg:py-28" style={{ background: '#fff' }}>
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="detail-text opacity-0">
              <span className="eyebrow mb-3 block">CORE SERVICE</span>
              <h2 className="font-semibold mb-5" style={{ fontSize: 'clamp(24px, 3vw, 40px)', color: '#1A2332', lineHeight: 1.15, letterSpacing: '-0.01em' }}>
                Proactive monitoring. Fast helpdesk. Zero surprises.
              </h2>
              <p className="mb-6" style={{ color: 'rgba(26,35,50,0.7)', fontSize: '16px', lineHeight: 1.6 }}>
                Most IT support companies wait for something to break, then charge you to fix it. We take a fundamentally different approach. Through our Remote Monitoring & Management (RMM) platform, we watch over every device, server, and connection in your environment, 24 hours a day, 7 days a week. When issues do arise, our UK-based helpdesk responds fast, with defined SLAs and a team that knows your business.
              </p>
              <p className="mb-8" style={{ color: 'rgba(26,35,50,0.7)', fontSize: '16px', lineHeight: 1.6 }}>
                Every client gets a dedicated account manager, monthly reporting, and regular IT strategy reviews. We don't just keep the lights on — we help your technology drive your business forward.
              </p>

              <h3 className="font-semibold text-lg mb-4" style={{ color: '#1A2332' }}>What's Included</h3>
              <ul className="space-y-3 mb-8">
                {features.map((f, j) => (
                  <li key={j} className="feature-item flex items-start gap-3 opacity-0">
                    <span className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ background: 'rgba(0, 180, 216, 0.15)' }}>
                      <Check size={12} style={{ color: '#1A5EAB' }} />
                    </span>
                    <span className="text-sm" style={{ color: '#1A2332' }}>{f}</span>
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
                <img src="/IT-services.png" alt="Managed IT support services icon" className="w-full aspect-square object-cover rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section ref={whyRef} className="py-20 lg:py-28" style={{ background: '#F4F6F8' }}>
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-12">
          <h2 className="font-semibold text-center mb-12" style={{ fontSize: 'clamp(28px, 3vw, 48px)', color: '#1A2332', lineHeight: 1.1 }}>
            Why choose Amarjnet for IT support?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {whyChoose.map((item, i) => (
              <div key={i} className="why-card glass-card p-8 opacity-0">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: 'rgba(0, 180, 216, 0.1)' }}>
                  <Monitor size={20} style={{ color: '#1A5EAB' }} />
                </div>
                <h3 className="font-semibold text-base mb-2" style={{ color: '#1A2332' }}>{item.title}</h3>
                <p className="text-sm" style={{ color: 'rgba(26,35,50,0.7)', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(140deg, #1A5EAB 0%, #00B4D8 100%)' }} />
        <div className="relative z-10 max-w-[800px] mx-auto px-4 md:px-6 lg:px-12 text-center">
          <h2 className="font-semibold text-white mb-4" style={{ fontSize: 'clamp(28px, 3vw, 48px)', lineHeight: 1.1 }}>
            Ready to stop firefighting IT issues?
          </h2>
          <p className="text-white/85 mb-8" style={{ fontSize: '16px', lineHeight: 1.6 }}>
            Book a free, no-obligation IT Health Check with one of our engineers. We'll review your current setup and show you exactly how we can help.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact#it-review" className="inline-flex items-center justify-center rounded-full font-semibold text-sm transition-all duration-200 bg-white hover:scale-[1.02] h-12 px-8" style={{ color: '#1A5EAB' }}>
              Book My Free IT Review
            </Link>
            <Link to="/services" className="inline-flex items-center gap-1 text-white text-sm font-medium hover:underline">
              View All Services <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
