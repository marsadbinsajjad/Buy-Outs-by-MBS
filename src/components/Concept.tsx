export default function Concept() {
  const pillars = [
    {
      number: '01',
      title: 'We Curate',
      body: 'Our team scours global markets, sourcing only pieces that meet our strict standard of quality, aesthetics, and craftsmanship.',
    },
    {
      number: '02',
      title: 'We Buy Out',
      body: 'We purchase limited runs in full — meaning once it\'s gone, it\'s gone. No restocks, no compromises, no mass-market noise.',
    },
    {
      number: '03',
      title: 'You Receive',
      body: 'Your order arrives in our signature premium packaging — butter paper, custom stickers, and an unboxing experience worthy of the product inside.',
    },
  ];

  return (
    <section id="concept" className="py-24 md:py-36" style={{ backgroundColor: 'var(--cream)' }}>
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-20 gap-8">
          <div>
            <p className="section-label mb-4">The Concept</p>
            <h2
              className="font-display"
              style={{
                fontSize: 'clamp(2.2rem, 5vw, 4rem)',
                fontWeight: 300,
                color: 'var(--emerald-deep)',
                lineHeight: 1.15,
                maxWidth: '480px',
              }}
            >
              We scrolled through the{' '}
              <span style={{ fontStyle: 'italic', color: 'var(--gold)' }}>junk</span> so you
              never have to.
            </h2>
          </div>
          <div
            className="max-w-xs"
            style={{ color: 'var(--warm-gray)', fontSize: '0.85rem', lineHeight: 1.85, fontWeight: 300 }}
          >
            Buy Outs by MBS was born from frustration — too many products, too little quality.
            We exist to be the edit you didn't have time to make.
          </div>
        </div>

        {/* Pillar cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#D9D3C7]">
          {pillars.map((p, i) => (
            <div
              key={p.number}
              className="p-10 md:p-12 flex flex-col"
              style={{
                borderRight: i < pillars.length - 1 ? '1px solid #D9D3C7' : 'none',
                borderBottom: 'none',
              }}
            >
              <span
                className="font-display mb-6"
                style={{ fontSize: '3rem', color: 'var(--gold)', fontWeight: 300 }}
              >
                {p.number}
              </span>
              <div
                className="gold-divider mb-6"
                style={{ background: 'var(--gold)' }}
              />
              <h3
                className="font-display mb-4"
                style={{ fontSize: '1.6rem', fontWeight: 400, color: 'var(--emerald)' }}
              >
                {p.title}
              </h3>
              <p
                style={{
                  color: 'var(--warm-gray)',
                  fontSize: '0.83rem',
                  lineHeight: 1.85,
                  fontWeight: 300,
                  flex: 1,
                }}
              >
                {p.body}
              </p>
            </div>
          ))}
        </div>

        {/* Brand statement */}
        <div
          className="mt-20 text-center"
          style={{
            padding: '48px',
            background: 'var(--emerald-deep)',
          }}
        >
          <p
            className="font-display"
            style={{
              color: 'var(--cream)',
              fontSize: 'clamp(1.4rem, 3vw, 2.2rem)',
              fontWeight: 300,
              fontStyle: 'italic',
              lineHeight: 1.5,
            }}
          >
            "Every product we carry has been touched, tested, and{' '}
            <span style={{ color: 'var(--gold-light)' }}>approved by our team</span> — no
            exceptions."
          </p>
          <div className="flex justify-center mt-6">
            <div className="gold-divider" />
          </div>
          <p className="section-label mt-4" style={{ color: 'rgba(248,245,238,0.4)' }}>
            The MBS Standard
          </p>
        </div>
      </div>
    </section>
  );
}
