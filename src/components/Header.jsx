import { useState } from 'react';
import { Link } from 'react-router-dom';
import { business, nav } from '../data/site';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState(null);

  const closeMobile = () => {
    setMobileOpen(false);
    setOpenGroup(null);
  };

  return (
    <header className="header">
      <div className="container header__bar">
        <Link to="/" className="logo" onClick={closeMobile}>
          <img className="logo__mark" src="/favicon.svg" alt="" aria-hidden="true" />
          <span>
            Landscaping Pros
            <small>Of Ventura</small>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="nav" aria-label="Primary">
          {nav.map((group) => (
            <div className="nav__item" key={group.label}>
              <button className="nav__link" aria-haspopup="true">
                {group.label} <span className="nav__caret">▼</span>
              </button>
              <ul className="dropdown">
                {group.items.map((item) => (
                  <li key={item.to}>
                    <Link to={item.to}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <div className="header__cta">
          <a className="header__phone" href={business.phoneHref}>
            <span>Call Now</span>
            {business.phoneDisplay}
          </a>
          <Link className="btn btn--gold" to="/contact-us">
            Request A Free Quote
          </Link>
          <button
            className={`hamburger ${mobileOpen ? 'is-open' : ''}`}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`mobile-menu ${mobileOpen ? 'is-open' : ''}`}>
        {nav.map((group) => (
          <div className="m-group" key={group.label}>
            <button
              className="m-group__btn"
              onClick={() => setOpenGroup(openGroup === group.label ? null : group.label)}
              aria-expanded={openGroup === group.label}
            >
              {group.label}
              <span>{openGroup === group.label ? '–' : '+'}</span>
            </button>
            {openGroup === group.label && (
              <ul className="m-group__links">
                {group.items.map((item) => (
                  <li key={item.to}>
                    <Link to={item.to} onClick={closeMobile}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
        <div className="m-cta">
          <a className="btn btn--outline btn--lg" href={business.phoneHref}>
            Call {business.phoneDisplay}
          </a>
          <Link className="btn btn--primary btn--lg" to="/contact-us" onClick={closeMobile}>
            Request A Free Quote
          </Link>
        </div>
      </div>
    </header>
  );
}
