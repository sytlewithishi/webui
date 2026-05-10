import { NextRequest, NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  let body: {
    name?: unknown;
    email?: unknown;
    inquiryType?: unknown;
    message?: unknown;
  };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const inquiryType =
    typeof body.inquiryType === "string" ? body.inquiryType : "";
  const message =
    typeof body.message === "string" ? body.message.trim() : "";

  if (!name || !email || !inquiryType || !message) {
    return NextResponse.json(
      { error: "Please fill in all fields." },
      { status: 400 }
    );
  }

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  if (message.length > 5000) {
    return NextResponse.json(
      { error: "Message is too long." },
      { status: 400 }
    );
  }

  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? "isachdev@stylewithishi.com";
  const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL;

  if (!RESEND_API_KEY || !FROM_EMAIL) {
    console.log("[contact] queued (Resend not configured):", {
      name,
      email,
      inquiryType,
      message,
    });
    return NextResponse.json({ ok: true, queued: true });
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: TO_EMAIL,
        reply_to: email,
        subject: `[stylewithishi] ${inquiryType} — ${name}`,
        text: `From: ${name} <${email}>\nInquiry type: ${inquiryType}\n\n${message}`,
      }),
    });

    if (!res.ok) {
      const text = await res.text();
      console.error("[contact] Resend error", res.status, text);
      return NextResponse.json(
        { error: "Could not send. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] error", err);
    return NextResponse.json(
      { error: "Could not send. Please try again." },
      { status: 500 }
    );
  }
}
