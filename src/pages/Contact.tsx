import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check, Phone, Mail, MapPin, Clock, AlertCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
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
  const [error, setError] = useState<string | null>(null);
  const [privacyChecked, setPrivacyChecked] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.contact-left', { x: -30, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5, ease: 'power3.out', scrollTrigger: { trigger: formRef.current, start: 'top 90%', toggleActions: 'play none none none' } });
      gsap.fromTo('.contact-right', { x: 30, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5, ease: 'power3.out', scrollTrigger: { trigger: formRef.current, start: 'top 90%', toggleActions: 'play none none none' } });
    }, formRef);
    return () => ctx.revert();
  }, []);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const fullName = formData.get('fullName') as string;
    const businessName = formData.get('businessName') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const employees = formData.get('employees') as string;
    const industry = formData.get('industry') as string;
    const message = formData.get('message') as string;
    const referral = formData.get('referral') as string;

    const subject = `Website Enquiry from ${fullName} - ${businessName}`;
    const body = `Name: ${fullName}
Business: ${businessName}
Email: ${email}
Phone: ${phone || 'Not provided'}
Employees: ${employees && employees !== 'Select...' ? employees : 'Not specified'}
Industry: ${industry && industry !== 'Select...' ? industry : 'Not specified'}
Referral: ${referral && referral !== 'Select...' ? referral : 'Not specified'}

Message:
${message}`;

    const mailtoLink = `mailto:hello@amarjnet.uk?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
  }

  return (
    <main>
      <Helmet>
        <title>Contact Us | Amarjnet Managed IT Services UK</title>
        <meta name="description" content="Get in touch with Amarjnet for a free IT health check, managed IT support quote, or cybersecurity assessment. UK-based team, fast response." />
      </Helmet>
      <PageHero heading="Let's talk about your IT." sub="Whether you're ready to switch MSP, want a second opinion on your current setup, or simply want to know what a managed IT service would cost, we're here for a no-pressure conversation." />

      {/* Form + Details */}
      <section id="it-review" ref={formRef} className="py-20 lg:py-28" style={{ background: '#fff' }}>
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="contact-left lg:col-span-3 opacity-0">
              <div className="glass-card p-8 lg:p-10">
                {!submitted ? (
                  <>
                    <h2 className="font-semibold text-2xl mb-6" style={{ color: '#1A2332' }}>Get in touch</h2>
                    <form onSubmit={handleSubmit} className="space-y-5" name="contact" data-netlify="true" netlify-honeypot="bot-field">
                      <input type="hidden" name="form-name" value="contact" />
                      <p className="hidden"><label>Don't fill this out: <input name="bot-field" /></label></p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="fullName" className="block text-sm font-medium mb-1.5" style={{ color: '#1A2332' }}>Full Name *</label>
                          <input required id="fullName" name="fullName" aria-label="Full Name" type="text" className="w-full h-12 px-4 rounded-2xl text-sm border outline-none focus:ring-2 transition-all" style={{ borderColor: 'rgba(26,35,50,0.1)', background: '#F4F6F8', color: '#1A2332' }} placeholder="John Smith" />
                        </div>
                        <div>
                          <label htmlFor="businessName" className="block text-sm font-medium mb-1.5" style={{ color: '#1A2332' }}>Business Name *</label>
                          <input required id="businessName" name="businessName" aria-label="Business Name" type="text" className="w-full h-12 px-4 rounded-2xl text-sm border outline-none focus:ring-2 transition-all" style={{ borderColor: 'rgba(26,35,50,0.1)', background: '#F4F6F8', color: '#1A2332' }} placeholder="Your Company Ltd" />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium mb-1.5" style={{ color: '#1A2332' }}>Email Address *</label>
                          <input required id="email" name="email" aria-label="Email Address" type="email" className="w-full h-12 px-4 rounded-2xl text-sm border outline-none focus:ring-2 transition-all" style={{ borderColor: 'rgba(26,35,50,0.1)', background: '#F4F6F8', color: '#1A2332' }} placeholder="john@company.co.uk" />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium mb-1.5" style={{ color: '#1A2332' }}>Phone Number</label>
                          <input id="phone" name="phone" aria-label="Phone Number" type="tel" className="w-full h-12 px-4 rounded-2xl text-sm border outline-none focus:ring-2 transition-all" style={{ borderColor: 'rgba(26,35,50,0.1)', background: '#F4F6F8', color: '#1A2332' }} placeholder="+44 20 0000 0000" />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="employees" className="block text-sm font-medium mb-1.5" style={{ color: '#1A2332' }}>Number of Employees</label>
                          <select id="employees" name="employees" aria-label="Number of Employees" className="w-full h-12 px-4 rounded-2xl text-sm border outline-none focus:ring-2 transition-all appearance-none" style={{ borderColor: 'rgba(26,35,50,0.1)', background: '#F4F6F8', color: '#1A2332' }}>
                            <option>Select...</option>
                            <option>1–10</option>
                            <option>11–25</option>
                            <option>26–50</option>
                            <option>51–100</option>
                            <option>100+</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor="industry" className="block text-sm font-medium mb-1.5" style={{ color: '#1A2332' }}>Industry</label>
                          <select id="industry" name="industry" aria-label="Industry" className="w-full h-12 px-4 rounded-2xl text-sm border outline-none focus:ring-2 transition-all appearance-none" style={{ borderColor: 'rgba(26,35,50,0.1)', background: '#F4F6F8', color: '#1A2332' }}>
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
                        <label htmlFor="message" className="block text-sm font-medium mb-1.5" style={{ color: '#1A2332' }}>How can we help? *</label>
                        <textarea required id="message" name="message" aria-label="How can we help?" rows={5} className="w-full px-4 py-3 rounded-2xl text-sm border outline-none focus:ring-2 transition-all resize-none" style={{ borderColor: 'rgba(26,35,50,0.1)', background: '#F4F6F8', color: '#1A2332' }} placeholder="Tell us about your IT needs..." />
                      </div>
                      <div>
                        <label htmlFor="referral" className="block text-sm font-medium mb-1.5" style={{ color: '#1A2332' }}>How did you hear about us?</label>
                        <select id="referral" name="referral" aria-label="How did you hear about us?" className="w-full h-12 px-4 rounded-2xl text-sm border outline-none focus:ring-2 transition-all appearance-none" style={{ borderColor: 'rgba(26,35,50,0.1)', background: '#F4F6F8', color: '#1A2332' }}>
                          <option>Select...</option>
                          <option>Google</option>
                          <option>LinkedIn</option>
                          <option>Referral</option>
                          <option>Other</option>
                        </select>
                      </div>
                      <div className="flex items-start gap-3">
                        <input required id="privacy" name="privacy" type="checkbox" checked={privacyChecked} onChange={(e) => setPrivacyChecked(e.target.checked)} className="mt-1 w-4 h-4 rounded accent-[#1A5EAB]" />
                        <label htmlFor="privacy" className="text-sm" style={{ color: 'rgba(26,35,50,0.7)' }}>I agree to Amarjnet's Privacy Policy *</label>
                      </div>
                      {error && (
                        <div className="flex items-center gap-2 p-3 rounded-xl text-sm" style={{ background: 'rgba(239,68,68,0.1)', color: '#DC2626' }}>
                          <AlertCircle size={16} className="shrink-0" />
                          {error}
                        </div>
                      )}
                      <button type="submit" disabled={!privacyChecked} className="btn-primary w-full sm:w-auto uppercase tracking-wider text-sm disabled:opacity-60 disabled:cursor-not-allowed">
                        Send My Enquiry
                      </button>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5" style={{ background: 'rgba(0, 180, 216, 0.15)' }}>
                      <Check size={32} style={{ color: '#1A5EAB' }} />
                    </div>
                    <h3 className="font-semibold text-xl mb-3" style={{ color: '#1A2332' }}>Thank you!</h3>
                    <p className="text-sm max-w-[440px] mx-auto" style={{ color: 'rgba(26,35,50,0.7)', lineHeight: 1.6 }}>We've received your message and will be in touch within one business hour. Check your inbox for a confirmation email.</p>
                  </div>
                )}
              </div>
            </div>

            {/* Contact Details */}
            <div className="contact-right lg:col-span-2 opacity-0">
              <div className="space-y-6">
                <div className="glass-card p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'rgba(0, 180, 216, 0.1)' }}>
                      <Phone size={18} style={{ color: '#1A5EAB' }} />
                    </div>
                    <h4 className="font-semibold text-sm" style={{ color: '#1A2332' }}>Phone</h4>
                  </div>
                  <p className="text-sm ml-12" style={{ color: '#1A2332' }}>+44 20 7839 0199</p>
                  <div className="flex items-center gap-1.5 ml-12 mt-1">
                    <Clock size={12} style={{ color: 'rgba(26,35,50,0.4)' }} />
                    <p className="text-xs" style={{ color: 'rgba(26,35,50,0.5)' }}>Mon–Fri 08:00–18:00</p>
                  </div>
                </div>

                <div className="glass-card p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'rgba(0, 180, 216, 0.1)' }}>
                      <Mail size={18} style={{ color: '#1A5EAB' }} />
                    </div>
                    <h4 className="font-semibold text-sm" style={{ color: '#1A2332' }}>Email</h4>
                  </div>
                  <p className="text-sm ml-12" style={{ color: '#1A2332' }}>
                    <a href="mailto:hello@amarjnet.uk" className="hover:text-[#00B4D8] transition-colors">hello@amarjnet.uk</a>
                  </p>
                  <p className="text-sm ml-12 mt-1" style={{ color: 'rgba(26,35,50,0.6)' }}>
                    <a href="mailto:support@amarjnet.uk" className="hover:text-[#00B4D8] transition-colors">support@amarjnet.uk</a> <span className="text-xs">(Support)</span>
                  </p>
                </div>

                <div className="glass-card p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'rgba(0, 180, 216, 0.1)' }}>
                      <MapPin size={18} style={{ color: '#1A5EAB' }} />
                    </div>
                    <h4 className="font-semibold text-sm" style={{ color: '#1A2332' }}>Office</h4>
                  </div>
                  <p className="text-sm ml-12" style={{ color: '#1A2332' }}>167-169 Great Portland Street, 5th Floor</p>
                  <p className="text-sm ml-12" style={{ color: 'rgba(26,35,50,0.6)' }}>London, W1W 5PF</p>
                </div>

                {/* Google Maps Embed */}
                <div className="glass-card overflow-hidden" style={{ borderRadius: '20px' }}>
                  <iframe
                    title="Amarjnet Office Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.8!2d-0.1419!3d51.5207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ad5c24f4167%3A0x0!2s167-169+Great+Portland+Street%2C+London+W1W+5PF!5e0!3m2!1sen!2suk!4v1"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IT Health Check CTA */}
      <section id="it-review" className="relative py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #1A5EAB 0%, #1A5EAB 100%)' }} />
        <div className="relative z-10 max-w-[800px] mx-auto px-4 md:px-6 lg:px-12 text-center">
          <h2 className="font-semibold text-white mb-4" style={{ fontSize: 'clamp(28px, 3vw, 48px)', lineHeight: 1.1 }}>
            Book your free IT Health Check.
          </h2>
          <p className="text-white/85 mb-8" style={{ fontSize: '16px', lineHeight: 1.6 }}>
            In 45 minutes, one of our senior engineers will review your current IT setup, identify risks and inefficiencies, and give you a plain-English report completely free, no sales pitch, no obligation.
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
            Use the form above to request your review — or call us directly on <span className="text-white font-medium">+44 20 7839 0199</span>.
          </p>
        </div>
      </section>
    </main>
  );
}
