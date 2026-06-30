import { useState, useEffect } from 'react';
import { X, ShoppingBag } from 'lucide-react';

interface WhatsAppPopupProps {
  onClose: () => void;
}

export default function WhatsAppPopup({ onClose }: WhatsAppPopupProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [qty, setQty] = useState(1);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setVisible(true));
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') handleClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 300);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = encodeURIComponent(
      `Hello! I'd like to place an order from Buy Outs by MBS.\n\n` +
      `*Product:* The Slim Bifold Wallet\n` +
      `*Quantity:* ${qty}\n` +
      `*Name:* ${name}\n` +
      `*Phone:* ${phone}\n` +
      `*Address:* ${address}\n\n` +
      `Please confirm my order. Thank you!`
    );
    window.open(`https://wa.me/923330632379?text=${message}`, '_blank');
    handleClose();
  };

  const price = 3200 * qty;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6"
      style={{
        background: 'rgba(0,0,0,0.6)',
        backdropFilter: 'blur(4px)',
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.3s',
      }}
      onClick={(e) => { if (e.target === e.currentTarget) handleClose(); }}
    >
      <div
        className="w-full sm:max-w-md relative overflow-hidden"
        style={{
          background: 'var(--cream)',
          transform: visible ? 'translateY(0)' : 'translateY(40px)',
          transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
          maxHeight: '95vh',
          overflowY: 'auto',
        }}
      >
        {/* Emerald header strip */}
        <div
          className="px-8 pt-8 pb-6"
          style={{ background: 'var(--emerald-deep)' }}
        >
          <button
            onClick={handleClose}
            className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center"
            style={{ background: 'rgba(255,255,255,0.1)', border: 'none', cursor: 'pointer' }}
          >
            <X size={15} style={{ color: 'var(--cream)' }} />
          </button>

          <div className="flex items-center gap-3 mb-3">
            <div
              className="w-8 h-8 flex items-center justify-center"
              style={{ background: 'var(--gold)', flexShrink: 0 }}
            >
              <ShoppingBag size={14} style={{ color: 'var(--emerald-deep)' }} />
            </div>
            <div>
              <p className="section-label" style={{ color: 'var(--gold)' }}>
                Quick Order
              </p>
              <p
                className="font-display"
                style={{ color: 'var(--cream)', fontSize: '1.15rem', fontWeight: 300 }}
              >
                The Slim Bifold Wallet
              </p>
            </div>
          </div>

          <div
            className="flex items-center justify-between px-4 py-3 mt-2"
            style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(184,150,46,0.2)' }}
          >
            <span style={{ color: 'rgba(248,245,238,0.6)', fontSize: '0.75rem', letterSpacing: '0.05em' }}>
              Rs. 3,200 per unit
            </span>
            <span
              className="font-display"
              style={{ color: 'var(--gold-light)', fontSize: '1.1rem' }}
            >
              Rs. {price.toLocaleString()}
            </span>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="px-8 py-7 space-y-4">
          {/* Quantity */}
          <div>
            <label
              className="section-label block mb-2"
              style={{ color: 'var(--charcoal-soft)', fontSize: '0.62rem' }}
            >
              Quantity
            </label>
            <div className="flex items-center gap-0">
              <button
                type="button"
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="w-10 h-10 flex items-center justify-center"
                style={{
                  border: '1px solid #D9D3C7',
                  background: 'transparent',
                  cursor: 'pointer',
                  fontSize: '1.1rem',
                  color: 'var(--charcoal)',
                  borderRight: 'none',
                }}
              >
                −
              </button>
              <div
                className="flex-1 h-10 flex items-center justify-center"
                style={{ border: '1px solid #D9D3C7', fontWeight: 500, fontSize: '0.9rem' }}
              >
                {qty}
              </div>
              <button
                type="button"
                onClick={() => setQty((q) => q + 1)}
                className="w-10 h-10 flex items-center justify-center"
                style={{
                  border: '1px solid #D9D3C7',
                  background: 'transparent',
                  cursor: 'pointer',
                  fontSize: '1.1rem',
                  color: 'var(--charcoal)',
                  borderLeft: 'none',
                }}
              >
                +
              </button>
            </div>
          </div>

          {/* Name */}
          <div>
            <label
              className="section-label block mb-2"
              style={{ color: 'var(--charcoal-soft)', fontSize: '0.62rem' }}
            >
              Full Name *
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your full name"
              className="w-full h-11 px-4 outline-none"
              style={{
                border: '1px solid #D9D3C7',
                background: 'transparent',
                fontSize: '0.83rem',
                color: 'var(--charcoal)',
                fontFamily: 'Montserrat, sans-serif',
              }}
            />
          </div>

          {/* Phone */}
          <div>
            <label
              className="section-label block mb-2"
              style={{ color: 'var(--charcoal-soft)', fontSize: '0.62rem' }}
            >
              WhatsApp Number *
            </label>
            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="03XX XXXXXXX"
              className="w-full h-11 px-4 outline-none"
              style={{
                border: '1px solid #D9D3C7',
                background: 'transparent',
                fontSize: '0.83rem',
                color: 'var(--charcoal)',
                fontFamily: 'Montserrat, sans-serif',
              }}
            />
          </div>

          {/* Address */}
          <div>
            <label
              className="section-label block mb-2"
              style={{ color: 'var(--charcoal-soft)', fontSize: '0.62rem' }}
            >
              Delivery Address *
            </label>
            <textarea
              required
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Full delivery address including city"
              rows={3}
              className="w-full px-4 py-3 outline-none resize-none"
              style={{
                border: '1px solid #D9D3C7',
                background: 'transparent',
                fontSize: '0.83rem',
                color: 'var(--charcoal)',
                fontFamily: 'Montserrat, sans-serif',
              }}
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="btn-whatsapp w-full justify-center"
            style={{ padding: '15px', fontSize: '0.75rem', borderRadius: 0 }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Confirm Order on WhatsApp
          </button>

          <p
            style={{
              color: 'var(--warm-gray)',
              fontSize: '0.68rem',
              textAlign: 'center',
              lineHeight: 1.7,
              letterSpacing: '0.03em',
            }}
          >
            You'll be redirected to WhatsApp to confirm your order.
            Cash on Delivery available nationwide.
          </p>
        </form>
      </div>
    </div>
  );
}
