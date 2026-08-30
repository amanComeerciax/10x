import { NextResponse } from "next/server";
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || 're_dummy_key_to_prevent_build_crash');

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, subject, product, message } = body;

    const emailSubject = subject || (product ? `Quote Request: ${product}` : "New Website Inquiry");
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
        <h2 style="color: #0F2537; border-bottom: 2px solid #22c55e; padding-bottom: 10px;">
          NEW INQUIRY FROM 10X INTERNATIONAL WEBSITE
        </h2>
        <p><strong>Name:</strong> ${name || "N/A"}</p>
        <p><strong>Email:</strong> ${email || "N/A"}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
        ${product ? `<p><strong>Product of Interest:</strong> ${product}</p>` : ''}
        <p><strong>Subject:</strong> ${emailSubject}</p>
        <h3 style="margin-top: 20px; color: #0F2537;">MESSAGE / REQUIREMENTS:</h3>
        <div style="background: #f8fafc; padding: 15px; border-radius: 8px; border: 1px solid #e2e8f0; white-space: pre-wrap;">${message || "No specific details provided."}</div>
        <p style="margin-top: 30px; font-size: 12px; color: #94a3b8;">
          Sent automatically via 10X International Web Portal.
        </p>
      </div>
    `;

    const { data, error } = await resend.emails.send({
      from: '10X Website <onboarding@resend.dev>', // Resend verified testing email
      to: ['amanmemon0014@gmail.com'],
      replyTo: email || 'amanmemon0014@gmail.com',
      subject: `[10X International] ${emailSubject}`,
      html: htmlContent,
    });

    if (error) {
      console.error("Resend API Error:", error);
      return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }

    return NextResponse.json({ 
      success: true, 
      message: "Email sent successfully",
      data
    });
  } catch (error) {
    console.error("Server Error sending email:", error);
    return NextResponse.json({ success: false, error: "Failed to process request." }, { status: 500 });
  }
}
