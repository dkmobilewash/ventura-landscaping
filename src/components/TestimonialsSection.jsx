import { testimonials as allTestimonials } from '../data/testimonials';

function Stars({ n }) {
  return (
    <div className="testi__stars" aria-label={`${n} out of 5 stars`}>
      {'★'.repeat(n)}{'☆'.repeat(5 - n)}
    </div>
  );
}

// Props: count (how many to show), heading, subheading, items (optional override)
export default function TestimonialsSection({
  count = 3,
  heading = 'What Ventura County Homeowners Say',
  subheading = 'Real reviews from real neighbors across Ventura County.',
  items,
}) {
  const list = (items || allTestimonials).slice(0, count);
  return (
    <section className="section bg-off">
      <div className="container">
        <div className="center" style={{ marginBottom: '2.5rem' }}>
          <p className="eyebrow">Testimonials</p>
          <h2>{heading}</h2>
          <p className="lead">{subheading}</p>
        </div>
        <div className={`grid ${list.length >= 3 ? 'grid-3' : 'grid-2'}`}>
          {list.map((t) => (
            <figure className="testi" key={t.name + t.service}>
              <Stars n={t.stars} />
              <blockquote className="testi__quote">“{t.quote}”</blockquote>
              <figcaption>
                <div className="testi__who">{t.name}</div>
                <div className="testi__meta">
                  {t.city} · {t.service}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
