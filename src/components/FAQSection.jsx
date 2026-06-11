import { useState } from 'react';

// Accordion FAQ. Props: faqs [{q,a}], heading. JSON-LD is emitted by the page via faqJsonLd().
export default function FAQSection({ faqs = [], heading = 'Frequently Asked Questions', intro }) {
  const [open, setOpen] = useState(0);
  if (!faqs.length) return null;
  return (
    <section className="section">
      <div className="container">
        <div className="center" style={{ marginBottom: '2rem' }}>
          <p className="eyebrow">FAQ</p>
          <h2>{heading}</h2>
          {intro && <p className="lead">{intro}</p>}
        </div>
        <div className="faq">
          {faqs.map((f, i) => (
            <div className={`faq__item ${open === i ? 'is-open' : ''}`} key={f.q}>
              <button className="faq__q" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
                {f.q}
              </button>
              <div className="faq__a">
                <p>{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Helper to build FAQPage JSON-LD from a faqs array.
export function faqJsonLd(faqs = []) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}
