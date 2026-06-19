import SEOHead from './SEOHead';
import HeroSection from './HeroSection';
import Breadcrumb, { breadcrumbJsonLd } from './Breadcrumb';
import FAQSection, { faqJsonLd } from './FAQSection';
import CTABanner from './CTABanner';
import LocationLinks from './LocationLinks';
import { Link } from 'react-router-dom';
import { business, nav, localBusinessNode, businessId } from '../data/site';

const PROCESS = [
  { step: 'Consult', text: 'We walk your property, listen to your goals, and discuss budget and timeline — no pressure, no jargon.' },
  { step: 'Design', text: 'You get a clear plan and plant/material selections suited to Ventura County’s climate and water rules.' },
  { step: 'Install', text: 'Our licensed, insured crew builds it right the first time, protecting your home and cleaning up daily.' },
  { step: 'Enjoy', text: 'We finish with a walkthrough and offer maintenance plans so your investment keeps looking its best.' },
];

// Flatten all service nav items once for related-link selection.
const ALL_SERVICES = nav
  .filter((g) => ['Yard Care & Maintenance', 'Landscape Design & Installation', 'Irrigation & Lighting'].includes(g.label))
  .flatMap((g) => g.items);

export default function ServicePageTemplate({ slug, data }) {
  const path = `/${slug}`;

  // Related services: prefer same category, then fill from others. Always >= 4.
  const sameCat =
    nav.find((g) => g.label === data.category)?.items.filter((i) => i.to !== path) || [];
  const others = ALL_SERVICES.filter((i) => i.to !== path && !sameCat.some((s) => s.to === i.to));
  const related = [...sameCat, ...others].slice(0, 6);

  const crumbs = [
    { label: 'Home', to: '/' },
    { label: data.category },
    { label: data.h1.replace(/ in Ventura County.*$/i, '').replace(/, CA$/, '') },
  ];

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: data.h1,
    serviceType: data.category,
    description: data.meta,
    areaServed: { '@type': 'AdministrativeArea', name: 'Ventura County, CA' },
    // Linked to the LocalBusiness entity defined in the same page graph.
    provider: { '@type': 'LandscapingBusiness', '@id': businessId },
  };

  return (
    <>
      <SEOHead
        title={data.title}
        description={data.meta}
        canonical={path}
        jsonLd={[
          localBusinessNode({ '@context': 'https://schema.org', image: data.image }),
          serviceJsonLd,
          faqJsonLd(data.faqs),
          breadcrumbJsonLd(crumbs),
        ]}
      />

      <HeroSection
        title={data.h1}
        subtitle={data.heroSubtitle}
        backgroundImage={data.image}
        backgroundAlt={data.imageAlt}
      />

      <Breadcrumb crumbs={crumbs} />

      {/* Intro */}
      <section className="section">
        <div className="container split">
          <div className="prose">
            <p className="eyebrow">{data.category}</p>
            <h2>{data.h1}</h2>
            {data.intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <a className="btn btn--primary mt-1" href={business.phoneHref}>
              Call {business.phoneDisplay}
            </a>
          </div>
          <div>
            {/* SERVICE IMAGE - swap src to change */}
            <img src={data.image} alt={data.imageAlt} loading="lazy" />
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="section bg-off">
        <div className="container">
          <div className="center" style={{ marginBottom: '2.5rem' }}>
            <p className="eyebrow">What We Offer</p>
            <h2>{data.includedTitle}</h2>
          </div>
          <div className="grid grid-3">
            {data.included.map((item) => (
              <article className="card" key={item.title}>
                <h3>{item.title}</h3>
                <p className="mb-0">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process (design/install pages only) */}
      {data.hasProcess && (
        <section className="section">
          <div className="container">
            <div className="center" style={{ marginBottom: '2.5rem' }}>
              <p className="eyebrow">How It Works</p>
              <h2>Our Process: Consult → Design → Install → Enjoy</h2>
            </div>
            <div className="grid grid-4 process">
              {PROCESS.map((p) => (
                <article className="card" key={p.step}>
                  <h3>{p.step}</h3>
                  <p className="mb-0">{p.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Why it matters */}
      <section className={`section ${data.hasProcess ? 'bg-off' : ''}`}>
        <div className="container split split--rev">
          <div>
            {/* SUPPORTING IMAGE - swap src to change */}
            <img src={data.image} alt={data.imageAlt} loading="lazy" />
          </div>
          <div className="prose">
            <p className="eyebrow">Why It Matters</p>
            <h2>{data.whyTitle}</h2>
            {data.why.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="section section--tight">
        <div className="container">
          <h2 className="center">Related Landscaping Services</h2>
          <div className="related-links" style={{ justifyContent: 'center', marginTop: '1.5rem' }}>
            {related.map((r) => (
              <Link to={r.to} key={r.to}>
                {r.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Location links */}
      <LocationLinks
        heading="Serving Your Ventura County City"
        subheading="We bring this service to homeowners across all six communities we serve."
      />

      <FAQSection faqs={data.faqs} heading={`${data.h1.replace(/ in Ventura County.*$/i, '')} — FAQ`} />

      <CTABanner />
    </>
  );
}
