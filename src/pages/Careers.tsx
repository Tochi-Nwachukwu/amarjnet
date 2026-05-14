import { Helmet } from 'react-helmet-async';
import PageHero from '@/components/PageHero';

export default function Careers() {
  return (
    <main>
      <Helmet>
        <title>Careers | Amarjnet UK</title>
        <meta name="description" content="Join our team of proactive IT experts. Discover open roles in engineering, security, and client success at Amarjnet." />
      </Helmet>
      
      <PageHero 
        breadcrumb="Company / Careers"
        heading="Build the future of IT with us." 
        sub="We're always looking for talented engineers, security specialists, and client success managers who share our values of transparency and proactivity." 
      />

      <section className="py-20 lg:py-28" style={{ background: '#fff' }}>
        <div className="max-w-[800px] mx-auto px-4 md:px-6 text-center">
          <h2 className="font-semibold mb-8" style={{ fontSize: 'clamp(28px, 3vw, 40px)', color: '#1A2332' }}>
            Current Openings
          </h2>
          
          <div className="glass-card p-10 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ background: 'rgba(0, 180, 216, 0.1)' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A5EAB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
            </div>
            <h3 className="font-semibold text-lg mb-2" style={{ color: '#1A2332' }}>No open roles right now</h3>
            <p className="text-sm mb-6" style={{ color: 'rgba(26,35,50,0.7)', lineHeight: 1.5 }}>
              While we aren't actively hiring for specific positions at this moment, we are always eager to connect with talented individuals.
            </p>
            <a href="mailto:careers@amarjnet.uk" className="btn-primary">
              Send us your CV
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
