import { Link } from 'react-router-dom';
import { cities } from '../data/site';

// Internal links to location pages. Props: exclude (slug to omit), heading, subheading
export default function LocationLinks({
  exclude,
  heading = 'Proudly Serving All Of Ventura County',
  subheading = 'Local crews, fast response, and landscaping built for your city.',
  bare = false,
}) {
  const list = cities.filter((c) => c.slug !== exclude);
  const chips = (
    <div className="loc-links">
      {list.map((c) => (
        <Link className="loc-chip" to={c.slug} key={c.slug}>
          {c.name}
        </Link>
      ))}
    </div>
  );

  if (bare) return chips;

  return (
    <section className="section section--tight">
      <div className="container">
        <div className="center" style={{ marginBottom: '1.5rem' }}>
          <p className="eyebrow">Service Area</p>
          <h2>{heading}</h2>
          <p className="lead">{subheading}</p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>{chips}</div>
      </div>
    </section>
  );
}
