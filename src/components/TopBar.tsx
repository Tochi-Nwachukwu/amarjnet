import { useState } from 'react';
import { X, Phone, Clock, Mail } from 'lucide-react';

export default function TopBar() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div
      className="relative w-full z-[60]"
      style={{
        background: '#00B4D8',
        height: '36px',
      }}
    >
      <div className="max-w-[1280px] mx-auto h-full flex items-center justify-center px-4 relative">
        <div className="flex items-center gap-4 md:gap-6 text-white text-[13px]">
          <span className="hidden sm:flex items-center gap-1.5">
            <Phone size={12} />
            +44 20 7839 0199
          </span>
          <span className="hidden sm:inline opacity-50">|</span>
          <span className="hidden md:flex items-center gap-1.5">
            <Mail size={12} />
            support@amarjnet.uk
          </span>
          <span className="hidden md:inline opacity-50">|</span>
          <span className="flex items-center gap-1.5">
            <Clock size={12} />
            Mon--Fri 08:00--18:00
          </span>
          <span className="hidden sm:inline opacity-50">|</span>
          <span className="hidden sm:inline font-semibold">Emergency: 24/7</span>
        </div>
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white md:hidden"
          onClick={() => setDismissed(true)}
          aria-label="Dismiss"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
}
