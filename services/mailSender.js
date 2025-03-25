const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    secure: false,
    port: 587,
    auth: {
        user: "prescripteur_01@outlook.com",
        pass: "ngjhemkpvqnhhafe"
    },
    tls: {
        rejectUnauthorized: false // Désactive la vérification du certificat
    }
})

const mailOptions = {
    from : "prescripteur_01@outlook.com",
    to : ["charle_andre_as@outlook.com"],
    subject: "Emai test",
    text: " zany ny test ana mail e"
}

transporter.sendMail(mailOptions,(error,info)=>{
    if(error){ 
        console.log(error)
    }else{
        console.log("email envoyé", info.response)
    }
})

// const sendMail = async(transporter,mailOptions) =>{ 
//     try{
//         await transporter.sendMail(mailOptions);
//         console.log("mail sent ");
//     } catch( error){console.error(error)}
// }

// sendMail(transporter,mailOptions);