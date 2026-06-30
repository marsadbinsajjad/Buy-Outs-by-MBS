import { useState } from 'react';
import { Check, Star, Shield, Package, Truck, ChevronLeft, ChevronRight } from 'lucide-react';

interface ProductShowcaseProps {
  onOrderClick: () => void;
}

const images = [
  'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=900&q=80',
  'https://images.pexels.com/photos/904350/pexels-photo-904350.jpeg?auto=compress&cs=tinysrgb&w=900&q=80',
  'https://images.pexels.com/photos/2079438/pexels-photo-2079438.jpeg?auto=compress&cs=tinysrgb&w=900&q=80',
  'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=900&q=80',
];

const features = [
  'Full-grain vegetable-tanned leather — sourced from Italian tanneries',
  'RFID-blocking inner lining for contactless security',
  'Slim-fit architecture: holds 8 cards + cash without bulk',
  'Hand-stitched edges with waxed linen thread',
  'Develops a rich patina unique to each owner over time',
  'Arrives gift-ready in MBS signature packaging',
];

const badges = [
  { icon: Shield, label: 'Premium Quality' },
  { icon: Package, label: 'Luxury Packaging' },
  { icon: Truck, label: 'Nationwide Delivery' },
];

export default function ProductShowcase({ onOrderClick }: ProductShowcaseProps) {
  const [activeImg, setActiveImg] = useState(0);

  const prev = () => setActiveImg((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setActiveImg((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <section id="product" className="py-24 md:py-36" style={{ backgroundColor: 'var(--cream-dark)' }}>
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="section-label mb-3">Featured Drop</p>
          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 300,
              color: 'var(--emerald-deep)',
              lineHeight: 1.15,
            }}
          >
            The{' '}
            <span style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Signature</span> Slim Wallet
          </h2>
          <div className="flex justify-center mt-4 gap-1">
            {[1,2,3,4,5].map((s) => (
              <Star key={s} size={13} fill="var(--gold)" color="var(--gold)" />
            ))}
            <span className="ml-2" style={{ fontSize: '0.72rem', color: 'var(--warm-gray)', letterSpacing: '0.05em' }}>
              4.9 · 128 orders
            </span>
          </div>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Image Gallery */}
          <div className="sticky top-24">
            {/* Main image */}
            <div
              className="relative overflow-hidden mb-3"
              style={{ aspectRatio: '4/3', backgroundColor: '#E8E4DC' }}
            >
              <img
                src={images[activeImg]}
                alt="Product"
                className="w-full h-full object-cover transition-opacity duration-500"
                key={activeImg}
              />
              {/* Nav arrows */}
              <button
                onClick={prev}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center"
                style={{ background: 'rgba(248,245,238,0.9)', border: '1px solid #D9D3C7' }}
              >
                <ChevronLeft size={16} style={{ color: 'var(--charcoal)' }} />
              </button>
              <button
                onClick={next}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center"
                style={{ background: 'rgba(248,245,238,0.9)', border: '1px solid #D9D3C7' }}
              >
                <ChevronRight size={16} style={{ color: 'var(--charcoal)' }} />
              </button>

              {/* Badge */}
              <div
                className="absolute top-4 left-4 px-3 py-1"
                style={{ background: 'var(--emerald)', color: 'var(--cream)' }}
              >
                <span style={{ fontSize: '0.6rem', letterSpacing: '0.2em', fontWeight: 500, textTransform: 'uppercase' }}>
                  Limited Run
                </span>
              </div>
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-2">
              {images.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className="overflow-hidden transition-all duration-200"
                  style={{
                    aspectRatio: '1/1',
                    border: activeImg === i ? '2px solid var(--gold)' : '2px solid transparent',
                    outline: 'none',
                  }}
                >
                  <img src={src} alt={`View ${i + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <p className="section-label mb-2" style={{ color: 'var(--warm-gray)' }}>
              MBS Collection — 2024
            </p>
            <h3
              className="font-display mb-2"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 300, color: 'var(--emerald-deep)' }}
            >
              The Slim Bifold
            </h3>
            <p
              className="mb-6"
              style={{ color: 'var(--warm-gray)', fontSize: '0.78rem', letterSpacing: '0.12em', textTransform: 'uppercase' }}
            >
              Full-Grain Italian Leather · Forest Night
            </p>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-8">
              <span
                className="font-display"
                style={{ fontSize: '2.4rem', fontWeight: 600, color: 'var(--emerald)' }}
              >
                Rs. 3,200
              </span>
              <span
                style={{
                  fontSize: '1.1rem',
                  color: 'var(--warm-gray)',
                  textDecoration: 'line-through',
                  fontWeight: 300,
                }}
              >
                Rs. 4,500
              </span>
              <span
                className="px-2 py-1"
                style={{
                  background: 'var(--gold)',
                  color: 'var(--emerald-deep)',
                  fontSize: '0.65rem',
                  letterSpacing: '0.1em',
                  fontWeight: 600,
                }}
              >
                SAVE 29%
              </span>
            </div>

            {/* Divider */}
            <div style={{ height: '1px', background: '#D9D3C7', marginBottom: '28px' }} />

            {/* Features */}
            <div className="mb-8">
              <p
                className="mb-4"
                style={{ fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--charcoal-soft)', fontWeight: 500 }}
              >
                What's Inside
              </p>
              <ul className="space-y-3">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <div
                      className="flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center mt-0.5"
                      style={{ background: 'var(--emerald)' }}
                    >
                      <Check size={9} style={{ color: 'var(--cream)' }} />
                    </div>
                    <span style={{ fontSize: '0.82rem', color: 'var(--charcoal-soft)', lineHeight: 1.7, fontWeight: 300 }}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Divider */}
            <div style={{ height: '1px', background: '#D9D3C7', marginBottom: '28px' }} />

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <button
                onClick={onOrderClick}
                className="btn-whatsapp flex-1 justify-center"
                style={{ padding: '16px', fontSize: '0.72rem' }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Order via WhatsApp
              </button>
              <button
                className="btn-primary flex-1 justify-center"
                style={{ padding: '16px', fontSize: '0.72rem' }}
                onClick={onOrderClick}
              >
                Buy Now
              </button>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-3">
              {badges.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center text-center gap-2 py-4 px-2"
                  style={{ border: '1px solid #D9D3C7' }}
                >
                  <Icon size={16} style={{ color: 'var(--gold)' }} />
                  <span style={{ fontSize: '0.62rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--warm-gray)', fontWeight: 500 }}>
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
