const nodemailer = require("nodemailer");
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for port 465, false for other ports
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD,
  },
});

const replaceContent = (content,creds)=>{
    console.log(creds);
    let allKeysAttr = Object.keys(creds);
    allKeysAttr.forEach(key=>{
        content = content.replace(`#${key}`,creds[key]);
    })
    console.log(content);
    return content;
}

// async..await is not allowed in global scope, must use a wrapper
async function EmailHelper(templateName,recieverEmail,creds) {
    try{
        const templatePath = path.join(__dirname,"email_templates",templateName);
        const content = await fs.promises.readFile(templatePath,"utf-8");
        const emailDetails = {
            to:recieverEmail,
            from:"bookmyshow-capstone@gmail.com",
            subject:"OTP for BookMyShow",
            text : `Hi ${creds.name} this is your OTP for BookMyShow ${creds.otp}`,
            html: replaceContent(content,creds)
        }
        // await transporter.sendMail(emailDetails);
    }catch(err){
        console.log(err);
    }
}

module.exports = EmailHelper;