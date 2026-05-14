import { useEffect, useRef } from 'react';
import { Link } from 'react-router';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check, Network, ArrowRight } from 'lucide-react';
import PageHero from '@/components/PageHero';

gsap.registerPlugin(ScrollTrigger);

const features = [
  'Firewall supply and management — Sophos, Fortinet, Cisco Meraki',
  'Managed SD-WAN and MPLS connectivity',
  'Enterprise Wi-Fi design and deployment',
  'Network segmentation and VLAN design for compliance',
  'Hardware-as-a-Service (HaaS) — spread equipment costs monthly',
  'Remote network monitoring and alerting',
  'On-site cabling and rack infrastructure projects',
  'Network performance audits and optimisation',
  'VPN and secure remote access configuration',
  'Switch and access point lifecycle management',
];

const whyChoose = [
  { title: 'Vendor Agnostic', desc: 'We work with Sophos, Fortinet, Cisco Meraki, Ubiquiti, and more — recommending the best fit for your needs, not ours.' },
  { title: 'Design + Deploy + Manage', desc: 'End-to-end service from network design through installation to ongoing monitoring and management.' },
  { title: 'HaaS Model', desc: 'Spread hardware costs across a monthly payment. No large capital outlay for firewalls, switches, or access points.' },
  { title: 'Compliance-Ready Networks', desc: 'VLAN segmentation, firewall rules, and audit logging designed for regulated environments.' },
];

export default function NetworkingInfrastructure() {
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
      <PageHero breadcrumb="Home > Services > Networking & Infrastructure" heading="The network is the foundation. We make it unbreakable." sub="We design, deploy, and manage networking infrastructure built to perform — from your office Wi-Fi to your wide area network." />

      <section ref={contentRef} className="py-20 lg:py-28" style={{ background: '#fff' }}>
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="detail-text lg:order-2 opacity-0">
              <span className="eyebrow mb-3 block">INFRASTRUCTURE</span>
              <h2 className="font-semibold mb-5" style={{ fontSize: 'clamp(24px, 3vw, 40px)', color: '#1A2332', lineHeight: 1.15 }}>The backbone of your business.</h2>
              <p className="mb-6" style={{ color: 'rgba(26,35,50,0.7)', fontSize: '16px', lineHeight: 1.6 }}>Without a reliable, secure network, everything else fails. Slow connections, unreliable Wi-Fi, and outdated firewalls cost your team hours of productivity every week. Amarjnet designs, deploys, and manages networking infrastructure that's built to perform.</p>
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
                <Link to="/contact#it-review" className="btn-primary">Get a Network Assessment</Link>
                <Link to="/pricing" className="btn-outline">See Pricing</Link>
              </div>
            </div>
            <div className="detail-image lg:order-1 opacity-0">
              <div className="glass-card p-4 overflow-hidden">
                <img src="/Dedicated Servers and Cloud Virtual Servers.png" alt="Networking and infrastructure services icon" className="w-full aspect-square object-cover rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={whyRef} className="py-20 lg:py-28" style={{ background: '#F4F6F8' }}>
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-12">
          <h2 className="font-semibold text-center mb-12" style={{ fontSize: 'clamp(28px, 3vw, 48px)', color: '#1A2332', lineHeight: 1.1 }}>Why choose Amarjnet for networking?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {whyChoose.map((item, i) => (
              <div key={i} className="why-card glass-card p-8 opacity-0">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: 'rgba(0, 180, 216, 0.1)' }}><Network size={20} style={{ color: '#1A5EAB' }} /></div>
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
          <h2 className="font-semibold text-white mb-4" style={{ fontSize: 'clamp(28px, 3vw, 48px)', lineHeight: 1.1 }}>Is your network holding you back?</h2>
          <p className="text-white/85 mb-8" style={{ fontSize: '16px', lineHeight: 1.6 }}>Book a free network assessment. We'll audit your current infrastructure and recommend improvements.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact#it-review" className="inline-flex items-center justify-center rounded-full font-semibold text-sm transition-all duration-200 bg-white hover:scale-[1.02] h-12 px-8" style={{ color: '#1A5EAB' }}>Book a Network Assessment</Link>
            <Link to="/services" className="inline-flex items-center gap-1 text-white text-sm font-medium hover:underline">View All Services <ArrowRight size={14} /></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
