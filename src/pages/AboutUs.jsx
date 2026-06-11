import SEOHead from '../components/SEOHead';
import HeroSection from '../components/HeroSection';
import Breadcrumb, { breadcrumbJsonLd } from '../components/Breadcrumb';
import CTABanner from '../components/CTABanner';
import LocationLinks from '../components/LocationLinks';
import { business } from '../data/site';

const values = [
  { icon: '🤝', title: 'Integrity', text: 'Honest advice and fair pricing — we recommend what your landscape actually needs.' },
  { icon: '🌿', title: 'Craftsmanship', text: 'We sweat the details, because the details are what make a landscape great.' },
  { icon: '💧', title: 'Stewardship', text: 'Water-wise, environmentally responsible practices on every project.' },
  { icon: '📞', title: 'Reliability', text: 'We show up, communicate clearly, and stand behind our work.' },
];

const team = [
  { name: 'Field Crews', role: 'Maintenance & Installation', text: 'Experienced, uniformed crews who treat every property with care and pride.' },
  { name: 'Design Team', role: 'Landscape Design', text: 'Designers who blend beauty with the realities of our climate and water rules.' },
  { name: 'Account Managers', role: 'Service & HOA Support', text: 'Your single point of contact for fast answers and dependable scheduling.' },
];

export default function AboutUs() {
  const crumbs = [{ label: 'Home', to: '/' }, { label: 'About Us' }];
  return (
    <>
      <SEOHead
        title="About Landscaping Pros Of Ventura | Local Ventura County Landscapers"
        description="Learn about Landscaping Pros Of Ventura — a trusted local landscaping company serving Ventura County homeowners and businesses with quality lawn care, design, and maintenance."
        canonical="/about-us"
        jsonLd={breadcrumbJsonLd(crumbs)}
      />
      <HeroSection
        title="About Landscaping Pros Of Ventura"
        subtitle="A local, family-minded landscaping company rooted in Ventura County — and committed to making your outdoor space beautiful."
        backgroundImage="https://media.istockphoto.com/id/2183289459/photo/design-of-landscaping-in-the-garden-park-square-recreation-area.jpg?s=612x612&w=0&k=20&c=A4nCdEJAAUGh9aqT4U3q-3NbAMupKhjLDG8abTeZI9M="
        backgroundAlt="The Landscaping Pros Of Ventura team at work in Ventura County"
      />
      <Breadcrumb crumbs={crumbs} />

      <section className="section">
        <div className="container split">
          <div className="prose">
            <p className="eyebrow">Our Story</p>
            <h2>Local Roots, Ventura County Focus</h2>
            <p>
              Landscaping Pros Of Ventura was founded in {business.founded} with a simple goal: give
              Ventura County homeowners a landscaping company they can actually count on. From our
              base on {business.street} in {business.city}, we’ve grown by doing great work and
              treating every property like our own.
            </p>
            <p>
              Over the years we’ve mowed, designed, planted, and built across the entire county — from
              coastal homes in Ventura and the Channel Islands Harbor to the HOA communities of
              Camarillo and the citrus-country properties of Santa Paula. That local experience means
              we know exactly what thrives here and how to keep it beautiful on less water.
            </p>
            <p>
              We’re big enough to handle full design-build projects and HOA contracts, yet small
              enough that you’ll always get personal, responsive service.
            </p>
          </div>
          <div>
            <img
              src="https://media.istockphoto.com/id/2168487231/photo/large-gray-pergola-on-pavers-with-stone-fireplace-and-waterfall-urns-for-backyard-oasis.jpg?s=612x612&w=0&k=20&c=r73pWzPWRGdZ7yl12LXrDZsErUIk1UEywS8P-NHW-Aw="
              alt="Landscape design and installation work in Ventura County"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="section bg-off">
        <div className="container">
          <div className="center" style={{ marginBottom: '2.5rem' }}>
            <p className="eyebrow">Our Team</p>
            <h2>The People Behind Your Landscape</h2>
          </div>
          <div className="grid grid-3">
            {team.map((m) => (
              <article className="card" key={m.name}>
                <h3>{m.name}</h3>
                <p style={{ color: 'var(--gold-dark)', fontWeight: 600, marginBottom: '0.5rem' }}>{m.role}</p>
                <p className="mb-0">{m.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="center" style={{ marginBottom: '2.5rem' }}>
            <p className="eyebrow">Core Values</p>
            <h2>What We Stand For</h2>
          </div>
          <div className="grid grid-4">
            {values.map((v) => (
              <div className="feature" key={v.title}>
                <div className="feature__icon" aria-hidden="true">{v.icon}</div>
                <div>
                  <h3>{v.title}</h3>
                  <p>{v.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LocationLinks />
      <CTABanner />
    </>
  );
}
