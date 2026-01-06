// src/app/api/contact/route.ts
export const runtime = "nodejs";

import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ ok: true, route: "/api/contact" });
}

export async function POST() {
  return NextResponse.json({ ok: true, message: "POST reached" });
}
