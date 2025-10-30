import { Router } from "express";
import * as userContactController from "../controllers/userContact.controller.js";
import { body } from "express-validator";

const router = Router();

router.post(
  "/createContact",[
  body("name")
    .isString()
    .isLength({ min: 3 })
    .withMessage("Name must be at least 3 characters long"),
  body("email").isEmail().withMessage("Invalid email format"),
  body("message")
    .isString()
    .isLength({ min: 5 })
    .withMessage("Message must be at least 5 characters long"),
  ],
  userContactController.createContact
);

export default router;
