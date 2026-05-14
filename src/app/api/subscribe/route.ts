import { NextRequest, NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const KIT_BASE = "https://api.kit.com/v4";

export async function POST(req: NextRequest) {
  let body: { email?: unknown; source?: unknown; website?: unknown };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  // Honeypot: real users never see/fill `website`. Silently 200 for bots.
  const honeypot = typeof body.website === "string" ? body.website.trim() : "";
  if (honeypot) {
    return NextResponse.json({ ok: true });
  }

  const email = typeof body.email === "string" ? body.email.trim() : "";
  const source = typeof body.source === "string" ? body.source : "unknown";

  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  const KIT_API_KEY = process.env.KIT_API_KEY;
  const KIT_FORM_ID = process.env.KIT_FORM_ID;

  if (!KIT_API_KEY || !KIT_FORM_ID) {
    console.log("[subscribe] queued (Kit not configured):", { email, source });
    return NextResponse.json({ ok: true, queued: true });
  }

  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    "X-Kit-Api-Key": KIT_API_KEY,
  };

  try {
    // Step 1: create-or-update the subscriber.
    // Kit v4 returns 201 for new, 200 for existing-and-updated.
    const createRes = await fetch(`${KIT_BASE}/subscribers`, {
      method: "POST",
      headers,
      body: JSON.stringify({
        email_address: email,
        state: "active",
      }),
    });

    if (!createRes.ok) {
      const text = await createRes.text();
      console.error(
        "[subscribe] Kit create-subscriber error",
        createRes.status,
        text
      );
      return NextResponse.json(
        { error: "Subscription failed. Please try again." },
        { status: 502 }
      );
    }

    // Step 2: add the subscriber to the waitlist form.
    // Form endpoint requires the subscriber to exist (Step 1 ensures that).
    // The `referrer` field is how Kit attributes the source per its v4 spec.
    const formRes = await fetch(
      `${KIT_BASE}/forms/${KIT_FORM_ID}/subscribers`,
      {
        method: "POST",
        headers,
        body: JSON.stringify({
          email_address: email,
          referrer: source,
        }),
      }
    );

    if (!formRes.ok) {
      const text = await formRes.text();
      console.error(
        "[subscribe] Kit form-add error",
        formRes.status,
        text
      );
      return NextResponse.json(
        { error: "Subscription failed. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[subscribe] error", err);
    return NextResponse.json(
      { error: "Subscription failed. Please try again." },
      { status: 500 }
    );
  }
}
