import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check, Phone, Mail, MapPin } from 'lucide-react';
import PageHero from '@/components/PageHero';

gsap.registerPlugin(ScrollTrigger);

const checkItems = [
  'Current security posture and known vulnerabilities',
  'Backup and business continuity status',
  'Microsoft 365 / cloud configuration review',
  'Licensing compliance check',
  'Network and firewall assessment',
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.contact-left', { x: -30, opacity: 0 }, { x: 0, opacity: 1, duration: 0.7, ease: 'power3.out', scrollTrigger: { trigger: formRef.current, start: 'top 75%' } });
      gsap.fromTo('.contact-right', { x: 30, opacity: 0 }, { x: 0, opacity: 1, duration: 0.7, ease: 'power3.out', scrollTrigger: { trigger: formRef.current, start: 'top 75%' } });
    }, formRef);
    return () => ctx.revert();
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main>
      <PageHero heading="Let's talk about your IT." sub="Whether you're ready to switch MSP, want a second opinion on your current setup, or simply want to know what a managed IT service would cost -- we're here for a no-pressure conversation." />

      {/* Form + Details */}
      <section ref={formRef} className="py-20 lg:py-28" style={{ background: '#fff' }}>
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="contact-left lg:col-span-3 opacity-0">
              <div className="glass-card p-8 lg:p-10">
                {!submitted ? (
                  <>
                    <h2 className="font-semibold text-2xl mb-6" style={{ color: '#1A2332' }}>Get in touch</h2>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium mb-1.5" style={{ color: '#1A2332' }}>Full Name *</label>
                          <input required type="text" className="w-full h-12 px-4 rounded-2xl text-sm border outline-none focus:ring-2 transition-all" style={{ borderColor: 'rgba(26,35,50,0.1)', background: '#F4F6F8', color: '#1A2332' }} placeholder="John Smith" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1.5" style={{ color: '#1A2332' }}>Business Name *</label>
                          <input required type="text" className="w-full h-12 px-4 rounded-2xl text-sm border outline-none focus:ring-2 transition-all" style={{ borderColor: 'rgba(26,35,50,0.1)', background: '#F4F6F8' }} placeholder="Your Company Ltd" />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium mb-1.5" style={{ color: '#1A2332' }}>Email Address *</label>
                          <input required type="email" className="w-full h-12 px-4 rounded-2xl text-sm border outline-none focus:ring-2 transition-all" style={{ borderColor: 'rgba(26,35,50,0.1)', background: '#F4F6F8' }} placeholder="john@company.co.uk" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1.5" style={{ color: '#1A2332' }}>Phone Number</label>
                          <input type="tel" className="w-full h-12 px-4 rounded-2xl text-sm border outline-none focus:ring-2 transition-all" style={{ borderColor: 'rgba(26,35,50,0.1)', background: '#F4F6F8' }} placeholder="+44 20 0000 0000" />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium mb-1.5" style={{ color: '#1A2332' }}>Number of Employees</label>
                          <select className="w-full h-12 px-4 rounded-2xl text-sm border outline-none focus:ring-2 transition-all appearance-none" style={{ borderColor: 'rgba(26,35,50,0.1)', background: '#F4F6F8', color: '#1A2332' }}>
                            <option>Select...</option>
                            <option>1--10</option>
                            <option>11--25</option>
                            <option>26--50</option>
                            <option>51--100</option>
                            <option>100+</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1.5" style={{ color: '#1A2332' }}>Industry</label>
                          <select className="w-full h-12 px-4 rounded-2xl text-sm border outline-none focus:ring-2 transition-all appearance-none" style={{ borderColor: 'rgba(26,35,50,0.1)', background: '#F4F6F8', color: '#1A2332' }}>
                            <option>Select...</option>
                            <option>Legal</option>
                            <option>Financial Services</option>
                            <option>Professional Services</option>
                            <option>Technology</option>
                            <option>Healthcare</option>
                            <option>Other</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1.5" style={{ color: '#1A2332' }}>How can we help? *</label>
                        <textarea required rows={5} className="w-full px-4 py-3 rounded-2xl text-sm border outline-none focus:ring-2 transition-all resize-none" style={{ borderColor: 'rgba(26,35,50,0.1)', background: '#F4F6F8', color: '#1A2332' }} placeholder="Tell us about your IT needs..." />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1.5" style={{ color: '#1A2332' }}>How did you hear about us?</label>
                        <select className="w-full h-12 px-4 rounded-2xl text-sm border outline-none focus:ring-2 transition-all appearance-none" style={{ borderColor: 'rgba(26,35,50,0.1)', background: '#F4F6F8', color: '#1A2332' }}>
                          <option>Select...</option>
                          <option>Google</option>
                          <option>LinkedIn</option>
                          <option>Referral</option>
                          <option>Other</option>
                        </select>
                      </div>
                      <div className="flex items-start gap-3">
                        <input required type="checkbox" className="mt-1 w-4 h-4 rounded" />
                        <label className="text-sm" style={{ color: 'rgba(26,35,50,0.7)' }}>I agree to Amarjnet's Privacy Policy *</label>
                      </div>
                      <button type="submit" className="btn-primary w-full sm:w-auto">Send My Enquiry</button>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5" style={{ background: 'rgba(0, 180, 216, 0.15)' }}>
                      <Check size={32} style={{ color: '#00B4D8' }} />
                    </div>
                    <h3 className="font-semibold text-xl mb-3" style={{ color: '#1A2332' }}>Thank you!</h3>
                    <p className="text-sm" style={{ color: 'rgba(26,35,50,0.7)' }}>We've received your message and will be in touch within one business hour. Check your inbox for a confirmation email.</p>
                  </div>
                )}
              </div>
            </div>

            {/* Contact Details */}
            <div className="contact-right lg:col-span-2 opacity-0">
              <div className="space-y-6">
                <div className="glass-card p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Phone size={20} style={{ color: '#00B4D8' }} />
                    <h4 className="font-semibold text-sm" style={{ color: '#1A2332' }}>Phone</h4>
                  </div>
                  <p className="text-sm ml-8" style={{ color: 'rgba(26,35,50,0.7)' }}>+44 20 7839 0199</p>
                  <p className="text-xs ml-8" style={{ color: 'rgba(26,35,50,0.5)' }}>Mon--Fri 08:00--18:00</p>
                </div>
                <div className="glass-card p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Mail size={20} style={{ color: '#00B4D8' }} />
                    <h4 className="font-semibold text-sm" style={{ color: '#1A2332' }}>Email</h4>
                  </div>
                  <p className="text-sm ml-8" style={{ color: 'rgba(26,35,50,0.7)' }}>hello@amarjnet.uk</p>
                  <p className="text-sm ml-8" style={{ color: 'rgba(26,35,50,0.7)' }}>support@amarjnet.uk</p>
                </div>
                <div className="glass-card p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <MapPin size={20} style={{ color: '#00B4D8' }} />
                    <h4 className="font-semibold text-sm" style={{ color: '#1A2332' }}>Office</h4>
                  </div>
                  <p className="text-sm ml-8" style={{ color: 'rgba(26,35,50,0.7)' }}>5 South Charlotte Street</p>
                  <p className="text-sm ml-8" style={{ color: 'rgba(26,35,50,0.7)' }}>Edinburgh, EH2 4AN</p>
                </div>

                {/* Map placeholder */}
                <div className="glass-card overflow-hidden" style={{ borderRadius: '20px' }}>
                  <img src="/office-building.jpg" alt="Office location" className="w-full h-[280px] object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IT Health Check CTA */}
      <section className="py-16 lg:py-20">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #00B4D8 0%, #1A5EAB 100%)' }} />
        <div className="relative z-10 max-w-[800px] mx-auto px-4 md:px-6 lg:px-12 text-center">
          <h2 className="font-semibold text-white mb-4" style={{ fontSize: 'clamp(28px, 3vw, 48px)', lineHeight: 1.1 }}>
            Book your free IT Health Check.
          </h2>
          <p className="text-white/85 mb-8" style={{ fontSize: '16px' }}>
            In 45 minutes, one of our senior engineers will review your current IT setup, identify risks and inefficiencies, and give you a plain-English report -- completely free, no sales pitch, no obligation.
          </p>
          <div className="text-left inline-block">
            <p className="text-white font-medium text-sm mb-4 uppercase tracking-wider">What we cover:</p>
            <ul className="space-y-3 mb-8">
              {checkItems.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white/90 text-sm">
                  <span className="w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ background: 'rgba(255,255,255,0.2)' }}>
                    <Check size={12} className="text-white" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <p className="text-white/70 text-sm">
            Use the form above to request your review -- or call us directly on <span className="text-white font-medium">+44 20 7839 0199</span>.
          </p>
        </div>
      </section>
    </main>
  );
}
