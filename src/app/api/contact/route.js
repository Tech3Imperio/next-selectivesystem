import mongoose from "mongoose";
import Contact from "../../../models/contact";
import nodemailer from "nodemailer";

const uri = process.env.MONGODB_URI;

async function connectToDatabase() {
  if (mongoose.connection.readyState === 1) {
    return;
  }
  await mongoose.connect(uri);
}

export async function POST(request) {
  await connectToDatabase();

  const body = await request.json();

  try {
    // Save contact data to MongoDB
    const contactData = new Contact(body);
    await contactData.save();

    // Set up Nodemailer with Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: body.email,
      to: "tech2@imperiorailing.com",
      subject: "New Contact Form Submission",
      html: `
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Phone:</strong> ${body.whatsappNo}</p>
        <p><strong>Message:</strong> ${body.message}</p>
        <p>
          <a href="https://www.imperiorailing.com/" 
             style="
               display: inline-block;
               padding: 10px 20px;
               font-size: 16px;
               color: #ffffff;
               background-color: #4CAF50;
               text-decoration: none;
               border-radius: 5px;
             ">
             Approve Quotation
          </a>
        </p>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({
        message: "Contact saved and email sent successfully!",
        data: contactData,
      }),
      { status: 201 }
    );
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({
        message: "Failed to save contact or send email",
        error,
      }),
      { status: 500 }
    );
  }
}
