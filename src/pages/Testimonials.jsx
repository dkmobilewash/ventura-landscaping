import SEOHead from '../components/SEOHead';
import HeroSection from '../components/HeroSection';
import Breadcrumb, { breadcrumbJsonLd } from '../components/Breadcrumb';
import CTABanner from '../components/CTABanner';
import { testimonials } from '../data/testimonials';

function Stars({ n }) {
  return (
    <div className="testi__stars" aria-label={`${n} out of 5 stars`}>
      {'★'.repeat(n)}{'☆'.repeat(5 - n)}
    </div>
  );
}

export default function Testimonials() {
  const crumbs = [{ label: 'Home', to: '/' }, { label: 'Testimonials' }];
  return (
    <>
      <SEOHead
        title="Customer Reviews | Landscaping Pros Of Ventura"
        description="Read real reviews from Ventura County homeowners who trust Landscaping Pros Of Ventura for lawn care, landscape design, irrigation, and more."
        canonical="/testimonials"
        jsonLd={breadcrumbJsonLd(crumbs)}
      />
      <HeroSection
        title="What Our Customers Say"
        subtitle="Don’t take our word for it — hear from Ventura County homeowners who trust us with their landscapes."
        backgroundImage="https://media.istockphoto.com/id/1300807241/photo/professional-landscaping.jpg"
        backgroundAlt="Happy landscaping customers across Ventura County"
      />
      <Breadcrumb crumbs={crumbs} />

      <section className="section">
        <div className="container">
          <div className="center" style={{ marginBottom: '2.5rem' }}>
            <p className="eyebrow">Reviews</p>
            <h2>Trusted By Homeowners Across Ventura County</h2>
            <p className="lead">A few words from the neighbors we’ve had the pleasure of working with.</p>
          </div>
          <div className="grid grid-3">
            {testimonials.map((t) => (
              <figure className="testi" key={t.name + t.service}>
                <Stars n={t.stars} />
                <blockquote className="testi__quote">“{t.quote}”</blockquote>
                <figcaption>
                  <div className="testi__who">{t.name}</div>
                  <div className="testi__meta">{t.city} · {t.service}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        headline="Ready To Join Our Happy Customers?"
        subtext="Call (805) 833-0167 for your free quote and find out why Ventura County homeowners choose us."
      />
    </>
  );
}
