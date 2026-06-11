import SEOHead from '../components/SEOHead';
import HeroSection from '../components/HeroSection';
import Breadcrumb, { breadcrumbJsonLd } from '../components/Breadcrumb';
import ContactForm from '../components/ContactForm';
import { business, cities } from '../data/site';

export default function ContactUs() {
  const crumbs = [{ label: 'Home', to: '/' }, { label: 'Contact Us' }];
  const localBusinessJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: business.name,
    telephone: business.phoneDisplay,
    email: business.email,
    url: `${business.url}/contact-us`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.street,
      addressLocality: business.city,
      addressRegion: business.state,
      postalCode: business.zip,
      addressCountry: 'US',
    },
    areaServed: cities.map((c) => ({ '@type': 'City', name: `${c.name}, CA` })),
    priceRange: '$$',
  };

  return (
    <>
      <SEOHead
        title="Contact Landscaping Pros Of Ventura | Free Quote | (805) 833-0167"
        description="Contact Landscaping Pros Of Ventura for a free landscaping quote. Call (805) 833-0167 or fill out our form. Serving Ventura, Oxnard, Camarillo, and all of Ventura County."
        canonical="/contact-us"
        jsonLd={[localBusinessJsonLd, breadcrumbJsonLd(crumbs)]}
      />
      <HeroSection
        title="Contact Landscaping Pros Of Ventura"
        subtitle="Ready for a free quote? Call us or send a message and we’ll get right back to you — usually within one business day."
        backgroundImage="https://media.istockphoto.com/id/2155899861/photo/backyard-pool-in-a-verdant-garden-setting-in-a-modern-new-construction-home-in-los-angeles.jpg?s=612x612&w=0&k=20&c=KPb4CssXWXTPInXz7SKEvk30Ilh7UOsq3nLeuMWnkNo="
        backgroundAlt="Contact Landscaping Pros Of Ventura for a free quote"
      />
      <Breadcrumb crumbs={crumbs} />

      <section className="section">
        <div className="container split">
          <div>
            <p className="eyebrow">Get In Touch</p>
            <h2>Request Your Free Quote</h2>
            <p className="lead" style={{ marginBottom: '1.5rem' }}>
              Tell us a little about your project and we’ll follow up to schedule your free,
              no-pressure estimate.
            </p>
            <ContactForm />
          </div>

          <div>
            <div className="info-card" style={{ marginBottom: '1.2rem' }}>
              <strong>Phone</strong>
              <a href={business.phoneHref} style={{ fontSize: '1.4rem', fontWeight: 700 }}>
                {business.phoneDisplay}
              </a>
            </div>
            <div className="info-card" style={{ marginBottom: '1.2rem' }}>
              <strong>Email</strong>
              <a href={`mailto:${business.email}`}>{business.email}</a>
            </div>
            <div className="info-card" style={{ marginBottom: '1.2rem' }}>
              <strong>Address</strong>
              {business.street}, {business.city}, {business.state} {business.zip}
            </div>
            <div className="info-card" style={{ marginBottom: '1.2rem' }}>
              <strong>Hours</strong>
              {business.hours}
            </div>
            <div className="map-ph" aria-label="Map of our Ventura County service area">
              📍 Serving all of {business.region}, CA<br />
              {business.street}, {business.city}, {business.state} {business.zip}
            </div>
          </div>
        </div>
      </section>

      <section className="section section--tight bg-off">
        <div className="container center">
          <p className="eyebrow">Service Area</p>
          <h2>Serving All Of Ventura County</h2>
          <p className="lead" style={{ margin: '0 auto' }}>
            We proudly serve {cities.map((c) => c.name).join(', ')} and the surrounding communities.
          </p>
        </div>
      </section>
    </>
  );
}
