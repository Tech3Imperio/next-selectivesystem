// import mongoose from "mongoose";
// import Contact from "../../../models/contact";
// import nodemailer from "nodemailer";

// const uri = process.env.MONGODB_URI;

// async function connectToDatabase() {
//   if (mongoose.connection.readyState === 1) {
//     return;
//   }
//   await mongoose.connect(uri);
// }

// export async function POST(request) {
//   await connectToDatabase();

//   const body = await request.json();

//   try {
//     // Save contact data to MongoDB
//     const contactData = new Contact(body);
//     await contactData.save();

//     // Set up Nodemailer with Gmail
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     const mailOptions = {
//       from: body.email,
//       to: "tech2@imperiorailing.com",
//       subject: "New Contact Form Submission",
//       html: `
//         <p><strong>Name:</strong> ${body.name}</p>
//         <p><strong>Email:</strong> ${body.email}</p>
//         <p><strong>Phone:</strong> ${body.whatsappNo}</p>
//         <p><strong>Message:</strong> ${body.message}</p>
//         <p>
//           <a href="https://www.imperiorailing.com/"
//              style="
//                display: inline-block;
//                padding: 10px 20px;
//                font-size: 16px;
//                color: #ffffff;
//                background-color: #4CAF50;
//                text-decoration: none;
//                border-radius: 5px;
//              ">
//              Approve Quotation
//           </a>
//         </p>
//       `,
//     };

//     // Send the email
//     await transporter.sendMail(mailOptions);

//     return new Response(
//       JSON.stringify({
//         message: "Contact saved and email sent successfully!",
//         data: contactData,
//       }),
//       { status: 201 }
//     );
//   } catch (error) {
//     console.error("Error:", error);
//     return new Response(
//       JSON.stringify({
//         message: "Failed to save contact or send email",
//         error,
//       }),
//       { status: 500 }
//     );
//   }
// }
// api/contact/route.js

import mongoose from "mongoose";
import Contact from "../../../models/contact";
import nodemailer from "nodemailer";

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error("MONGODB_URI environment variable is missing.");
}

async function connectToDatabase() {
  if (mongoose.connection.readyState === 1) {
    // Already connected
    return;
  }

  // Make sure to handle initial connection
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.error("Database connection error:", error);
    throw new Error("Failed to connect to the database.");
  }
}

export async function POST(request) {
  await connectToDatabase(); // Ensure DB connection is established.

  const body = await request.json(); // Parse incoming data

  if (!body.name || !body.email || !body.message) {
    return new Response(
      JSON.stringify({
        message: "Name, email, and message are required fields.",
      }),
      { status: 400 }
    );
  }

  try {
    // Save the contact data to MongoDB
    const contactData = new Contact(body);
    await contactData.save();

    // Set up Nodemailer transporter with Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: body.email,
      to: "info@selectivesystems.in",
      subject: "New Contact Form Submission",
      html: `
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Phone:</strong> ${body.whatsappNo || "Not provided"}</p>
        <p><strong>Message:</strong> ${body.message}</p>
        
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Return success response
    return new Response(
      JSON.stringify({
        message: "Contact saved and email sent successfully!",
        data: contactData,
      }),
      { status: 201 }
    );
  } catch (error) {
    console.error("Error:", error);

    // If an error occurs in either saving data or sending the email
    return new Response(
      JSON.stringify({
        message: "Failed to save contact or send email.",
        error: error.message || error,
      }),
      { status: 500 }
    );
  }
}
