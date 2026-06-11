import { Helmet } from 'react-helmet-async';
import { business } from '../data/site';

// Injects a unique <title>, meta description, canonical, and optional JSON-LD.
export default function SEOHead({ title, description, canonical, jsonLd }) {
  const url = canonical ? `${business.url}${canonical}` : business.url;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      {jsonLd &&
        (Array.isArray(jsonLd) ? jsonLd : [jsonLd]).map((block, i) => (
          <script type="application/ld+json" key={i}>
            {JSON.stringify(block)}
          </script>
        ))}
    </Helmet>
  );
}
