// Serverless function (Vercel) that emails website form submissions via Resend.
//
// Required environment variable:
//   RESEND_API_KEY      - your Resend API key (Settings > API Keys on resend.com)
//
// Optional environment variables:
//   LEAD_TO_EMAIL       - where leads are delivered (default: dcarrillo0422@gmail.com)
//   LEAD_FROM_EMAIL     - verified Resend sender (default: onboarding@resend.dev)
//                         Use a verified-domain address once your domain is set up,
//                         e.g. "Landscaping Pros Of Ventura <leads@landscapingprosofventura.com>"

const TO = process.env.LEAD_TO_EMAIL || 'dcarrillo0422@gmail.com';
const FROM = process.env.LEAD_FROM_EMAIL || 'Landscaping Pros Website <onboarding@resend.dev>';

const escape = (v = '') =>
  String(v)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('RESEND_API_KEY is not set');
    return res.status(500).json({ error: 'Email service is not configured.' });
  }

  // Vercel parses JSON bodies automatically, but guard for string bodies too.
  let body = req.body;
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch { body = {}; }
  }
  body = body || {};

  // Honeypot: silently accept bot submissions without emailing.
  if (body.company) return res.status(200).json({ ok: true });

  const {
    formType = 'contact',
    name = '',
    phone = '',
    email = '',
    service = '',
    city = '',
    position = '',
    message = '',
  } = body;

  if (!name.trim() || (!email.trim() && !phone.trim())) {
    return res.status(400).json({ error: 'Please include your name and a way to reach you.' });
  }

  const isJob = formType === 'application';
  const subject = isJob
    ? `New Job Application — ${name}${position ? ` (${position})` : ''}`
    : `New Quote Request — ${name}${service ? ` (${service})` : ''}`;

  const rows = [
    ['Name', name],
    ['Phone', phone],
    ['Email', email],
    isJob ? ['Position', position] : ['Service Needed', service],
    isJob ? null : ['City', city],
    ['Message', message],
  ].filter(Boolean);

  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;max-width:600px;margin:auto;color:#1e1e1e">
      <h2 style="color:#2d6a2d;margin:0 0 4px">${isJob ? 'New Job Application' : 'New Quote Request'}</h2>
      <p style="color:#5a5f57;margin:0 0 16px">Submitted via landscapingprosofventura.com</p>
      <table style="width:100%;border-collapse:collapse">
        ${rows
          .map(
            ([label, value]) => `
          <tr>
            <td style="padding:10px;border:1px solid #e4e0d6;background:#f7f5f0;font-weight:bold;width:160px;vertical-align:top">${escape(label)}</td>
            <td style="padding:10px;border:1px solid #e4e0d6;white-space:pre-wrap">${escape(value) || '—'}</td>
          </tr>`
          )
          .join('')}
      </table>
    </div>`;

  const text = rows.map(([l, v]) => `${l}: ${v || '—'}`).join('\n');

  try {
    const resp = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: FROM,
        to: [TO],
        subject,
        html,
        text,
        ...(email.trim() ? { reply_to: email.trim() } : {}),
      }),
    });

    if (!resp.ok) {
      const detail = await resp.text();
      console.error('Resend API error:', resp.status, detail);
      return res.status(502).json({ error: 'We could not send your message right now.' });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Lead send failed:', err);
    return res.status(502).json({ error: 'We could not send your message right now.' });
  }
}
