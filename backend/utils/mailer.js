const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

async function sendCredentialsEmail(to, name, password) {
  
  const html = `
    <h2>Welcome, ${name}</h2>
    <p>You’ve been added to the Security Control Platform.</p>
    <p><strong>Login Email:</strong> ${to}</p>
    <p><strong>Temporary Password:</strong> ${password}</p>
    <p>Please log in and change your password immediately.</p>
  `;

  return transporter.sendMail({
    from: `"Security Platform" <${process.env.EMAIL_USER}>`,
    to,
    subject: "Your Login Credentials",
    html,
  });
}

module.exports = { sendCredentialsEmail };
