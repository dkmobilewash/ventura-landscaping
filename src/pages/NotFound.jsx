import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { business } from '../data/site';

export default function NotFound() {
  return (
    <>
      <SEOHead title="Page Not Found | Ventura Landscape & Design" description="The page you’re looking for couldn’t be found." canonical="/404" />
      <section className="section" style={{ textAlign: 'center', minHeight: '50vh' }}>
        <div className="container">
          <p className="eyebrow">404</p>
          <h1>Page Not Found</h1>
          <p className="lead" style={{ margin: '0 auto 1.6rem' }}>
            Sorry, we couldn’t find that page. Let’s get you back to growing something beautiful.
          </p>
          <div className="hero__btns" style={{ justifyContent: 'center' }}>
            <Link className="btn btn--primary btn--lg" to="/">Back Home</Link>
            <a className="btn btn--outline btn--lg" href={business.phoneHref}>Call {business.phoneDisplay}</a>
          </div>
        </div>
      </section>
    </>
  );
}
