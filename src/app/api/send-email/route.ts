import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

// Separate function to save lead to external API
async function saveLeadToAPI(name: string, email: string, phone: string, subject: string, message: string, status: string, channel: string, whatsapp: string, owner: string) {
  try {
    const leadsRes = await fetch("https://app.miraculoussoft.com/api/public/leads", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": process.env.LEADS_KEY!,
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        subject,
        message,
        status : "new",
        channel : "website",
        whatsapp : phone,
        owner : name
      }),
    });

    if (!leadsRes.ok) {
      const errorText = await leadsRes.text();
      let errorData;
      try {
        errorData = JSON.parse(errorText);
      } catch {
        errorData = { message: errorText || `API returned status ${leadsRes.status}` };
      }
      console.error("Leads API error:", leadsRes.status, errorData);
      return false;
    }

    console.log("Lead saved successfully to API");
    return true;
  } catch (error) {
    console.error("Save lead error:", error);
    return false;
  }
}

export async function POST(req: Request) {
  try {
    const { name, email, phone, service, message, status, channel, whatsapp, owner } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER!,
        pass: process.env.SMTP_PASS!,
      },
    });

    const mailOptions = {
      from: `${name} <${email}>`,
      to: process.env.SEND_TO,
      subject: "New Inquiry via Contact Form - " + name + " - " + new Date().toLocaleDateString('en-IN'),
      html: `<div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px;">
              <table cellpadding="10" cellspacing="0" border="0" width="100%" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e0e0e0;">
                <tr style="background: linear-gradient(to right, #dc2626, #fb923c); background-color: #dc2626; color: #ffffff;">
                  <td colspan="2" style="text-align: center; font-size: 20px; font-weight: bold;">
                    New Inquiry via Contact Form
                  </td>
                </tr>
                <tr>
                  <td style="font-weight: bold; width: 150px;">Name:</td>
                  <td>${name}</td>
                </tr>
                <tr style="background-color: #f2f2f2;">
                  <td style="font-weight: bold;">Email:</td>
                  <td>${email}</td>
                </tr>
                <tr>
                  <td style="font-weight: bold;">Phone:</td>
                  <td>${phone}</td>
                </tr>
                <tr style="background-color: #f2f2f2;">
                  <td style="font-weight: bold;">Service:</td>
                  <td>${service || "Not specified"}</td>
                </tr>
                <tr>
                  <td style="font-weight: bold;">Message:</td>
                  <td>${message}</td>
                </tr>
              </table>
              <p style="text-align:center; color:#555; font-size:12px; margin-top:15px;">
                This message was sent from your website contact form.
              </p>
            </div>`,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Save lead to API (non-blocking, runs in background)
    // Don't await - let it run asynchronously so it doesn't delay the response
    if (phone && service) {
      saveLeadToAPI(name, email, phone, service, message, status, channel, whatsapp, owner).catch((err) => {
        console.error("Background lead save failed:", err);
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}