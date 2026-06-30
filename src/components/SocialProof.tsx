import { Play, Instagram, Heart, MessageCircle } from 'lucide-react';

const posts = [
  {
    img: 'https://images.pexels.com/photos/5650026/pexels-photo-5650026.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
    likes: '2.4K',
    comments: '84',
    type: 'video',
    caption: 'Unboxing our signature slim wallet 🖤',
  },
  {
    img: 'https://images.pexels.com/photos/7679455/pexels-photo-7679455.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
    likes: '1.8K',
    comments: '61',
    type: 'photo',
    caption: 'The details that make a difference',
  },
  {
    img: 'https://images.pexels.com/photos/5650027/pexels-photo-5650027.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
    likes: '3.1K',
    comments: '120',
    type: 'video',
    caption: 'Premium packaging — every single time',
  },
  {
    img: 'https://images.pexels.com/photos/4968389/pexels-photo-4968389.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
    likes: '987',
    comments: '42',
    type: 'photo',
    caption: 'Butter paper, custom stickers, love',
  },
  {
    img: 'https://images.pexels.com/photos/5632395/pexels-photo-5632395.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
    likes: '2.2K',
    comments: '95',
    type: 'video',
    caption: 'What arrived today — worth every rupee',
  },
  {
    img: 'https://images.pexels.com/photos/5650028/pexels-photo-5650028.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
    likes: '1.5K',
    comments: '58',
    type: 'photo',
    caption: 'Minimal. Premium. Intentional.',
  },
];

const reviews = [
  {
    name: 'Zara M.',
    location: 'Karachi',
    stars: 5,
    text: 'The packaging alone was worth it. Opened it feeling like I ordered from a luxury brand abroad — and the wallet? Even better.',
  },
  {
    name: 'Ali H.',
    location: 'Lahore',
    stars: 5,
    text: 'Finally a Pakistani brand that doesn\'t compromise. Got the slim wallet and gifted it to my dad. He loved it.',
  },
  {
    name: 'Sana K.',
    location: 'Islamabad',
    stars: 5,
    text: 'Received my order in 2 days. The butter paper wrap and custom sticker made it feel so premium. 10/10 would order again.',
  },
];

export default function SocialProof() {
  return (
    <section id="unboxing" className="py-24 md:py-36" style={{ backgroundColor: 'var(--emerald-deep)' }}>
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-label mb-3" style={{ color: 'var(--gold-light)' }}>
            The Unboxing Experience
          </p>
          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 300,
              color: 'var(--cream)',
              lineHeight: 1.15,
            }}
          >
            Packaging worthy of{' '}
            <span style={{ fontStyle: 'italic', color: 'var(--gold-light)' }}>the product</span>
          </h2>
          <p
            className="mt-4 mx-auto max-w-md"
            style={{ color: 'rgba(248,245,238,0.5)', fontSize: '0.83rem', lineHeight: 1.85 }}
          >
            Butter paper wrapping. Custom MBS logo stickers. Handwritten notes. Every order ships like a gift — because it is one.
          </p>
        </div>

        {/* Instagram Grid */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-5">
            <Instagram size={14} style={{ color: 'var(--gold)' }} />
            <span className="section-label" style={{ color: 'var(--gold)' }}>
              @buyoutsbymbs
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
            {posts.map((post, i) => (
              <div key={i} className="relative group overflow-hidden" style={{ aspectRatio: '1/1' }}>
                <img
                  src={post.img}
                  alt={post.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/55 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-4">
                    <div className="flex items-center justify-center gap-5 mb-2">
                      <span className="flex items-center gap-1 text-white text-sm font-medium">
                        <Heart size={14} fill="white" /> {post.likes}
                      </span>
                      <span className="flex items-center gap-1 text-white text-sm font-medium">
                        <MessageCircle size={14} fill="white" /> {post.comments}
                      </span>
                    </div>
                    <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.7rem' }}>
                      {post.caption}
                    </p>
                  </div>
                </div>
                {/* Video badge */}
                {post.type === 'video' && (
                  <div className="absolute top-2 right-2">
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center"
                      style={{ background: 'rgba(0,0,0,0.5)' }}
                    >
                      <Play size={10} fill="white" color="white" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Packaging feature strip */}
        <div
          className="grid grid-cols-1 sm:grid-cols-3 gap-px mt-12 mb-16"
          style={{ background: 'rgba(184,150,46,0.2)' }}
        >
          {[
            { label: 'Butter Paper Wrap', desc: 'Crisp, luxurious reveal every time' },
            { label: 'Custom Logo Stickers', desc: 'Sealed with the MBS gold stamp' },
            { label: 'Premium Ribbon', desc: 'Tied by hand, shipped with care' },
          ].map((item) => (
            <div
              key={item.label}
              className="text-center py-8 px-6"
              style={{ background: 'var(--emerald-deep)' }}
            >
              <div className="gold-divider mx-auto mb-4" />
              <p
                style={{
                  color: 'var(--cream)',
                  fontSize: '0.8rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  fontWeight: 500,
                  marginBottom: '8px',
                }}
              >
                {item.label}
              </p>
              <p style={{ color: 'rgba(248,245,238,0.45)', fontSize: '0.75rem', lineHeight: 1.7 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Reviews */}
        <div>
          <p className="section-label text-center mb-10" style={{ color: 'var(--gold)' }}>
            Customer Reviews
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {reviews.map((r) => (
              <div
                key={r.name}
                className="p-8"
                style={{ border: '1px solid rgba(184,150,46,0.2)', background: 'rgba(255,255,255,0.03)' }}
              >
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: r.stars }).map((_, i) => (
                    <div
                      key={i}
                      style={{ width: '10px', height: '10px', background: 'var(--gold)', borderRadius: '1px' }}
                    />
                  ))}
                </div>
                <p
                  className="font-display mb-6"
                  style={{
                    color: 'rgba(248,245,238,0.8)',
                    fontSize: '1.05rem',
                    fontStyle: 'italic',
                    lineHeight: 1.7,
                    fontWeight: 300,
                  }}
                >
                  "{r.text}"
                </p>
                <div style={{ height: '1px', background: 'rgba(184,150,46,0.15)', marginBottom: '16px' }} />
                <div>
                  <p style={{ color: 'var(--cream)', fontSize: '0.78rem', fontWeight: 500, letterSpacing: '0.05em' }}>
                    {r.name}
                  </p>
                  <p style={{ color: 'rgba(248,245,238,0.35)', fontSize: '0.7rem', marginTop: '2px' }}>
                    {r.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
