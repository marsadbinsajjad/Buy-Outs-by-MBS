import { useState, useEffect, useCallback } from 'react';
import { ShoppingCart, X } from 'lucide-react';

const toasts = [
  { city: 'Lahore', item: 'Slim Bifold Wallet' },
  { city: 'Karachi', item: 'Slim Bifold Wallet' },
  { city: 'Islamabad', item: 'Slim Bifold Wallet' },
  { city: 'Rawalpindi', item: 'Slim Bifold Wallet' },
  { city: 'Peshawar', item: 'Slim Bifold Wallet' },
  { city: 'Faisalabad', item: 'Slim Bifold Wallet' },
  { city: 'Multan', item: 'Slim Bifold Wallet' },
  { city: 'Sialkot', item: 'Slim Bifold Wallet' },
];

export default function SalesToast() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [index, setIndex] = useState(0);
  const [animateIn, setAnimateIn] = useState(false);

  const show = useCallback(() => {
    if (dismissed) return;
    setIndex((i) => (i + 1) % toasts.length);
    setVisible(true);
    setAnimateIn(true);

    const hideTimer = setTimeout(() => {
      setAnimateIn(false);
      setTimeout(() => setVisible(false), 500);
    }, 5000);

    return () => clearTimeout(hideTimer);
  }, [dismissed]);

  useEffect(() => {
    // First toast after 6s, then repeat every 18s
    const first = setTimeout(show, 6000);
    const interval = setInterval(show, 18000);
    return () => {
      clearTimeout(first);
      clearInterval(interval);
    };
  }, [show]);

  const dismiss = () => {
    setAnimateIn(false);
    setTimeout(() => {
      setVisible(false);
      setDismissed(true);
    }, 500);
  };

  if (!visible) return null;

  const { city, item } = toasts[index];

  return (
    <div
      className="fixed bottom-6 left-6 z-50 max-w-sm w-full flex items-center gap-3 p-4 shadow-2xl transition-all duration-500"
      style={{
        background: 'var(--emerald-deep)',
        border: '1px solid rgba(184,150,46,0.3)',
        transform: animateIn ? 'translateY(0)' : 'translateY(32px)',
        opacity: animateIn ? 1 : 0,
        pointerEvents: animateIn ? 'auto' : 'none',
      }}
    >
      {/* Icon */}
      <div
        className="flex-shrink-0 w-10 h-10 flex items-center justify-center"
        style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(184,150,46,0.2)' }}
      >
        <ShoppingCart size={15} style={{ color: 'var(--gold)' }} />
      </div>

      {/* Text */}
      <div className="flex-1 min-w-0">
        <p style={{ color: 'rgba(248,245,238,0.85)', fontSize: '0.75rem', fontWeight: 300, lineHeight: 1.5 }}>
          Someone from <strong style={{ fontWeight: 500, color: 'var(--cream)' }}>{city}</strong> just bought the{' '}
          <strong style={{ fontWeight: 500, color: 'var(--cream)' }}>{item}</strong>!
        </p>
        <span
          style={{
            fontSize: '0.6rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
            fontWeight: 600,
          }}
        >
          Verified Purchase
        </span>
      </div>

      {/* Dismiss */}
      <button
        onClick={dismiss}
        aria-label="Dismiss"
        className="flex-shrink-0 w-6 h-6 flex items-center justify-center transition-colors duration-150"
        style={{ color: 'rgba(248,245,238,0.4)', background: 'none', border: 'none', cursor: 'pointer' }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--cream)')}
        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'rgba(248,245,238,0.4)')}
      >
        <X size={13} />
      </button>
    </div>
  );
}
