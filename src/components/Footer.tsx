import { Mail, Phone, Instagram } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: '#0A1F16', color: 'var(--cream)' }}>
      {/* Top strip */}
      <div className="border-b" style={{ borderColor: 'rgba(184,150,46,0.15)' }}>
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3
              className="font-display mb-4"
              style={{ fontSize: '1.6rem', fontWeight: 300, letterSpacing: '0.1em', color: 'var(--cream)' }}
            >
              Buy Outs <span style={{ color: 'var(--gold)' }}>by MBS</span>
            </h3>
            <div className="gold-divider mb-5" />
            <p
              style={{
                color: 'rgba(248,245,238,0.45)',
                fontSize: '0.8rem',
                lineHeight: 1.85,
                maxWidth: '260px',
                fontWeight: 300,
              }}
            >
              Handpicked, limited-run lifestyle essentials. No noise. No compromise. Just the best.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="https://instagram.com/buyoutsbymbs"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 flex items-center justify-center transition-colors duration-200"
                style={{ border: '1px solid rgba(184,150,46,0.3)', color: 'rgba(248,245,238,0.5)' }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'var(--gold)';
                  (e.currentTarget as HTMLElement).style.color = 'var(--gold)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(184,150,46,0.3)';
                  (e.currentTarget as HTMLElement).style.color = 'rgba(248,245,238,0.5)';
                }}
              >
                <Instagram size={15} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="section-label mb-6" style={{ color: 'var(--gold)' }}>Navigate</p>
            <ul className="space-y-3">
              {['The Concept', 'Shop the Drop', 'Unboxing Experience', 'Order via WhatsApp'].map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    style={{ color: 'rgba(248,245,238,0.45)', fontSize: '0.8rem', letterSpacing: '0.05em', fontWeight: 300, transition: 'color 0.2s' }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--gold-light)')}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'rgba(248,245,238,0.45)')}
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="section-label mb-6" style={{ color: 'var(--gold)' }}>Get in Touch</p>
            <ul className="space-y-4">
              <li>
                <a href="mailto:buyoutsbymbs@gmail.com" className="flex items-start gap-3">
                  <Mail size={14} style={{ color: 'var(--gold)', marginTop: '2px', flexShrink: 0 }} />
                  <span
                    style={{ color: 'rgba(248,245,238,0.55)', fontSize: '0.8rem', letterSpacing: '0.03em', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--cream)')}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'rgba(248,245,238,0.55)')}
                  >
                    buyoutsbymbs@gmail.com
                  </span>
                </a>
              </li>
              <li>
                <a href="https://wa.me/923330632379" target="_blank" rel="noreferrer" className="flex items-start gap-3">
                  <Phone size={14} style={{ color: 'var(--gold)', marginTop: '2px', flexShrink: 0 }} />
                  <span
                    style={{ color: 'rgba(248,245,238,0.55)', fontSize: '0.8rem', letterSpacing: '0.03em', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--cream)')}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'rgba(248,245,238,0.55)')}
                  >
                    0333 0632379
                  </span>
                </a>
              </li>
            </ul>
            <div
              className="mt-8 p-5"
              style={{ border: '1px solid rgba(184,150,46,0.2)', background: 'rgba(255,255,255,0.02)' }}
            >
              <p style={{ color: 'rgba(248,245,238,0.35)', fontSize: '0.72rem', lineHeight: 1.7, letterSpacing: '0.04em' }}>
                Customer support available Mon–Sat, 10am–8pm PKT. Orders placed via WhatsApp are confirmed within 2 hours.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p style={{ color: 'rgba(248,245,238,0.25)', fontSize: '0.7rem', letterSpacing: '0.08em' }}>
          &copy; {year} Buy Outs by MBS. All rights reserved.
        </p>
        <div className="flex gap-6">
          {['Privacy Policy', 'Terms of Service', 'Refund Policy'].map((l) => (
            <a
              key={l}
              href="#"
              style={{ color: 'rgba(248,245,238,0.25)', fontSize: '0.68rem', letterSpacing: '0.08em', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--gold)')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'rgba(248,245,238,0.25)')}
            >
              {l}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
