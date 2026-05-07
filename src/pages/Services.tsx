import { useEffect, useRef } from 'react';
import { Link } from 'react-router';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check } from 'lucide-react';
import PageHero from '@/components/PageHero';

gsap.registerPlugin(ScrollTrigger);

const servicesData = [
  {
    overline: 'CORE SERVICE',
    heading: 'Always-on IT support that keeps your business running.',
    body: 'Our managed IT support service is built on one principle: prevent problems before they happen. Through our Remote Monitoring & Management (RMM) platform, we watch over every device, server, and connection in your environment, 24 hours a day, 7 days a week. When issues do arise, our UK-based helpdesk responds fast, with defined SLAs and a team that knows your business.',
    features: [
      '24/5 helpdesk with 24/7 emergency line',
      'Proactive endpoint monitoring & automated patch management',
      'Antivirus and threat protection on all devices',
      'Remote and on-site support included',
      'Dedicated account manager (Business & Enterprise+ tiers)',
      'Monthly reporting dashboard',
      'SLA: P1 response within 30 minutes | P2 within 2 hours',
    ],
    image: '/IT-services.png',
    bg: '#fff',
  },
  {
    overline: 'SECURITY',
    heading: 'Enterprise-grade security. SMB-friendly pricing.',
    body: "Cyber threats don't discriminate by company size. We deliver the same level of protection used by large enterprises, layered, proactive, and compliance-aligned, at a price that works for growing businesses.",
    features: [
      'Endpoint Detection & Response (EDR), SentinelOne or Microsoft Defender',
      'Email security: anti-phishing, DKIM/SPF/DMARC configuration',
      'Dark web monitoring and credential exposure alerts',
      'Security awareness training (monthly phishing simulations)',
      'Cyber Essentials & Cyber Essentials Plus certification support',
      'GDPR advisory: data mapping, DPA templates, breach response planning',
      'Multi-factor authentication rollout and enforcement',
      'Vulnerability scanning and remediation reporting',
    ],
    image: '/security.png',
    bg: '#F4F6F8',
  },
  {
    overline: 'CLOUD',
    heading: 'Move to the cloud and stay in control.',
    body: 'As a Microsoft Cloud Solution Provider (CSP), we plan, execute, and manage your move to Microsoft 365, Azure, and beyond. We take full ownership of the migration, and then manage the environment so your team can focus on work, not IT.',
    features: [
      'Microsoft 365 tenant setup, security hardening, and user migration',
      'Azure virtual desktop, identity, and infrastructure management',
      'SharePoint architecture and Teams governance',
      'Cloud backup and business continuity planning',
      'Microsoft Copilot deployment and adoption support',
      'M365 licensing supply via CSP, competitive pricing',
      'Ongoing Azure cost optimisation reviews',
      'AWS workload migration (for software and SaaS businesses)',
    ],
    image: '/network-visual.jpg',
    bg: '#fff',
  },
  {
    overline: 'INFRASTRUCTURE',
    heading: 'The network is the foundation. We make it unbreakable.',
    body: 'Without a reliable, secure network, everything else fails. We design, deploy, and manage networking infrastructure that\'s built to perform, from your office Wi-Fi to your wide area network.',
    features: [
      'Firewall supply and management, Sophos, Fortinet, Cisco Meraki',
      'Managed SD-WAN and MPLS connectivity',
      'Enterprise Wi-Fi design and deployment',
      'Network segmentation and VLAN design for compliance',
      'Hardware-as-a-Service (HaaS), spread equipment costs monthly',
      'Remote network monitoring and alerting',
      'On-site cabling and rack infrastructure projects',
    ],
    image: '/Dedicated Servers and Cloud Virtual Servers.png',
    bg: '#F4F6F8',
  },
];

export default function Services() {
  const sectionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      document.querySelectorAll('.service-detail').forEach((section, i) => {
        const isEven = i % 2 === 0;
        gsap.fromTo(section.querySelector('.service-text'),
          { x: isEven ? -40 : 40, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.7, ease: 'power3.out', scrollTrigger: { trigger: section, start: 'top 75%' } }
        );
        gsap.fromTo(section.querySelector('.service-image'),
          { x: isEven ? 40 : -40, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.7, ease: 'power3.out', scrollTrigger: { trigger: section, start: 'top 75%' } }
        );
        gsap.fromTo(section.querySelectorAll('.feature-item'),
          { x: -20, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.4, stagger: 0.08, ease: 'power3.out', scrollTrigger: { trigger: section, start: 'top 65%' } }
        );
      });
    }, sectionsRef);
    return () => ctx.revert();
  }, []);

  return (
    <main>
      <PageHero breadcrumb="Home > Services" heading="Everything your business needs. Nothing it doesn't." sub="Amarjnet delivers a complete managed IT portfolio. Purpose-built for UK SMBs and regulated industries. Every service is available standalone or as part of a fully managed monthly contract." />

      <div ref={sectionsRef}>
        {servicesData.map((service, i) => (
          <section key={i} className="service-detail py-20 lg:py-28" style={{ background: service.bg }}>
            <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-12">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={`service-text ${i % 2 === 1 ? 'lg:order-2' : ''} opacity-0`}>
                  <span className="eyebrow mb-3 block">{service.overline}</span>
                  <h2 className="font-semibold mb-5" style={{ fontSize: 'clamp(24px, 3vw, 40px)', color: '#1A2332', lineHeight: 1.15, letterSpacing: '-0.01em' }}>
                    {service.heading}
                  </h2>
                  <p className="mb-6" style={{ color: 'rgba(26,35,50,0.7)', fontSize: '16px', lineHeight: 1.6 }}>
                    {service.body}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((f, j) => (
                      <li key={j} className="feature-item flex items-start gap-3 opacity-0">
                        <span className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ background: 'rgba(0, 180, 216, 0.15)' }}>
                          <Check size={12} style={{ color: '#1A5EAB' }} />
                        </span>
                        <span className="text-sm" style={{ color: '#1A2332' }}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link to="/contact" className="btn-primary">Learn More</Link>
                    <Link to="/contact" className="btn-outline">Get a Quote</Link>
                  </div>
                </div>
                <div className={`service-image ${i % 2 === 1 ? 'lg:order-1' : ''} opacity-0`}>
                  <div className="glass-card p-4 overflow-hidden">
                    <img src={service.image} alt={service.heading} className="w-full aspect-square object-cover rounded-2xl" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
