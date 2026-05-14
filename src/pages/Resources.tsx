import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Clock, FileText, X, Check, ChevronDown, ChevronUp } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import PageHero from '@/components/PageHero';

gsap.registerPlugin(ScrollTrigger);

const categories = ['All', 'Cybersecurity', 'Cloud', 'Compliance', 'Microsoft 365', 'Business IT'];

const articles = [
  { category: 'Business IT', title: '5 Signs Your Business Needs a Managed IT Provider', excerpt: 'Is your current IT setup holding your business back? Here are the key warning signs.', readTime: '4 min' },
  { category: 'Compliance', title: 'What Is Cyber Essentials -- and Does Your Business Need It?', excerpt: 'A comprehensive guide to the UK government-backed cybersecurity certification scheme.', readTime: '6 min' },
  { category: 'Microsoft 365', title: 'Microsoft 365 vs Google Workspace: Which Is Right for Your Business?', excerpt: 'A head-to-head comparison of the two leading productivity suites for UK SMBs.', readTime: '5 min' },
  { category: 'Compliance', title: 'GDPR in 2026: What UK Businesses Still Get Wrong', excerpt: 'Common data protection mistakes and how to fix them before they become costly.', readTime: '7 min' },
  { category: 'Cybersecurity', title: 'How Ransomware Gets In -- and How We Keep It Out', excerpt: 'Understanding the attack vectors and the layered defence strategy that works.', readTime: '8 min' },
  { category: 'Business IT', title: 'The Hidden Cost of Break-Fix IT Support', excerpt: 'Why reactive IT support is costing your business more than you think.', readTime: '5 min' },
  { category: 'Cloud', title: 'Cloud Migration Checklist: 10 Steps Before You Move', excerpt: 'Essential planning steps to ensure a smooth, secure cloud migration.', readTime: '6 min' },
];

const downloads = [
  { title: 'Cyber Essentials Readiness Checklist', desc: 'A practical 2-page checklist to assess your readiness for Cyber Essentials certification.', pages: '2 pages' },
  { title: 'GDPR IT Controls Self-Assessment', desc: 'Evaluate your current IT controls against GDPR requirements with this template.', pages: '4 pages' },
  { title: 'SMB IT Health Check Questionnaire', desc: 'A comprehensive questionnaire to assess the current state of your IT infrastructure.', pages: '2 pages' },
  { title: 'Microsoft 365 Security Baseline Guide', desc: 'Best practices for securing your Microsoft 365 environment.', pages: '6 pages' },
  { title: 'Amarjnet IT Services Overview', desc: 'A complete overview of our managed IT services and pricing tiers.', pages: 'Brochure' },
];

const caseStudies = [
  { sector: 'Legal', client: 'London Law Firm (38 seats)', challenge: 'Constant IT issues, slow response times, and security concerns were disrupting client work.', outcome: '40% reduction in helpdesk tickets; Cyber Essentials Plus achieved in 6 weeks' },
  { sector: 'Financial', client: 'IFA Firm, Manchester (22 seats)', challenge: 'Needed FCA-compliant IT infrastructure and better cybersecurity posture.', outcome: 'Full FCA-aligned environment; zero security incidents in 12 months' },
  { sector: 'Professional Services', client: 'Marketing Agency, Birmingham (45 seats)', challenge: 'Rapid growth causing IT scalability issues and inconsistent support.', outcome: 'Seamless scaling to 60 seats; 99.9% uptime maintained throughout' },
];

export default function Resources() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedDownload, setSelectedDownload] = useState<any>(null);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const blogRef = useRef<HTMLDivElement>(null);

  const filteredArticles = activeCategory === 'All' ? articles : articles.filter(a => a.category === activeCategory);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.blog-card', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.08, ease: 'power3.out', scrollTrigger: { trigger: blogRef.current, start: 'top 80%' } });
    }, blogRef);
    return () => ctx.revert();
  }, []);

  return (
    <main>
      <Helmet>
        <title>IT Resources & Insights | Amarjnet UK</title>
        <meta name="description" content="Explore our collection of IT guides, whitepapers, case studies, and common FAQs for UK businesses looking to improve their technology and security." />
      </Helmet>
      <PageHero heading="Insights, guides, and expert thinking." sub="Practical IT knowledge for UK business owners and decision-makers -- from cybersecurity alerts to Microsoft 365 guides to compliance checklists." />

      {/* Blog Section */}
      <section id="blog" className="py-20 lg:py-28" style={{ background: '#fff' }}>
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-12">
          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-4 py-2 rounded-full text-sm font-medium transition-all"
                style={{
                  background: activeCategory === cat ? '#00B4D8' : 'rgba(26,35,50,0.05)',
                  color: activeCategory === cat ? '#fff' : '#1A2332',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          <div ref={blogRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article, i) => (
              <div key={i} className="blog-card glass-card p-6 group cursor-pointer opacity-0">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-3" style={{ background: 'rgba(0, 180, 216, 0.1)', color: '#00B4D8' }}>
                  {article.category}
                </span>
                <h3 className="font-semibold text-base mb-2 group-hover:underline" style={{ color: '#1A2332', lineHeight: 1.3 }}>{article.title}</h3>
                <p className="text-sm mb-4" style={{ color: 'rgba(26,35,50,0.7)', lineHeight: 1.5 }}>{article.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1 text-xs" style={{ color: 'rgba(26,35,50,0.5)' }}>
                    <Clock size={12} /> {article.readTime}
                  </span>
                  <span className="text-xs font-medium" style={{ color: '#00B4D8' }}>Read More</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guides & Downloads */}
      <section id="downloads" className="py-20 lg:py-28" style={{ background: '#F4F6F8' }}>
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-12">
          <h2 className="font-semibold mb-10" style={{ fontSize: 'clamp(28px, 3vw, 48px)', color: '#1A2332' }}>
            Guides & Downloads
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {downloads.map((d, i) => (
              <div 
                key={i} 
                className="glass-card p-6 group cursor-pointer"
                onClick={() => setSelectedDownload(d)}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: 'rgba(0, 180, 216, 0.1)' }}>
                  <FileText size={20} style={{ color: '#00B4D8' }} />
                </div>
                <h4 className="font-semibold text-sm mb-2" style={{ color: '#1A2332' }}>{d.title}</h4>
                <p className="text-sm mb-4" style={{ color: 'rgba(26,35,50,0.7)', lineHeight: 1.5 }}>{d.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs" style={{ color: 'rgba(26,35,50,0.5)' }}>{d.pages}</span>
                  <span className="text-xs font-medium group-hover:underline" style={{ color: '#00B4D8' }}>Download PDF</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="py-20 lg:py-28" style={{ background: '#fff' }}>
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-12">
          <h2 className="font-semibold mb-10" style={{ fontSize: 'clamp(28px, 3vw, 48px)', color: '#1A2332' }}>
            Client Success Stories
          </h2>
          <div className="space-y-6">
            {caseStudies.map((cs, i) => (
              <div key={i} className="glass-card p-8">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-2" style={{ background: 'rgba(0, 180, 216, 0.1)', color: '#00B4D8' }}>{cs.sector}</span>
                    <p className="font-semibold text-sm" style={{ color: '#1A2332' }}>{cs.client}</p>
                  </div>
                  <div className="lg:col-span-3">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'rgba(26,35,50,0.5)' }}>Challenge</p>
                        <p className="text-sm" style={{ color: 'rgba(26,35,50,0.7)', lineHeight: 1.5 }}>{cs.challenge}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: '#00B4D8' }}>Outcome</p>
                        <p className="text-sm font-medium" style={{ color: '#1A2332', lineHeight: 1.5 }}>{cs.outcome}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section id="faq" className="py-20 lg:py-28" style={{ background: '#F4F6F8' }}>
        <div className="max-w-[800px] mx-auto px-4 md:px-6">
          <h2 className="font-semibold text-center mb-12" style={{ fontSize: 'clamp(28px, 3vw, 48px)', color: '#1A2332' }}>
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              { q: "How quickly do you respond to support tickets?", a: "For critical (P1) issues, we respond within 15 minutes. For standard requests, our average response time is under 1 hour. We provide a full SLA with every contract." },
              { q: "Do you offer 24/7 support?", a: "Yes, we offer 24/7 emergency support for P1 incidents. Our standard helpdesk operates from 08:00 to 18:00, Monday to Friday." },
              { q: "Can you help with Cyber Essentials certification?", a: "Absolutely. We are experts in Cyber Essentials and Cyber Essentials Plus. We'll guide you through the entire process, from initial gap analysis to final certification." },
              { q: "Do you require long-term contracts?", a: "Our standard managed services are on a 12-month initial term, followed by a rolling monthly contract. We believe in earning your business every month through exceptional service." },
              { q: "What sectors do you specialise in?", a: "While we support a wide range of businesses, we have deep expertise in Legal, Financial Services, and Professional Services where compliance and security are paramount." }
            ].map((faq, i) => (
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

      {/* Download Modal */}
      {selectedDownload && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-[#1A2332]/80 backdrop-blur-sm" onClick={() => setSelectedDownload(null)} />
          <div className="relative glass-card w-full max-w-md p-8 overflow-hidden" style={{ background: '#fff' }}>
            <button 
              onClick={() => setSelectedDownload(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={20} />
            </button>
            
            {!downloadSuccess ? (
              <>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6" style={{ background: 'rgba(0, 180, 216, 0.1)' }}>
                  <FileText size={24} style={{ color: '#00B4D8' }} />
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#1A2332' }}>Download Resource</h3>
                <p className="text-sm mb-8" style={{ color: 'rgba(26,35,50,0.7)' }}>
                  Enter your details to receive the <strong>{selectedDownload.title}</strong> directly in your inbox.
                </p>
                
                <form 
                  className="space-y-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setDownloadSuccess(true);
                    setTimeout(() => {
                      setDownloadSuccess(false);
                      setSelectedDownload(null);
                    }, 3000);
                  }}
                >
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: '#1A2332' }}>Full Name</label>
                    <input 
                      required 
                      type="text" 
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#00B4D8] focus:ring-1 focus:ring-[#00B4D8] outline-none transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: '#1A2332' }}>Work Email</label>
                    <input 
                      required 
                      type="email" 
                      placeholder="jane@company.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#00B4D8] focus:ring-1 focus:ring-[#00B4D8] outline-none transition-all text-sm"
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full mt-4">
                    Get Resource Now
                  </button>
                  <p className="text-[10px] text-center" style={{ color: 'rgba(26,35,50,0.5)' }}>
                    By clicking above, you agree to our Privacy Policy and to receive IT insights from Amarjnet.
                  </p>
                </form>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: 'rgba(0, 180, 216, 0.1)' }}>
                  <Check size={32} style={{ color: '#00B4D8' }} />
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#1A2332' }}>Check Your Inbox!</h3>
                <p className="text-sm" style={{ color: 'rgba(26,35,50,0.7)' }}>
                  We've sent the download link for <strong>{selectedDownload.title}</strong> to your email address.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
