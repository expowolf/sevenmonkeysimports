import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const TO = process.env.CONTACT_TO_EMAIL || 'hello@sevenmonkeyimports.com';
const FROM = process.env.CONTACT_FROM_EMAIL || 'Seven Monkey Imports <onboarding@resend.dev>';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const data = req.body || {};
  const type = data.type === 'employment' ? 'employment' : 'message';

  if (!data.name || !data.email) {
    return res.status(400).json({ error: 'Name and email are required.' });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return res.status(400).json({ error: 'Please provide a valid email.' });
  }

  const subject = type === 'employment'
    ? `Employment application — ${data.name}`
    : `Website message — ${data.name}`;

  const rows = Object.entries(data)
    .filter(([k]) => k !== 'type')
    .map(([k, v]) => `<tr><td style="padding:6px 12px;border-bottom:1px solid #eee;font-weight:600;text-transform:capitalize">${k}</td><td style="padding:6px 12px;border-bottom:1px solid #eee;white-space:pre-wrap">${String(v).replace(/[<>&]/g, c => ({'<':'&lt;','>':'&gt;','&':'&amp;'}[c]))}</td></tr>`)
    .join('');

  const html = `
    <div style="font-family:system-ui,sans-serif;max-width:560px">
      <h2 style="color:#d6322c">${subject}</h2>
      <table style="width:100%;border-collapse:collapse;font-size:14px">${rows}</table>
      <p style="color:#888;font-size:12px;margin-top:24px">Sent from sevenmonkeyimports.com</p>
    </div>`;

  try {
    await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: data.email,
      subject,
      html,
    });
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Email send failed:', err);
    return res.status(500).json({ error: 'Could not send. Please call the shop at (262) 310-9799.' });
  }
}
