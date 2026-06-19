import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import HeroSection from '../components/HeroSection';
import ServiceCard from '../components/ServiceCard';
import TestimonialsSection from '../components/TestimonialsSection';
import FAQSection, { faqJsonLd } from '../components/FAQSection';
import CTABanner from '../components/CTABanner';
import LocationLinks from '../components/LocationLinks';
import { business, localBusinessNode } from '../data/site';

const categories = [
  { icon: '🌿', title: 'Yard Care & Maintenance', description: 'Mowing, edging, cleanups, tree care, fertilization, and dependable recurring maintenance.', link: '/yard-care-and-lawn-maintenance', linkText: 'Explore Yard Care' },
  { icon: '🎨', title: 'Landscape Design & Installation', description: 'Custom, drought-smart designs, turf, hardscape, outdoor kitchens, fire features, and more.', link: '/landscape-design-and-installation', linkText: 'Explore Design' },
  { icon: '💧', title: 'Irrigation & Lighting', description: 'Efficient sprinkler and drip systems plus beautiful, secure low-voltage LED lighting.', link: '/irrigation-services', linkText: 'Explore Irrigation' },
];

const featured = [
  { icon: '🌱', title: 'Lawn Maintenance', description: 'Reliable weekly and monthly care that keeps your yard sharp.', link: '/yard-care-and-lawn-maintenance' },
  { icon: '🌳', title: 'Tree Trimming', description: 'Expert pruning for healthy, safe, beautiful trees.', link: '/tree-trimming-and-pruning' },
  { icon: '🟩', title: 'Artificial Turf', description: 'Water-free lawns and custom putting greens.', link: '/artificial-turf-and-putting-greens' },
  { icon: '🍳', title: 'Outdoor Kitchens', description: 'Custom BBQ islands and full outdoor kitchens.', link: '/barbeques-and-outdoor-kitchens' },
  { icon: '💧', title: 'Irrigation', description: 'Smart, water-saving sprinkler and drip systems.', link: '/irrigation-services' },
  { icon: '💡', title: 'Outdoor Lighting', description: 'Low-voltage LED lighting for beauty and security.', link: '/outdoor-lighting' },
];

const trust = [
  { icon: '🛡️', title: 'Licensed & Insured', text: 'Fully licensed and insured for your complete peace of mind.' },
  { icon: '📍', title: 'Local Ventura County Experts', text: 'Based on 1507 Callens Rd H and serving our own backyard since 2009.' },
  { icon: '🌵', title: 'Drought-Smart Landscaping', text: 'Water-wise design and irrigation built for our climate and rules.' },
  { icon: '⭐', title: 'Satisfaction Guaranteed', text: 'We treat your property like our own — every visit, every project.' },
];

const faqs = [
  { q: 'What areas does Ventura Landscape & Design serve?', a: 'We serve all of Ventura County, including Ventura, Oxnard, Channel Islands, Camarillo, Saticoy, and Santa Paula — both residential and commercial properties.' },
  { q: 'Are you licensed and insured?', a: 'Yes. We are fully licensed and insured, and we are happy to provide documentation for homeowners, property managers, and HOA boards.' },
  { q: 'Do you offer free quotes?', a: 'Absolutely. We provide free, no-pressure estimates. Call (805) 429-4491 or request a quote online and we’ll respond within one business day.' },
  { q: 'Can you help me lower my water usage?', a: 'Yes — drought-tolerant design, artificial turf, drip irrigation, and smart controllers are some of our most popular services for cutting water bills in Ventura County.' },
  { q: 'Do you offer recurring maintenance plans?', a: 'We do. Most clients choose weekly or monthly maintenance with the same crew each visit. We also handle one-time projects and cleanups.' },
];

export default function Home() {
  const localBusinessJsonLd = localBusinessNode({
    '@context': 'https://schema.org',
    image: 'https://media.istockphoto.com/id/2245287606/photo/modern-minimalist-garden-with-stepping-stones-and-colorful-flowers.jpg?s=612x612&w=0&k=20&c=UU-UJNNEVZ_iwImfCpDex-Y0zGXA8h39qWBs2xUGsSY=',
  });
  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: business.name,
    url: business.url,
  };

  return (
    <>
      <SEOHead
        title="Professional Landscaping Services in Ventura County | Ventura Landscape & Design"
        description="Ventura Landscape & Design provides expert lawn care, landscape design, irrigation, artificial turf, outdoor kitchens, tree trimming, and more across Ventura County, CA. Call (805) 429-4491."
        canonical="/"
        jsonLd={[localBusinessJsonLd, websiteJsonLd, faqJsonLd(faqs)]}
      />

      <HeroSection
        variant="home"
        title="Professional Landscaping Services In Ventura County"
        subtitle="From yard care and landscape design to irrigation, artificial turf, hardscape, lighting, and ongoing maintenance — Ventura Landscape & Design does it all, beautifully and reliably."
        backgroundImage="https://media.istockphoto.com/id/2245287606/photo/modern-minimalist-garden-with-stepping-stones-and-colorful-flowers.jpg?s=612x612&w=0&k=20&c=UU-UJNNEVZ_iwImfCpDex-Y0zGXA8h39qWBs2xUGsSY="
        backgroundAlt="Professional landscaping services in Ventura County"
      />

      {/* Service categories */}
      <section className="section">
        <div className="container">
          <div className="center" style={{ marginBottom: '2.5rem' }}>
            <p className="eyebrow">What We Do</p>
            <h2>Complete Landscaping Services, One Local Team</h2>
            <p className="lead">Three core service categories covering everything your Ventura County property needs.</p>
          </div>
          <div className="grid grid-3">
            {categories.map((c) => (
              <ServiceCard key={c.title} {...c} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured services */}
      <section className="section bg-off">
        <div className="container">
          <div className="center" style={{ marginBottom: '2.5rem' }}>
            <p className="eyebrow">Featured Services</p>
            <h2>Popular Services Across Ventura County</h2>
          </div>
          <div className="grid grid-3">
            {featured.map((f) => (
              <ServiceCard key={f.title} {...f} />
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="section">
        <div className="container">
          <div className="center" style={{ marginBottom: '2.5rem' }}>
            <p className="eyebrow">Why Choose Us</p>
            <h2>Ventura County’s Trusted Landscape &amp; Design Team</h2>
          </div>
          <div className="grid grid-4">
            {trust.map((t) => (
              <div className="feature" key={t.title}>
                <div className="feature__icon" aria-hidden="true">{t.icon}</div>
                <div>
                  <h3>{t.title}</h3>
                  <p>{t.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service area */}
      <section className="section bg-tan">
        <div className="container center">
          <p className="eyebrow">Service Area</p>
          <h2>Proudly Serving All Of Ventura County</h2>
          <p className="lead" style={{ margin: '0 auto 1.6rem' }}>
            Local crews, fast response, and landscaping tailored to your city’s climate and character.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <LocationLinks bare />
          </div>
        </div>
      </section>

      <TestimonialsSection count={3} />

      <FAQSection faqs={faqs} heading="Landscaping FAQs" intro="Quick answers to the questions we hear most from Ventura County homeowners." />

      <CTABanner
        headline="Let’s Build Your Dream Landscape"
        subtext="Call now for a free quote or request one online. Serving Ventura, Oxnard, Camarillo, Channel Islands, Saticoy, and Santa Paula."
      />
    </>
  );
}
