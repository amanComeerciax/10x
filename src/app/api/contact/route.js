import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, subject, product, message } = body;

    const emailSubject = subject || (product ? `Product Inquiry: ${product}` : "New Website Inquiry");
    const targetEmail = "amanmemon0014@gmail.com";

    // Direct dispatch to target email amanmemon0014@gmail.com
    const emailData = {
      _subject: `[10X International Website Inquiry] ${emailSubject}`,
      name: name || "Website Visitor",
      email: email || "Not Provided",
      phone: phone || "Not Provided",
      inquiry_details: emailSubject,
      message: message || "No message provided.",
      _template: "table",
      _captcha: "false"
    };

    const res = await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(emailData),
    });

    const result = await res.json();

    return NextResponse.json({ 
      success: true, 
      message: "Inquiry sent to amanmemon0014@gmail.com",
      result
    });
  } catch (error) {
    console.error("Error sending email inquiry:", error);
    return NextResponse.json({ success: false, error: "Failed to send email inquiry." }, { status: 500 });
  }
}
