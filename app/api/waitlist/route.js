import { NextResponse } from "next/server";
import { Resend } from "resend";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const email = (body?.email || "").trim().toLowerCase();
  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const audienceId = process.env.RESEND_AUDIENCE_ID;

  // No key configured yet → stub success so the UI works in local/dev.
  if (!apiKey) {
    console.warn("[waitlist] RESEND_API_KEY not set — accepting signup without storing:", email);
    return NextResponse.json({ ok: true, stubbed: true });
  }

  try {
    const resend = new Resend(apiKey);

    if (audienceId) {
      // Add to a Resend Audience (recommended — lets you email everyone at launch).
      await resend.contacts.create({ email, audienceId, unsubscribed: false });
    }

    // Optional: send yourself a notification. Set NOTIFY_EMAIL + FROM_EMAIL to enable.
    if (process.env.NOTIFY_EMAIL && process.env.FROM_EMAIL) {
      await resend.emails.send({
        from: process.env.FROM_EMAIL,
        to: process.env.NOTIFY_EMAIL,
        subject: "New Arlo waitlist signup",
        text: `New signup: ${email}`,
      });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[waitlist] Resend error:", err);
    return NextResponse.json({ error: "Could not join right now. Please try again." }, { status: 500 });
  }
}
