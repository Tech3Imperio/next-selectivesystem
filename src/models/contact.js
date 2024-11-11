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
    collection: "contactdbs",
  }
);

const Contact =
  mongoose.models.Contact || mongoose.model("contactdbs", contactSchema);

export default Contact;
