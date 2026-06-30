import { ChevronDown } from 'lucide-react';

interface HeroProps {
  onShopClick: () => void;
}

export default function Hero({ onShopClick }: HeroProps) {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: 'var(--emerald-deep)' }}
    >
      {/* Cinematic background */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/3755755/pexels-photo-3755755.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80"
          alt=""
          className="w-full h-full object-cover opacity-30"
          style={{ objectPosition: 'center 30%' }}
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(15,45,34,0.6) 0%, rgba(15,45,34,0.2) 50%, rgba(15,45,34,0.8) 100%)',
          }}
        />
      </div>

      {/* Decorative gold lines */}
      <div className="absolute top-28 left-8 md:left-16 flex items-center gap-4 opacity-40">
        <div style={{ width: '48px', height: '1px', background: 'var(--gold)' }} />
        <span className="section-label" style={{ color: 'var(--gold-light)', letterSpacing: '0.3em' }}>
          Est. 2026
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <p className="section-label mb-6" style={{ color: 'var(--gold-light)' }}>
          Boutique • Curated • Exclusive
        </p>

        <h1
          className="font-display mb-6 leading-tight"
          style={{
            fontSize: 'clamp(2.8rem, 8vw, 6.5rem)',
            fontWeight: 300,
            color: 'var(--cream)',
            letterSpacing: '-0.01em',
            lineHeight: 1.08,
          }}
        >
          Curated Selections{' '}
          <span
            style={{
              fontStyle: 'italic',
              color: 'var(--gold-light)',
            }}
          >
            for a
          </span>
          <br />
          Curated Life.
        </h1>

        <p
          className="mb-12 mx-auto max-w-lg"
          style={{
            color: 'rgba(248,245,238,0.7)',
            fontSize: '0.875rem',
            letterSpacing: '0.04em',
            lineHeight: 1.9,
            fontWeight: 300,
          }}
        >
          We handpick the world's finest limited-run essentials so you never have to
          scroll through the noise. Each drop is exclusive, intentional, and crafted for those who expect more.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onShopClick}
            className="btn-primary"
            style={{
              background: 'var(--gold)',
              borderColor: 'var(--gold)',
              color: 'var(--emerald-deep)',
              fontSize: '0.72rem',
              padding: '16px 44px',
              fontWeight: 600,
            }}
          >
            Shop the Drop
          </button>
          <a
            href="#concept"
            className="btn-gold"
            style={{
              borderColor: 'rgba(248,245,238,0.35)',
              color: 'rgba(248,245,238,0.8)',
              fontSize: '0.72rem',
              padding: '16px 44px',
            }}
          >
            Our Story
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce"
      >
        <span
          className="section-label"
          style={{ color: 'var(--gold-light)', fontSize: '0.6rem' }}
        >
          Scroll
        </span>
        <ChevronDown size={14} style={{ color: 'var(--gold-light)' }} />
      </div>
    </section>
  );
}
