import UserContactModel from "../models/userContact.model.js";
import { validationResult } from "express-validator";
import { sendContactEmail } from "../services/email.service.js";

export const createContact = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const existingContact = await UserContactModel.findOne({
      name: name,
      email: email,
      message: message,
    });

    if (existingContact) {
      return res.status(400).json({ message: "No need to send it again!" });
    }

    const newContact = await UserContactModel.create({ name, email, message });


    // Send email
    await sendContactEmail({ name, email, message });

    res
      .status(201)
      .json({ success: true, message: "Thank you for reaching out! Your contact has been send successfully" });
  } catch (error) {
    res
      .status(500)
      .json({
        success: false,
        error: "Failed to create contact",
        message: error.message,
      });
  }
};
