# Form → Email Automation (Resend)

Both the **Contact** form (`/contact-us`) and the **Job Application** form
(`/job-opportunities`) submit to a serverless function at `api/send-lead.js`,
which emails the submission to you via [Resend](https://resend.com).

## One-time setup

1. **Create a Resend account** at https://resend.com (free tier is fine to start).
2. **Create an API key:** Dashboard → **API Keys** → **Create API Key** (Sending access).
   Copy the key (starts with `re_…`).
3. **Add the key to your host (Vercel):**
   Project → **Settings → Environment Variables** → add:
   | Name | Value |
   |------|-------|
   | `RESEND_API_KEY` | your `re_…` key |
   | `LEAD_TO_EMAIL` | `diego@detailvice.com` (optional — this is the default) |
   | `LEAD_FROM_EMAIL` | leave unset until your domain is verified (see below) |
   Redeploy after adding them.
4. **Local testing (optional):** copy `.env.example` to `.env`, fill in the key,
   and run `vercel dev` (the Vite dev server alone does **not** run `/api`).

## Sending address & domain verification

- **Before domain verification:** the function sends from Resend's test sender
  `onboarding@resend.dev`. Resend only allows that test sender to deliver to the
  email that owns your Resend account — so make sure you sign up for Resend with
  **diego@detailvice.com**, and test emails will arrive fine.
- **For production (recommended):** in Resend, go to **Domains → Add Domain**,
  add `landscapingprosofventura.com` (or `detailvice.com`), and add the DNS
  records it gives you. Once verified, set:
  `LEAD_FROM_EMAIL="Landscaping Pros Of Ventura <leads@landscapingprosofventura.com>"`
  This lets leads be delivered to any address and improves deliverability.

## What you receive

- **Subject:** `New Quote Request — <name> (<service>)` or
  `New Job Application — <name> (<position>)`
- **Body:** a formatted table of every field (name, phone, email, service/position,
  city, message).
- **Reply-To** is set to the submitter's email, so you can reply to the lead directly.

A hidden honeypot field silently discards obvious spam bots.
