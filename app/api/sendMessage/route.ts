import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  const body = await request.json();

  const { name, mail, phone, message } = body;
  console.log(name);

  const transporter = nodemailer.createTransport({
    service: "gmail", // ou un autre service de mail
    auth: {
      user: process.env.NODEMAILER_USER,
      pass: process.env.NODEMAILER_PASSWORD,
    },
  });
  try {
    await transporter.sendMail({
      from: "tibpizza.noreply@gmail.com",
      to: "robinurcun@gmail.com",
      subject: `New message from ${name} ${phone}`,
      text: `De : ${name}, mail: ${mail}, téléphone: ${phone}, message :${message}`,
    });

    return NextResponse.json({ success: "mail Envoyé" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to send email" });
  }
}
