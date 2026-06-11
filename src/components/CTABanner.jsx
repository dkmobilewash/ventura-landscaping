import { Link } from 'react-router-dom';
import { business } from '../data/site';

// Props: headline, subtext
export default function CTABanner({
  headline = 'Ready For A Landscape You’ll Love?',
  subtext = `Call our Ventura County team today for a free, no-pressure quote. We respond fast and treat your property like our own.`,
}) {
  return (
    <section className="section cta-banner">
      <div className="container">
        <h2>{headline}</h2>
        <p>{subtext}</p>
        <div className="hero__btns">
          <a className="btn btn--gold btn--lg" href={business.phoneHref}>
            Call Now — {business.phoneDisplay}
          </a>
          <Link className="btn btn--ghost btn--lg" to="/contact-us">
            Request A Free Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
