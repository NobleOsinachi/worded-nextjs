import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";
import { NextApiResponse } from "next";

export const GET = async (req: NextRequest, res: NextApiResponse) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "chukwukerenoble98@gmail.com",
        pass: "wlofafnargtufsft",
      },
    });

    const mailOptions = {
      from: "Worded App",
      to: "NOBLEOSINACHI98@GMAIL.COM",
      subject: "Worded App Time Stamp",
      text: "Today's date is " + new Date(),
    };

    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email: " + error);
    // res.status(500).json({ error: "Error sending email" });

    return NextResponse.json(
      { message: "Error sending email" },
      { status: 500 }
    );
  }
};
