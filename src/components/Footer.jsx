import { Link } from 'react-router-dom';
import { business, nav, cities } from '../data/site';

export default function Footer() {
  const year = new Date().getFullYear();
  const serviceGroups = nav.filter((g) =>
    ['Yard Care & Maintenance', 'Landscape Design & Installation', 'Irrigation & Lighting'].includes(g.label)
  );

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <Link to="/" className="logo">
              <img className="logo__mark" src="/favicon.svg" alt="" aria-hidden="true" />
              <span>
                Ventura Landscape
                <small>&amp; Design</small>
              </span>
            </Link>
            <p style={{ marginTop: '1rem' }}>
              Your trusted local landscaping company serving {business.region}, CA with expert lawn
              care, landscape design, irrigation, and outdoor living since {business.founded}.
            </p>
            <p>
              <a href={business.phoneHref}>{business.phoneDisplay}</a>
              <br />
              {business.street}, {business.city}, {business.state} {business.zip}
            </p>
          </div>

          <div>
            <h4>Services</h4>
            <ul>
              {serviceGroups
                .flatMap((g) => g.items)
                .slice(0, 9)
                .map((item) => (
                  <li key={item.to}>
                    <Link to={item.to}>{item.label}</Link>
                  </li>
                ))}
            </ul>
          </div>

          <div>
            <h4>Service Areas</h4>
            <ul>
              {cities.map((c) => (
                <li key={c.slug}>
                  <Link to={c.slug}>{c.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Company</h4>
            <ul>
              <li><Link to="/about-us">About Us</Link></li>
              <li><Link to="/testimonials">Testimonials</Link></li>
              <li><Link to="/job-opportunities">Job Opportunities</Link></li>
              <li><Link to="/contact-us">Contact Us</Link></li>
              <li><Link to="/monthly-landscaping-to-do-calendar">Landscaping Calendar</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer__cta">
          <strong style={{ fontSize: '1.2rem', color: '#fff' }}>
            Call Now For A Free Quote — {business.phoneDisplay}
          </strong>
          <br />
          <a className="btn btn--gold" href={business.phoneHref}>
            Call {business.phoneDisplay}
          </a>
        </div>

        <div className="footer__bar">
          © {year} {business.name}. All rights reserved. · {business.street}, {business.city},{' '}
          {business.state} {business.zip} · Serving all of {business.region}.
        </div>
      </div>
    </footer>
  );
}
