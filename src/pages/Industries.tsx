import { useEffect, useRef } from 'react';
import { Link } from 'react-router';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Scale, Landmark, Briefcase, Users, ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import PageHero from '@/components/PageHero';

gsap.registerPlugin(ScrollTrigger);

const industries = [
  {
    icon: Scale,
    name: 'Legal Firms',
    heading: 'IT support for UK law firms that never sleeps.',
    body: 'Legal practices operate under strict SRA and ICO obligations. Client data is your most valuable and most sensitive asset. Amarjnet provides IT infrastructure and security controls purpose-built for legal environments, from sole practitioners to multi-partner LLPs.',
    benefits: [
      'SRA Technology and Cyber Security guidance aligned IT environments',
      'Secure file-sharing and client portal integration',
      'Case management system integration (Clio, LEAP, Osprey)',
      'Data loss prevention and email encryption',
      'Business continuity and disaster recovery planning',
      'Cyber Essentials Plus certification, required by many law firm insurers',
    ],
    cta: 'Book a Free Legal IT Review',
    slug: '/industries/legal',
  },
  {
    icon: Landmark,
    name: 'Financial Services',
    heading: 'FCA-ready IT infrastructure for financial businesses.',
    body: 'IFAs, accountancy practices, and financial brokerages face heightened regulatory scrutiny. Amarjnet delivers technology environments that support FCA obligations, GDPR compliance, and operational resilience requirements, without the enterprise price tag.',
    benefits: [
      'FCA Operational Resilience Framework-aligned IT infrastructure',
      'Audit-ready environment with complete access logs',
      'Encrypted communications and data-at-rest protection',
      'Disaster recovery with tested RTO/RPO targets',
      'Staff cybersecurity awareness training',
      'Microsoft 365 compliance centre configuration',
    ],
    cta: 'Talk to a Financial IT Specialist',
    slug: '/industries/financial-services',
  },
  {
    icon: Briefcase,
    name: 'Professional Services',
    heading: 'IT that scales with your consultancy.',
    body: 'Consultancies, agencies, and professional services firms need IT that enables collaboration, protects intellectual property, and scales seamlessly as headcount grows. Amarjnet delivers exactly that, with a flat monthly cost that\'s easy to budget.',
    benefits: [
      'Microsoft 365 and Teams optimisation for distributed teams',
      'Secure remote working setup and policy enforcement',
      'Device management (Intune MDM) for BYOD and company devices',
      'Fast onboarding of new starters, provisioned on day one',
      'Cloud migration from legacy on-premises setups',
    ],
    cta: 'Get a Free IT Assessment',
    slug: '/industries/professional-services',
  },
  {
    icon: Users,
    name: 'SMBs (1-50)',
    heading: 'Enterprise IT. SMB budget.',
    body: "Small and growing businesses deserve the same IT protection and reliability that large enterprises enjoy. Amarjnet's Essentials plan starts from £45 per seat per month, giving you proactive support, security, and cloud tools without the overhead of an in-house IT team.",
    benefits: [
      'Full managed IT from day one, no internal IT hire needed',
      'Simple per-seat pricing, scales as your team grows',
      'Microsoft 365 included in Business and Enterprise+ tiers',
      'Free onboarding and IT audit on sign-up',
      '30-minute P1 response SLA',
    ],
    cta: 'See Pricing',
    slug: '/industries/smb',
  },
];

export default function Industries() {
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.industry-large-card', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.15, ease: 'power3.out', scrollTrigger: { trigger: cardsRef.current, start: 'top 80%' } });
    }, cardsRef);
    return () => ctx.revert();
  }, []);

  return (
    <main>
      <Helmet>
        <title>Industries We Serve | Amarjnet Managed IT UK</title>
        <meta name="description" content="Industry-specific managed IT for legal firms, financial services, professional services, and SMBs. Compliance-ready, sector-tailored solutions." />
      </Helmet>
      <PageHero heading="IT built for the way your sector works." sub="Compliance obligations, workflow tools, and data sensitivity requirements vary dramatically by industry. Amarjnet's solutions are tailored to match, not retrofitted." />

      {/* Industry Cards */}
      <section ref={cardsRef} className="py-20 lg:py-28" style={{ background: '#F4F6F8' }}>
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {industries.map((ind, i) => (
              <div key={i} className="industry-large-card glass-card p-8 lg:p-10 opacity-0">
                <div className="w-14 h-14 rounded-full flex items-center justify-center mb-5" style={{ background: 'rgba(0, 180, 216, 0.1)' }}>
                  <ind.icon size={28} style={{ color: '#1A5EAB' }} />
                </div>
                <span className="eyebrow mb-2 block">{ind.name}</span>
                <h3 className="font-semibold text-xl lg:text-2xl mb-4" style={{ color: '#1A2332', lineHeight: 1.2 }}>{ind.heading}</h3>
                <p className="mb-6" style={{ color: 'rgba(26,35,50,0.7)', fontSize: '15px', lineHeight: 1.6 }}>{ind.body}</p>
                <ul className="space-y-2.5 mb-8">
                  {ind.benefits.map((b, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm" style={{ color: '#1A2332' }}>
                      <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ background: '#1A5EAB' }} />
                      {b}
                    </li>
                  ))}
                </ul>
                <Link to={ind.slug} className="btn-primary text-xs">
                  {ind.cta} <ArrowRight size={14} className="ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
