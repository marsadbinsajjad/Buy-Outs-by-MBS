import { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';

interface NavProps {
  scrolled: boolean;
  onOrderClick: () => void;
}

export default function Nav({ scrolled, onOrderClick }: NavProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const links = [
    { label: 'The Concept', href: '#concept' },
    { label: 'Shop', href: '#product' },
    { label: 'Unboxing', href: '#unboxing' },
  ];

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: scrolled ? 'rgba(248,245,238,0.97)' : 'transparent',
          borderBottom: scrolled ? '1px solid rgba(184,150,46,0.2)' : '1px solid transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 md:h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex-shrink-0">
            <span
              className="font-display tracking-widest"
              style={{
                fontSize: '1.2rem',
                fontWeight: 600,
                color: scrolled ? 'var(--emerald)' : 'var(--cream)',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
              }}
            >
              Buy Outs{' '}
              <span style={{ color: scrolled ? 'var(--gold)' : 'var(--gold-light)' }}>by MBS</span>
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="section-label transition-colors duration-200"
                style={{ color: scrolled ? 'var(--charcoal-soft)' : 'rgba(248,245,238,0.8)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold)')}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = scrolled ? 'var(--charcoal-soft)' : 'rgba(248,245,238,0.8)')
                }
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-4">
            <button
              onClick={onOrderClick}
              className="hidden md:inline-flex btn-primary"
              style={{
                background: scrolled ? 'var(--emerald)' : 'transparent',
                color: scrolled ? 'var(--cream)' : 'var(--cream)',
                borderColor: scrolled ? 'var(--emerald)' : 'rgba(248,245,238,0.6)',
              }}
            >
              <ShoppingBag size={13} />
              Order Now
            </button>
            <button
              className="md:hidden p-1"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={22} style={{ color: scrolled ? 'var(--emerald)' : 'var(--cream)' }} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMobileOpen(false)} />
          <div
            className="relative ml-auto w-72 h-full flex flex-col pt-20 pb-10 px-8"
            style={{ backgroundColor: 'var(--emerald-deep)' }}
          >
            <button
              className="absolute top-6 right-6"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <X size={22} style={{ color: 'var(--cream)' }} />
            </button>
            <span
              className="font-display mb-10 tracking-widest"
              style={{ color: 'var(--gold)', letterSpacing: '0.2em', fontSize: '0.9rem' }}
            >
              BUY OUTS BY MBS
            </span>
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="font-display mb-6 text-2xl"
                style={{ color: 'var(--cream)', fontWeight: 300 }}
              >
                {l.label}
              </a>
            ))}
            <button
              onClick={() => { setMobileOpen(false); onOrderClick(); }}
              className="btn-whatsapp mt-auto justify-center"
            >
              Order via WhatsApp
            </button>
          </div>
        </div>
      )}
    </>
  );
}
