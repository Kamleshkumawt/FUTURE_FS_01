import UserContactModel from "../models/userContact.model.js";
import { validationResult } from "express-validator";
import { sendContactEmail } from "../services/email.service.js";

export const createContact = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  // const start = Date.now();

  try {
    const { name, email, message } = req.body;
    // console.log("Request started");

    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const existingContact = await UserContactModel.findOne({
      name: name,
      email: email,
      message: message,
    });
    // console.log("findOne took", Date.now() - start, "ms");

    if (existingContact) {
      return res.status(400).json({ message: "No need to send it again!" });
    }

    const newContact = await UserContactModel.create({ name, email, message });
    // console.log("create took", Date.now() - start, "ms total so far");


    // Send email await remove because 6.5 s only for this function
    sendContactEmail({ name, email, message });
    // console.log("email took", Date.now() - start, "ms total so far");

    res
      .status(201)
      .json({ success: true, message: "Thank you for reaching out! Your contact has been send successfully" });
      console.log("Total time:", Date.now() - start, "ms");
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
