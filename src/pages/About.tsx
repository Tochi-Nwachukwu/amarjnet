import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Target, Eye, Shield, TrendingUp, Heart, Award, Linkedin } from 'lucide-react';
import PageHero from '@/components/PageHero';

gsap.registerPlugin(ScrollTrigger);

const values = [
  { icon: Target, name: 'Proactive Partnership', desc: "We prevent problems, we don't just fix them." },
  { icon: Eye, name: 'Radical Transparency', desc: 'Clear pricing, clear communication, no surprises.' },
  { icon: Shield, name: 'Security First', desc: 'Security isn\'t a bolt-on. It\'s baked into everything we do.' },
  { icon: TrendingUp, name: 'Continuous Improvement', desc: 'We learn, iterate, and keep getting better.' },
  { icon: Heart, name: 'People-Centred', desc: 'Outstanding support for clients and our own team.' },
  { icon: Award, name: 'Accountable Always', desc: 'We own our mistakes and fix them fast.' },
];

const team = [
  { name: 'James Anderson', title: 'Managing Director', bio: 'James brings 12 years of enterprise IT and cybersecurity experience, specialising in Microsoft 365 and cloud infrastructure.', image: '/team-1.jpg' },
  { name: 'Sarah Mitchell', title: 'Head of Client Services', bio: 'Sarah leads our client success team with a background in professional services IT and a passion for exceptional support.', image: '/team-2.jpg' },
  { name: 'Tom Edwards', title: 'Lead Security Engineer', bio: 'Tom is our cybersecurity specialist, holding CISSP and multiple Microsoft security certifications.', image: '/team-3.jpg' },
];

const accreditations = [
  { name: 'Microsoft Solutions Partner', image: '/microsoft-solutions-partner-security.svg' },
  { name: 'Cyber Essentials', image: '/Cyber-essentials.svg' },
  { name: 'Cyber Essentials Plus', image: '/Cyber-E-Plus.svg' },
  { name: 'ISO 27001 Aligned', image: '/ISO_27001.png' },
  { name: 'ICO Registered', image: '/ico-hd.png' },
  { name: 'IASME Consortium', image: '/IASME-hd.svg' }
];

export default function About() {
  const storyRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.story-left', { x: -30, opacity: 0 }, { x: 0, opacity: 1, duration: 0.7, ease: 'power3.out', scrollTrigger: { trigger: storyRef.current, start: 'top 75%' } });
      gsap.fromTo('.story-right', { x: 30, opacity: 0 }, { x: 0, opacity: 1, duration: 0.7, ease: 'power3.out', scrollTrigger: { trigger: storyRef.current, start: 'top 75%' } });
      gsap.fromTo('.value-card', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: valuesRef.current, start: 'top 80%' } });
      gsap.fromTo('.team-card', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.15, ease: 'power3.out', scrollTrigger: { trigger: teamRef.current, start: 'top 80%' } });
    });
    return () => ctx.revert();
  }, []);

  return (
    <main>
      <PageHero heading="We're not just an IT company. We're your IT team." sub="Amarjnet was founded on a simple idea: that UK businesses deserve IT support that's proactive, transparent, and genuinely invested in their success, not just a helpdesk that picks up when things go wrong." />

      {/* Our Story */}
      <section ref={storyRef} className="py-20 lg:py-28" style={{ background: '#fff' }}>
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="story-left opacity-0">
              <h2 className="font-semibold mb-6" style={{ fontSize: 'clamp(28px, 3vw, 48px)', color: '#1A2332', lineHeight: 1.1 }}>
                Built for businesses like yours.
              </h2>
              <div className="space-y-4" style={{ color: 'rgba(26,35,50,0.7)', fontSize: '16px', lineHeight: 1.7 }}>
                <p>Amarjnet was established in 2026 by a team with deep roots in UK IT services, cybersecurity, and cloud infrastructure. We saw too many SMBs paying for reactive IT support, paying per call, per hour, per problem, with no visibility, no strategy, and no real partnership.</p>
                <p>We built Amarjnet to change that. Fixed pricing. Proactive support. Real accountability. A team that treats your business like their own.</p>
                <p>From day one, we made a deliberate choice to serve SMBs and regulated-sector businesses, not try to be everything to everyone. That focus means deeper expertise, better outcomes, and a service that genuinely fits the way you work.</p>
              </div>
            </div>
            <div className="story-right opacity-0">
              <img src="/business-people.png" alt="Amarjnet team office" className="w-full rounded-3xl" style={{ boxShadow: '0 20px 50px rgba(0,0,0,0.1)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section ref={valuesRef} className="py-20 lg:py-28" style={{ background: '#F4F6F8' }}>
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-12">
          <h2 className="font-semibold text-center mb-12" style={{ fontSize: 'clamp(28px, 3vw, 48px)', color: '#1A2332' }}>
            What drives us every day.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <div key={i} className="value-card glass-card p-8 text-center opacity-0">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ background: 'rgba(0, 180, 216, 0.1)' }}>
                  <v.icon size={24} style={{ color: '#1A5EAB' }} />
                </div>
                <h3 className="font-semibold text-lg mb-2" style={{ color: '#1A2332' }}>{v.name}</h3>
                <p className="text-sm" style={{ color: 'rgba(26,35,50,0.7)' }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section ref={teamRef} className="py-20 lg:py-28" style={{ background: '#fff' }}>
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="font-semibold mb-4" style={{ fontSize: 'clamp(28px, 3vw, 48px)', color: '#1A2332' }}>
              The Experts behind the platform.
            </h2>
            <p className="max-w-[640px] mx-auto" style={{ color: 'rgba(26,35,50,0.7)', fontSize: '16px' }}>
              Our team combines deep technical expertise with a client-first ethos, with engineers and account managers who know your name and understand your business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <div key={i} className="team-card glass-card p-8 text-center opacity-0">
                <img src={member.image} alt={member.name} className="w-28 h-28 rounded-full mx-auto mb-5 object-cover" style={{ boxShadow: '0 8px 24px rgba(0,0,0,0.1)' }} />
                <h3 className="font-semibold text-lg mb-1" style={{ color: '#1A2332' }}>{member.name}</h3>
                <p className="text-xs font-medium mb-3" style={{ color: '#1A5EAB' }}>{member.title}</p>
                <p className="text-sm mb-4" style={{ color: 'rgba(26,35,50,0.7)', lineHeight: 1.5 }}>{member.bio}</p>
                <a href="#" className="inline-flex items-center justify-center w-9 h-9 rounded-full" style={{ background: 'rgba(0, 180, 216, 0.1)' }}>
                  <Linkedin size={16} style={{ color: '#1A5EAB' }} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="py-12 lg:py-16" style={{ background: '#F4F6F8' }}>
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-12">
          <h3 className="font-semibold text-xl text-center mb-8" style={{ color: '#1A2332' }}>
            Certified. Accredited. Trusted.
          </h3>
          <div className="flex items-center justify-between gap-4 md:gap-8 overflow-x-auto no-scrollbar py-4">
            {accreditations.map((a, i) => (
              <div
                key={i}
                className="flex-shrink-0 flex items-center justify-center h-12 md:h-16 transition-all duration-300 opacity-60 hover:opacity-100"
                style={{ filter: 'grayscale(100%)' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.filter = 'grayscale(0%)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.filter = 'grayscale(100%)'; }}
                title={a.name}
              >
                <img src={a.image} alt={a.name} className="h-full w-auto object-contain mix-blend-multiply" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
