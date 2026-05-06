interface PageHeroProps {
  breadcrumb?: string;
  heading: string;
  sub: string;
}

export default function PageHero({ breadcrumb, heading, sub }: PageHeroProps) {
  return (
    <section
      className="relative flex items-center justify-center overflow-hidden"
      style={{
        minHeight: '50vh',
        background: '#1A2332',
      }}
    >
      {/* Background image overlay */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: 'url(/abstract-tech-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#1A2332]/70 to-[#1A2332]/90" />

      <div className="relative z-10 max-w-[1280px] mx-auto px-4 md:px-6 lg:px-12 py-20 text-center">
        {breadcrumb && (
          <p className="text-[13px] text-white/50 mb-4">{breadcrumb}</p>
        )}
        <h1
          className="text-white font-semibold mb-6"
          style={{
            fontSize: 'clamp(32px, 4vw, 56px)',
            lineHeight: 1.1,
            letterSpacing: '-0.01em',
          }}
        >
          {heading}
        </h1>
        <p
          className="text-white/70 max-w-[640px] mx-auto"
          style={{ fontSize: '16px', lineHeight: 1.6 }}
        >
          {sub}
        </p>
      </div>
    </section>
  );
}
