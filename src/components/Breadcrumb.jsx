import { Link } from 'react-router-dom';
import { business } from '../data/site';

// Props: crumbs [{label, to}] — last item is the current page (rendered as bold text).
export default function Breadcrumb({ crumbs = [] }) {
  return (
    <nav className="crumbs container" aria-label="Breadcrumb">
      {crumbs.map((c, i) => {
        const isLast = i === crumbs.length - 1;
        return (
          <span key={c.label} style={{ margin: 0 }}>
            {isLast || !c.to ? <b>{c.label}</b> : <Link to={c.to}>{c.label}</Link>}
            {!isLast && <span>/</span>}
          </span>
        );
      })}
    </nav>
  );
}

// Helper to build BreadcrumbList JSON-LD.
export function breadcrumbJsonLd(crumbs = []) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.label,
      item: c.to ? `${business.url}${c.to}` : undefined,
    })),
  };
}
