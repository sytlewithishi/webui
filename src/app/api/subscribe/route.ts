import { NextRequest, NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  let body: { email?: unknown; source?: unknown };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
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

  try {
    const res = await fetch(
      `https://api.kit.com/v4/forms/${KIT_FORM_ID}/subscribers`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Kit-Api-Key": KIT_API_KEY,
        },
        body: JSON.stringify({
          email_address: email,
          fields: { source },
        }),
      }
    );

    if (!res.ok) {
      const text = await res.text();
      console.error("[subscribe] Kit error", res.status, text);
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
