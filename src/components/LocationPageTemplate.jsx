import SEOHead from './SEOHead';
import HeroSection from './HeroSection';
import Breadcrumb, { breadcrumbJsonLd } from './Breadcrumb';
import FAQSection, { faqJsonLd } from './FAQSection';
import CTABanner from './CTABanner';
import ServiceCard from './ServiceCard';
import LocationLinks from './LocationLinks';
import { business } from '../data/site';

// Services highlighted on every location page (8 cards with links).
const LOCAL_SERVICES = [
  { icon: '🌱', title: 'Lawn & Yard Maintenance', description: 'Mowing, edging, cleanup, and fertilization on a schedule that fits your yard.', link: '/yard-care-and-lawn-maintenance' },
  { icon: '🎨', title: 'Landscape Design & Install', description: 'Custom, drought-smart designs built from concept to completion.', link: '/landscape-design-and-installation' },
  { icon: '💧', title: 'Irrigation & Sprinklers', description: 'Smart, efficient watering systems plus fast repairs and upgrades.', link: '/irrigation-services' },
  { icon: '🌳', title: 'Tree Trimming & Pruning', description: 'Healthy, safe, beautifully shaped trees by a skilled crew.', link: '/tree-trimming-and-pruning' },
  { icon: '🟩', title: 'Artificial Turf', description: 'Water-saving turf and putting greens that stay perfect year-round.', link: '/artificial-turf-and-putting-greens' },
  { icon: '🔥', title: 'Outdoor Living', description: 'Outdoor kitchens, fire pits, and patios for true backyard living.', link: '/barbeques-and-outdoor-kitchens' },
  { icon: '💡', title: 'Landscape Lighting', description: 'Low-voltage LED lighting for beauty, safety, and security.', link: '/lighting-services' },
  { icon: '🧱', title: 'Hardscape & Pavers', description: 'Patios, walkways, walls, and steps built to last for decades.', link: '/more-hardscape-elements' },
];

export default function LocationPageTemplate({ slug, data }) {
  const crumbs = [
    { label: 'Home', to: '/' },
    { label: 'Locations' },
    { label: data.name },
  ];

  const localBusinessJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `${business.name} — ${data.name}`,
    image: data.image,
    telephone: business.phoneDisplay,
    url: `${business.url}${slug}`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.street,
      addressLocality: business.city,
      addressRegion: business.state,
      postalCode: business.zip,
      addressCountry: 'US',
    },
    areaServed: { '@type': 'City', name: `${data.name}, CA` },
    priceRange: '$$',
  };

  return (
    <>
      <SEOHead
        title={data.title}
        description={data.meta}
        canonical={slug}
        jsonLd={[localBusinessJsonLd, faqJsonLd(data.faqs), breadcrumbJsonLd(crumbs)]}
      />

      <HeroSection
        title={data.h1}
        subtitle={data.heroSubtitle}
        backgroundImage={data.image}
        backgroundAlt={data.imageAlt}
      />

      <Breadcrumb crumbs={crumbs} />

      {/* Local intro */}
      <section className="section">
        <div className="container split">
          <div className="prose">
            <p className="eyebrow">Local Landscaping</p>
            <h2>Your Trusted Landscapers in {data.name}, CA</h2>
            {data.intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <a className="btn btn--primary mt-1" href={business.phoneHref}>
              Call {business.phoneDisplay}
            </a>
          </div>
          <div>
            {/* LOCATION IMAGE - swap src to change */}
            <img src={data.image} alt={data.imageAlt} loading="lazy" />
          </div>
        </div>
      </section>

      {/* Services available */}
      <section className="section bg-off">
        <div className="container">
          <div className="center" style={{ marginBottom: '2.5rem' }}>
            <p className="eyebrow">Services in {data.name}</p>
            <h2>Full-Service Landscaping for {data.name} Homes</h2>
            <p className="lead">Everything your property needs, from a single local team.</p>
          </div>
          <div className="grid grid-4">
            {LOCAL_SERVICES.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="section">
        <div className="container split split--rev">
          <div>
            <img src={data.image} alt={data.imageAlt} loading="lazy" />
          </div>
          <div className="prose">
            <p className="eyebrow">Why Choose Us</p>
            <h2>{data.whyTitle}</h2>
            {data.why.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <ul className="checklist">
              <li>Licensed &amp; insured local crews</li>
              <li>Fast response across {data.name} and {business.region}</li>
              <li>Drought-smart, water-wise expertise</li>
              <li>Satisfaction guaranteed on every visit</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Location-specific paragraph */}
      <section className="section section--tight bg-off">
        <div className="container">
          <h2 className="center">Landscaping Across {data.name}</h2>
          <p className="lead center" style={{ maxWidth: 860 }}>{data.localParagraph}</p>
        </div>
      </section>

      <CTABanner
        headline={`Call (805) 608-2641 for a Free Quote in ${data.name}`}
        subtext={`Ready to upgrade your ${data.name} property? Reach out today and our local team will get right back to you.`}
      />

      {/* Nearby locations */}
      <LocationLinks
        exclude={slug}
        heading={`Nearby Areas We Serve`}
        subheading={`We also bring our full landscaping services to these neighboring Ventura County communities.`}
      />

      <FAQSection faqs={data.faqs} heading={`Landscaping in ${data.name} — FAQ`} />

      <CTABanner
        headline={`The Local Choice for ${data.name} Landscaping`}
        subtext={`From lawn care to full outdoor living spaces, Landscaping Pros Of Ventura is here to help. Call ${business.phoneDisplay} today.`}
      />
    </>
  );
}
