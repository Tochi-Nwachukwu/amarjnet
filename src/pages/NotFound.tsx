import { Link } from 'react-router';
import { Helmet } from 'react-helmet-async';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-[80vh] flex items-center justify-center relative overflow-hidden bg-[#1A2332]">
      <Helmet>
        <title>404 - Page Not Found | Amarjnet</title>
      </Helmet>
      
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url(/abstract-tech-bg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
      <div className="absolute inset-0 bg-gradient-to-b from-[#1A2332]/80 to-[#1A2332]" />

      <div className="relative z-10 text-center px-4">
        <h1 className="text-[120px] md:text-[180px] font-bold text-white/10 leading-none select-none">404</h1>
        <div className="mt-[-40px] md:mt-[-60px]">
          <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6">Page not found</h2>
          <p className="text-white/70 max-w-[480px] mx-auto mb-10 text-lg leading-relaxed">
            The page you are looking for doesn't exist or has been moved. Let's get you back on track.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/" className="btn-primary flex items-center gap-2">
              <Home size={18} /> Back to Home
            </Link>
            <button 
              onClick={() => window.history.back()} 
              className="btn-outline text-white border-white/20 hover:bg-white/10 flex items-center gap-2"
            >
              <ArrowLeft size={18} /> Go Back
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
