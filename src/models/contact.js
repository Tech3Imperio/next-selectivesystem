import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    whatsappNo: { type: Number, required: true },
    message: { type: String, required: true },
  },
  {
    timestamps: true,
    collection: "contactdbs", // Your MongoDB collection name
  }
);

// Use "Contact" as the model name instead of "contactdbs"
const Contact =
  mongoose.models.Contact || mongoose.model("Contact", contactSchema); // Ensure the model name is consistent

export default Contact;
