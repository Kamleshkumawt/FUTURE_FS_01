import nodemailer from 'nodemailer'


const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,      // e.g., smtp.gmail.com
  port: process.env.SMTP_PORT,      // 587 or 465
  secure: process.env.SMTP_SECURE === "true", // true for 465, false for 587
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export const sendContactEmail = async ({ name, email, message }) => {
  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: process.env.CONTACT_RECEIVER_EMAIL,
    subject: `New Contact Message from ${name}`,
    text: message,
    html: `<p><b>Name:</b> ${name}</p>
           <p><b>Email:</b> ${email}</p>
           <p><b>Message:</b> ${message}</p>`,
  };

  await transporter.sendMail(mailOptions);
};
