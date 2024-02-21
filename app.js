"use strict";
const nodemailer = require("nodemailer");
 require('dotenv').config();



const emailUser = process.env.EMAIL_USER;
const emailPass = process.env.EMAIL_PASS;

async function notifyAdmin(){

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    
    user: "mmedikoshh@gmail.com",
    pass: "rbnmglhrqmfccmfa",
  },
});



  const info = await transporter.sendMail({
    from: "mmedikoshh@gmail.com", 
    to: "220576@astanait.edu.kz", 
    subject: "hello world", 
   
    html: `
    <h1>Hi!</h1>
    `,
  });

  console.log("Message sent: %s", info.messageId);
}

async function main() {
    await notifyAdmin()
}

main().catch(console.error);