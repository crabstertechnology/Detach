import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { error: "A valid email address is required." },
        { status: 400 }
      );
    }

    // In production, insert into Neon Postgres, Supabase, Airtable, or Resend
    console.log(`[Waitlist Signup] Recorded email: ${email} at ${new Date().toISOString()}`);

    return NextResponse.json(
      { success: true, message: "Successfully added to the waitlist." },
      { status: 200 }
    );
  } catch (error) {
    console.error("[Waitlist API Error]", error);
    return NextResponse.json(
      { error: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}

