import { Link } from 'react-router-dom';
import { business } from '../data/site';

// Reusable hero. Props: title, subtitle, backgroundImage, backgroundAlt, isHomeHero
export default function HeroSection({ title, subtitle, backgroundImage, backgroundAlt, variant = 'page' }) {
  return (
    <section className={`hero ${variant === 'page' ? 'hero--page' : ''}`}>
      {/* HERO IMAGE - swap src to change */}
      <img
        className="hero__img"
        src={backgroundImage}
        alt={backgroundAlt || ''}
        aria-hidden={backgroundAlt ? undefined : 'true'}
      />
      <div className="container">
        <div className="hero__inner">
          <h1>{title}</h1>
          {subtitle && <p className="hero__sub">{subtitle}</p>}
          <div className="hero__btns">
            <a className="btn btn--gold btn--lg" href={business.phoneHref}>
              Call Now — {business.phoneDisplay}
            </a>
            <Link className="btn btn--ghost btn--lg" to="/contact-us">
              Request A Free Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
