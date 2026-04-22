import { NextRequest, NextResponse } from "next/server";

const NTFY_TOPIC = "ecuriesmoulin-e3b7c48516b17c49";

export async function POST(req: NextRequest) {
  const { name, email, subject, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ success: false, error: "Champs manquants" }, { status: 400 });
  }

  const body = `De : ${name} <${email}>
Sujet : ${subject}

${message}`;

  await fetch(`https://ntfy.sh/${NTFY_TOPIC}`, {
    method: "POST",
    headers: {
      Title: `[Contact site] ${subject}`,
      Priority: "high",
      Tags: "horse,envelope",
      "Content-Type": "text/plain; charset=utf-8",
    },
    body,
  });

  return NextResponse.json({ success: true });
}
