"use strict";
const nodemailer = require("nodemailer");
const fs = require("fs");
 require('dotenv').config();



const emailUser = process.env.EMAIL_USER;
const emailPass = process.env.EMAIL_PASS;

async function notifyAdmin(){

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    
    user: userEmail,
    pass: pass,
  },
});



  const info = await transporter.sendMail({
    from: userEmail, 
    to: userEmail, 
    subject: "Successful sending of message", 
   
    html: `
    <h1>Received message</h1>
    `,

    attachments: [
      {
          filename: 'file.txt',
          content: fs.createReadStream('paths'), // Path to your file
      }
  ]
  });

  console.log("Message sent: %s", info.messageId);
}

async function main() {
    await notifyAdmin()
}

main().catch(console.error);