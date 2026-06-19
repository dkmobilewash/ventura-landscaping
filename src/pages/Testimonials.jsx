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
        title="Customer Reviews | Ventura Landscape & Design"
        description="Read reviews from Ventura County homeowners who trust Ventura Landscape & Design for design, irrigation, and maintenance. Free estimates — call 805-429-4491."
        canonical="/testimonials"
        jsonLd={breadcrumbJsonLd(crumbs)}
      />
      <HeroSection
        title="What Our Customers Say"
        subtitle="Don’t take our word for it — hear from Ventura County homeowners who trust us with their landscapes."
        backgroundImage="https://media.istockphoto.com/id/2245287606/photo/modern-minimalist-garden-with-stepping-stones-and-colorful-flowers.jpg?s=612x612&w=0&k=20&c=UU-UJNNEVZ_iwImfCpDex-Y0zGXA8h39qWBs2xUGsSY="
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
        subtext="Call (805) 429-4491 for your free quote and find out why Ventura County homeowners choose us."
      />
    </>
  );
}
