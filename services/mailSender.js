require('dotenv').config();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    host: process.env.GMAIL_HOST,
    secure: false,
    port: 587,
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS
    },
    tls: {
        rejectUnauthorized: false,
    },
    connectionTimeout: 10000, // 10 secondes
    socketTimeout: 10000 // 10 secondes
})

const mailOptions = {
    from : process.env.GMAIL_USER,
    to : "charle.andre.as@gmail.com",
    subject: "EmaiL test",
    text: " zany ny test ana mail e"
}

transporter.sendMail(mailOptions,(error,info)=>{
    if(error){ 
        console.log(error)
    }else{
        console.log("email envoyé", info.response)
    }
})