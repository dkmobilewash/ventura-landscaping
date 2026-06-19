import { useState } from 'react';
import SEOHead from '../components/SEOHead';
import HeroSection from '../components/HeroSection';
import Breadcrumb, { breadcrumbJsonLd } from '../components/Breadcrumb';
import { business } from '../data/site';

const roles = [
  { title: 'Landscape Maintenance Crew Member', type: 'Full-Time', text: 'Mowing, trimming, cleanup, and planting across Ventura County. Experience helpful but we’ll train the right person with a great attitude.' },
  { title: 'Irrigation Technician', type: 'Full-Time', text: 'Install, troubleshoot, and repair sprinkler and drip systems. Knowledge of controllers and valves a plus.' },
  { title: 'Crew Lead / Foreman', type: 'Full-Time', text: 'Lead a maintenance or install crew, manage daily routes and quality, and mentor team members. Bilingual a plus.' },
];

const perks = [
  { icon: '💵', title: 'Competitive Pay', text: 'Fair, on-time pay with room to grow as you build skills.' },
  { icon: '☀️', title: 'Outdoor Work', text: 'Spend your days outside in beautiful Ventura County weather.' },
  { icon: '📈', title: 'Growth', text: 'Real advancement paths from crew member to lead and beyond.' },
  { icon: '🤝', title: 'Great Team', text: 'A respectful, supportive crew that takes pride in its work.' },
];

export default function JobOpportunities() {
  const crumbs = [{ label: 'Home', to: '/' }, { label: 'Job Opportunities' }];
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  const onApply = async (e) => {
    e.preventDefault();
    setError('');
    setSending(true);
    const fd = new FormData(e.target);
    const payload = Object.fromEntries(fd.entries());
    try {
      const res = await fetch('/api/send-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ formType: 'application', ...payload }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || 'Something went wrong.');
      }
      setSubmitted(true);
    } catch (err) {
      setError(`${err.message} Please try again, or call us at ${business.phoneDisplay}.`);
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <SEOHead
        title="Landscaping Jobs in Ventura County | Ventura Landscape & Design"
        description="Join the Ventura Landscape & Design team. We're hiring landscapers, irrigation techs, and crew leads in Ventura County. Apply today."
        canonical="/job-opportunities"
        jsonLd={breadcrumbJsonLd(crumbs)}
      />
      <HeroSection
        title="Join The Ventura Landscape & Design Team"
        subtitle="We’re hiring hardworking, reliable people who take pride in their work. Build a career outdoors with a respected local company."
        backgroundImage="https://media.istockphoto.com/id/2150853972/photo/green-grass-cutting-with-lawn-mower-in-home-garden.jpg?s=612x612&w=0&k=20&c=EzSmAvWSwnbVbJxJP6fsMIDbGnPDmJ_VgpBUVUbO1aM="
        backgroundAlt="Landscaping crew working in Ventura County"
      />
      <Breadcrumb crumbs={crumbs} />

      <section className="section">
        <div className="container">
          <div className="center" style={{ marginBottom: '2.5rem' }}>
            <p className="eyebrow">Open Positions</p>
            <h2>We’re Hiring In Ventura County</h2>
          </div>
          <div className="grid grid-3">
            {roles.map((r) => (
              <article className="card" key={r.title}>
                <span className="critter"><span className="tag">{r.type}</span></span>
                <h3>{r.title}</h3>
                <p className="mb-0">{r.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-off">
        <div className="container">
          <div className="center" style={{ marginBottom: '2.5rem' }}>
            <p className="eyebrow">Why Work With Us</p>
            <h2>A Great Place To Build A Career</h2>
          </div>
          <div className="grid grid-4">
            {perks.map((p) => (
              <div className="feature" key={p.title}>
                <div className="feature__icon" aria-hidden="true">{p.icon}</div>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 760 }}>
          <div className="center" style={{ marginBottom: '1.5rem' }}>
            <p className="eyebrow">Apply Now</p>
            <h2>Submit Your Application</h2>
          </div>
          {submitted ? (
            <div className="form__success" role="status">
              <h3>Thanks for applying! 🌿</h3>
              <p className="mb-0">
                We received your application and will reach out if there’s a fit. You can also call us
                at <strong>{business.phoneDisplay}</strong>.
              </p>
            </div>
          ) : (
            <form className="form" onSubmit={onApply}>
              <div className="form__row">
                <div className="field">
                  <label htmlFor="j-name">Name</label>
                  <input id="j-name" name="name" required placeholder="Your name" />
                </div>
                <div className="field">
                  <label htmlFor="j-phone">Phone</label>
                  <input id="j-phone" name="phone" type="tel" required placeholder="(805) 555-0100" />
                </div>
              </div>
              <div className="form__row">
                <div className="field">
                  <label htmlFor="j-email">Email</label>
                  <input id="j-email" name="email" type="email" required placeholder="you@email.com" />
                </div>
                <div className="field">
                  <label htmlFor="j-position">Position</label>
                  <select id="j-position" name="position" required defaultValue="">
                    <option value="" disabled>Select a position</option>
                    {roles.map((r) => (
                      <option key={r.title} value={r.title}>{r.title}</option>
                    ))}
                    <option value="Other">Other / General Application</option>
                  </select>
                </div>
              </div>
              <div className="field">
                <label htmlFor="j-message">Message</label>
                <textarea id="j-message" name="message" rows="4" placeholder="Tell us about your experience..." />
              </div>
              <input type="text" name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }} />
              {error && <p role="alert" style={{ color: '#b3261e', margin: 0 }}>{error}</p>}
              <button className="btn btn--primary btn--lg" type="submit" disabled={sending}>
                {sending ? 'Sending…' : 'Submit Application'}
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
