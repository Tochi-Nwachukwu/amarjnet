import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check, X, ChevronDown, ChevronUp } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import PageHero from '@/components/PageHero';

gsap.registerPlugin(ScrollTrigger);

const plans = [
  {
    name: 'Essentials',
    price: '£45',
    ideal: 'SMBs under 15 seats',
    features: [
      'RMM monitoring & alerting',
      'Helpdesk (24/5)',
      'Endpoint patching',
      'Antivirus (managed)',
      'Monthly reporting',
    ],
    borderColor: 'rgba(0, 180, 216, 0.3)',
    popular: false,
  },
  {
    name: 'Business',
    price: '£75',
    ideal: '15-50 seat businesses',
    features: [
      'Everything in Essentials, PLUS:',
      'EDR (SentinelOne/Defender)',
      'Email security',
      'Microsoft 365 management',
      'Dark web monitoring',
      'Dedicated account manager',
    ],
    borderColor: '#00B4D8',
    popular: true,
  },
  {
    name: 'Enterprise+',
    price: '£110',
    ideal: 'Regulated sectors',
    features: [
      'Everything in Business, PLUS:',
      'SIEM / Microsoft Sentinel',
      'GDPR advisory',
      'vCISO strategic sessions',
      'Cyber Essentials Plus support',
      'Priority SLA (15 min P1)',
    ],
    borderColor: '#1A2332',
    popular: false,
  },
];

const comparisonCategories = [
  {
    name: 'Support',
    rows: [
      { label: 'Helpdesk hours', essentials: '24/5', business: '24/5', enterprise: '24/7' },
      { label: 'P1 Response SLA', essentials: '30 min', business: '30 min', enterprise: '15 min' },
      { label: 'On-site visits', essentials: false, business: true, enterprise: true },
      { label: 'Dedicated account manager', essentials: false, business: true, enterprise: true },
    ],
  },
  {
    name: 'Security',
    rows: [
      { label: 'Antivirus', essentials: true, business: true, enterprise: true },
      { label: 'EDR', essentials: false, business: true, enterprise: true },
      { label: 'Email security', essentials: false, business: true, enterprise: true },
      { label: 'Dark web monitoring', essentials: false, business: true, enterprise: true },
      { label: 'SIEM', essentials: false, business: false, enterprise: true },
    ],
  },
  {
    name: 'Cloud',
    rows: [
      { label: 'M365 licence supply', essentials: false, business: true, enterprise: true },
      { label: 'M365 management', essentials: false, business: true, enterprise: true },
      { label: 'Azure management', essentials: false, business: false, enterprise: true },
      { label: 'Cloud backup', essentials: false, business: true, enterprise: true },
    ],
  },
  {
    name: 'Compliance',
    rows: [
      { label: 'Cyber Essentials support', essentials: false, business: true, enterprise: true },
      { label: 'GDPR advisory', essentials: false, business: false, enterprise: true },
      { label: 'vCISO sessions', essentials: false, business: false, enterprise: true },
    ],
  },
];

const faqs = [
  { q: 'Is there a minimum contract length?', a: 'All plans start with a 12-month initial term, which allows us to fully onboard your environment and deliver measurable value. After the initial term, contracts roll monthly.' },
  { q: 'What happens if my team grows?', a: "Simple -- we add seats. There's no penalty or complicated renegotiation. We'll invoice the additional seats pro-rata from the date they're added." },
  { q: 'Do you charge for on-site visits?', a: 'Planned on-site visits (e.g., quarterly reviews, hardware deployments) are included in Business and Enterprise+ plans. Emergency on-site callouts beyond agreed frequency are charged at a fixed day rate.' },
  { q: 'Can I include Microsoft 365 licensing?', a: 'Yes -- as a Microsoft CSP, we can supply, manage, and bill M365 licences as part of your monthly invoice. This simplifies your procurement and often reduces overall licence costs.' },
  { q: 'What if I already have some IT in place?', a: "We start every engagement with a free IT audit. We'll integrate with what works and recommend improvements where needed -- there's no requirement to replace everything on day one." },
];

function ComparisonValue({ value }: { value: boolean | string }) {
  if (value === true) return <Check size={18} style={{ color: '#00B4D8' }} />;
  if (value === false) return <X size={18} style={{ color: 'rgba(26,35,50,0.2)' }} />;
  return <span className="text-sm" style={{ color: '#1A2332' }}>{value}</span>;
}

export default function Pricing() {
  const [showComparison, setShowComparison] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.pricing-card', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: cardsRef.current, start: 'top 80%' } });
    }, cardsRef);
    return () => ctx.revert();
  }, []);

  return (
    <main>
      <Helmet>
        <title>Managed IT Pricing | Amarjnet IT Solutions UK</title>
        <meta name="description" content="Transparent per-seat managed IT pricing from £45/month. Compare Essentials, Business, and Enterprise+ plans. No hidden fees." />
      </Helmet>
      <PageHero heading="Transparent pricing. No hidden extras." sub="All plans are per-seat, per-month. Minimum 12-month initial term, then rolling monthly. Prices shown exclude VAT." />

      {/* Pricing Cards */}
      <section ref={cardsRef} className="py-20 lg:py-28" style={{ background: '#fff' }}>
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            {plans.map((plan, i) => (
              <div
                key={i}
                className={`pricing-card glass-card p-8 lg:p-10 relative flex flex-col opacity-0 ${plan.popular ? 'lg:scale-105 lg:-my-4' : ''}`}
                style={{ borderTop: `4px solid ${plan.borderColor}`, boxShadow: plan.popular ? '0 16px 48px rgba(0,0,0,0.12)' : undefined }}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 rounded-full text-xs font-semibold text-white" style={{ background: '#00B4D8' }}>MOST POPULAR</span>
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="font-semibold text-xl mb-1" style={{ color: '#1A2332' }}>{plan.name}</h3>
                  <p className="text-xs mb-4" style={{ color: 'rgba(26,35,50,0.5)' }}>Ideal for: {plan.ideal}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="font-bold text-3xl" style={{ color: '#1A2332' }}>{plan.price}</span>
                    <span className="text-sm" style={{ color: 'rgba(26,35,50,0.6)' }}>/ seat / month</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm" style={{ color: '#1A2332' }}>
                      <Check size={16} className="mt-0.5 shrink-0" style={{ color: '#00B4D8' }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="btn-primary w-full text-center">Get Started</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-12 lg:py-16" style={{ background: '#F4F6F8' }}>
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-12">
          <button
            onClick={() => setShowComparison(!showComparison)}
            className="flex items-center gap-2 mx-auto mb-8 text-sm font-medium hover:underline"
            style={{ color: '#00B4D8' }}
          >
            {showComparison ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            {showComparison ? 'Hide' : 'Compare all features'}
          </button>
          {showComparison && (
            <div className="glass-card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ borderBottom: '1px solid rgba(26,35,50,0.1)' }}>
                      <th className="text-left p-4 font-semibold" style={{ color: '#1A2332' }}>Feature</th>
                      <th className="text-center p-4 font-semibold" style={{ color: '#1A2332' }}>Essentials</th>
                      <th className="text-center p-4 font-semibold" style={{ color: '#1A2332' }}>Business</th>
                      <th className="text-center p-4 font-semibold" style={{ color: '#1A2332' }}>Enterprise+</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonCategories.map((cat) => (
                      <>
                        <tr key={cat.name}>
                          <td colSpan={4} className="p-4 font-semibold text-xs uppercase tracking-wider" style={{ color: '#00B4D8', background: 'rgba(0,180,216,0.05)' }}>
                            {cat.name}
                          </td>
                        </tr>
                        {cat.rows.map((row) => (
                          <tr key={row.label} style={{ borderBottom: '1px solid rgba(26,35,50,0.05)' }}>
                            <td className="p-4" style={{ color: '#1A2332' }}>{row.label}</td>
                            <td className="p-4 text-center"><ComparisonValue value={row.essentials} /></td>
                            <td className="p-4 text-center"><ComparisonValue value={row.business} /></td>
                            <td className="p-4 text-center"><ComparisonValue value={row.enterprise} /></td>
                          </tr>
                        ))}
                      </>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28" style={{ background: '#fff' }}>
        <div className="max-w-[800px] mx-auto px-4 md:px-6 lg:px-12">
          <h2 className="font-semibold text-center mb-12" style={{ fontSize: 'clamp(28px, 3vw, 48px)', color: '#1A2332' }}>
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="glass-card overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-medium text-sm" style={{ color: '#1A2332' }}>{faq.q}</span>
                  {openFaq === i ? <ChevronUp size={18} style={{ color: '#00B4D8' }} /> : <ChevronDown size={18} style={{ color: 'rgba(26,35,50,0.4)' }} />}
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6">
                    <p className="text-sm" style={{ color: 'rgba(26,35,50,0.7)', lineHeight: 1.6 }}>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
