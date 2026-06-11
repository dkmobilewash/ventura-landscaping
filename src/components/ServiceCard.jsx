import { Link } from 'react-router-dom';

// Props: title, description, icon, link, linkText
export default function ServiceCard({ title, description, icon, link, linkText = 'Learn More' }) {
  return (
    <article className="card">
      {icon && <div className="card__icon" aria-hidden="true">{icon}</div>}
      <h3>{title}</h3>
      <p>{description}</p>
      {link && (
        <Link className="card__link" to={link}>
          {linkText}
        </Link>
      )}
    </article>
  );
}
