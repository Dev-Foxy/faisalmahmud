import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const { name, email, phone, message } = data;

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Required fields are missing." },
        { status: 400 },
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // 1. Admin Email Template (Ultra-minimalist for you)
    const adminHtml = `
      <div style="font-family: 'Courier New', Courier, monospace; padding: 40px; background-color: #ffffff; color: #000000; border: 1px solid #eeeeee;">
        <div style="border-left: 2px solid #000000; padding-left: 20px;">
          <h2 style="text-transform: uppercase; font-size: 14px; letter-spacing: 0.3em; margin-bottom: 30px; opacity: 0.5;">Incoming Transmission</h2>
          
          <div style="margin-bottom: 20px;">
            <p style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; margin: 0; color: #888888;">Project Partner</p>
            <p style="font-size: 16px; margin: 5px 0 0 0;">${name}</p>
          </div>

          <div style="margin-bottom: 20px;">
            <p style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; margin: 0; color: #888888;">Direct Line</p>
            <p style="font-size: 16px; margin: 5px 0 0 0;">${email} ${phone ? `• ${phone}` : ""}</p>
          </div>

          <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #f0f0f0;">
            <p style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 10px; color: #888888;">Project Brief</p>
            <p style="font-size: 15px; line-height: 1.8; color: #333333;">${message.replace(/\n/g, "<br/>")}</p>
          </div>
        </div>
      </div>
    `;

    // 2. Client Confirmation Template (The "Awwwards" Editorial Style)
    const clientHtml = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: auto; padding: 60px 40px; color: #000000; background-color: #ffffff;">
        <h1 style="font-size: 48px; line-height: 1; letter-spacing: -0.05em; font-weight: 800; margin-bottom: 40px;">Received<br/>with thanks.</h1>
        
        <p style="font-size: 18px; line-height: 1.6; color: #555555; margin-bottom: 40px;">
          Hello ${name.split(" ")[0]},<br/><br/>
          Your inquiry has been successfully transmitted. I’ve received your details and am currently reviewing the scope of your vision.
        </p>

        <div style="background-color: #000000; color: #ffffff; padding: 35px; margin-bottom: 40px; border-radius: 2px;">
          <p style="font-size: 10px; text-transform: uppercase; letter-spacing: 0.3em; margin-bottom: 15px; opacity: 0.6;">Transmission Digest</p>
          <p style="font-family: 'Georgia', serif; font-style: italic; font-size: 20px; line-height: 1.4; margin: 0;">
            "${message.length > 80 ? message.substring(0, 80) + "..." : message}"
          </p>
        </div>

        <p style="font-size: 14px; color: #999999; line-height: 1.6;">
          Expect a formal response within the next 24-48 hours. Looking forward to the possibility of collaborating.
        </p>

        <div style="margin-top: 60px; padding-top: 30px; border-top: 1px solid #eeeeee;">
          <p style="font-weight: 900; font-size: 12px; text-transform: uppercase; letter-spacing: 0.2em; margin: 0;">Faisal Mahmud</p>
          <p style="font-size: 11px; color: #aaaaaa; margin: 5px 0 0 0;">Fullstack Engineer • Creative Technologist</p>
          <p style="font-size: 11px; color: #cccccc; margin: 5px 0 0 0;">Dhaka, BD • 2026</p>
        </div>
      </div>
    `;

    // Execute concurrently for speed
    await Promise.all([
      // To Admin
      transporter.sendMail({
        from: `"Direct | Faisal Mahmud" <${process.env.GMAIL_USER}>`,
        to: "faisalmahmud1513@gmail.com",
        subject: `Project Inquiry: ${name}`,
        html: adminHtml,
        replyTo: email,
      }),
      // To Client
      transporter.sendMail({
        from: `"Faisal Mahmud" <${process.env.GMAIL_USER}>`,
        to: email,
        subject: `Connection Received — ${name.split(" ")[0]}`,
        html: clientHtml,
      }),
    ]);

    return NextResponse.json(
      { message: "Inquiry transmitted" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Transmission Error:", error);
    return NextResponse.json(
      { error: "Transmission failed. Service offline." },
      { status: 500 },
    );
  }
}
