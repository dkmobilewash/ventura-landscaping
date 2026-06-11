import { useState } from 'react';
import { serviceOptions, cities } from '../data/site';

// Visual/UX-only contact form. Shows a success state on submit (no backend).
export default function ContactForm({ defaultService = '', defaultCity = '' }) {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: defaultService,
    city: defaultCity,
    message: '',
    company: '', // honeypot (hidden from real users)
  });

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const onSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSending(true);
    try {
      const res = await fetch('/api/send-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ formType: 'contact', ...form }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || 'Something went wrong.');
      }
      setSubmitted(true);
    } catch (err) {
      setError(
        `${err.message} Please try again, or call us directly at (805) 833-0167.`
      );
    } finally {
      setSending(false);
    }
  };

  if (submitted) {
    return (
      <div className="form__success" role="status">
        <h3>Thank you! 🌿</h3>
        <p style={{ marginBottom: 0 }}>
          We received your request and we’ll be in touch within 1 business day. Need help sooner?
          Call us anytime at <strong>(805) 833-0167</strong>.
        </p>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="form__row">
        <div className="field">
          <label htmlFor="cf-name">Name</label>
          <input id="cf-name" name="name" value={form.name} onChange={update} required placeholder="Your name" />
        </div>
        <div className="field">
          <label htmlFor="cf-phone">Phone</label>
          <input id="cf-phone" name="phone" type="tel" value={form.phone} onChange={update} required placeholder="(805) 555-0100" />
        </div>
      </div>

      <div className="form__row">
        <div className="field">
          <label htmlFor="cf-email">Email</label>
          <input id="cf-email" name="email" type="email" value={form.email} onChange={update} required placeholder="you@email.com" />
        </div>
        <div className="field">
          <label htmlFor="cf-service">Service Needed</label>
          <select id="cf-service" name="service" value={form.service} onChange={update} required>
            <option value="" disabled>Select a service</option>
            {serviceOptions.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="field">
        <label htmlFor="cf-city">City</label>
        <select id="cf-city" name="city" value={form.city} onChange={update} required>
          <option value="" disabled>Select your city</option>
          {cities.map((c) => (
            <option key={c.slug} value={c.name}>{c.name}</option>
          ))}
          <option value="Other">Other</option>
        </select>
      </div>

      <div className="field">
        <label htmlFor="cf-message">Message</label>
        <textarea id="cf-message" name="message" rows="4" value={form.message} onChange={update} placeholder="Tell us about your project..." />
      </div>

      {/* Honeypot field — hidden from humans, catches bots */}
      <input
        type="text"
        name="company"
        value={form.company}
        onChange={update}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: 'absolute', left: '-5000px' }}
      />

      {error && (
        <p role="alert" style={{ color: '#b3261e', margin: 0 }}>
          {error}
        </p>
      )}

      <button className="btn btn--primary btn--lg" type="submit" disabled={sending}>
        {sending ? 'Sending…' : 'Request My Free Quote'}
      </button>
    </form>
  );
}
