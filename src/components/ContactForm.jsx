import { useState } from 'react';
import { serviceOptions, cities } from '../data/site';

// Visual/UX-only contact form. Shows a success state on submit (no backend).
export default function ContactForm({ defaultService = '', defaultCity = '' }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: defaultService,
    city: defaultCity,
    message: '',
  });

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
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

      <button className="btn btn--primary btn--lg" type="submit">
        Request My Free Quote
      </button>
    </form>
  );
}
