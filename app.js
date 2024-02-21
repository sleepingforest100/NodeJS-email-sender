"use strict";
const nodemailer = require("nodemailer");
const fs = require("fs");
require('dotenv').config();

const emailUser = process.env.EMAIL_USER;
const emailPass = process.env.EMAIL_PASS;

async function notifyAdmin() {
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: "mmedikoshh@gmail.com",
          pass: "rbnmglhrqmfccmfa",
        },
    });

    const htmlTemplate = `
        <h1>Received a new message</h1>
        <p>Hello Admin,</p>
        <p>A new message has been received.</p>
    `;

    const info = await transporter.sendMail({
        from: "mmedikoshh@gmail.com",
        to: "220576@astanait.edu.kz",
        subject: "Successful sending of a new message",
        html: htmlTemplate,
        attachments: [
            {
                filename: 'file.txt',
                content: fs.createReadStream('D:/Programs/VSCode Projects/email_sender/file.txt'), // Path to your file
            }
        ]
    });

    console.log("Message sent: %s", info.messageId);
}

async function main() {
    try {
        await notifyAdmin();
    } catch (error) {
        console.error("Error sending email:", error);
    }
}

main();
