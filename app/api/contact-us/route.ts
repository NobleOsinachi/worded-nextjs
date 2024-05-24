import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";
import { NextApiResponse } from "next";

export const GET = async (req: NextRequest, res: NextApiResponse) => {
  try {
    // Set CORS headers
    const responseHeaders = new Headers();
    responseHeaders.set("Access-Control-Allow-Origin", "*");
    responseHeaders.set("Access-Control-Allow-Methods", "GET, OPTIONS");
    responseHeaders.set("Access-Control-Allow-Headers", "Content-Type");


    // Extract query parameters for GET
    const { searchParams } = new URL(req.url);
    const name = searchParams.get("name");
    const email = searchParams.get("email");
    const message = searchParams.get("message");

    // Check if all required parameters are present
    if (!name || !email || !message) {
      return NextResponse.json(
        { status: false, message: "Missing required parameters" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "elbonconcepts@gmail.com",
        pass: "hrvjpmnccgnolfgt",
      },
    });

    const mailOptions = {
      from: "Elbon Concepts Inquiry Form <elbonconcepts@gmail.com>",
      to: "nobleosinachi@outlook.com",
      replyTo: email,
      subject: "New Inquiry from Elbon Concepts",
      html: `
        <h1>New Inquiry</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
        <p><em>Sent on: ${new Date()}</em></p>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
    return NextResponse.json(
      { status: true, message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email: " + error);
    return NextResponse.json(
      { status: false, message: "Error sending email" },
      { status: 500 }
    );
  }
};



export const OPTIONS = async () => {
  const responseHeaders = new Headers();
  responseHeaders.set("Access-Control-Allow-Origin", "*");
  responseHeaders.set("Access-Control-Allow-Methods", "GET, OPTIONS");
  responseHeaders.set("Access-Control-Allow-Headers", "Content-Type");
  return new NextResponse(null, { status: 204, headers: responseHeaders });
};
