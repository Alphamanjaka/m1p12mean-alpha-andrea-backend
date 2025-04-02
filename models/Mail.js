require('dotenv').config();
const nodemailer = require("nodemailer");

class MailSender {

    constructor(recipient, subject) {
        this.recipient = recipient;
        this.subject = subject;
    }

    createTransporter() {
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
        return transporter;
    }


    createMailBody(htmlBody) {
        const template = "<html lang=\"en\">" +
            "<head>" +
            "  <meta charset=\"UTF-8\">  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">  " +
            "   <title>Beauty-full</title>  " +
            "<style>    .container{      display: flex;      flex-direction: column;      justify-content: center;      align-items: center;    }    .element{      padding: 40px;      background-color: #fff;      border-radius: 10px;      border: 2px solid #00796b;      box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.1);    }  " +
            "</style>" +
            "</head><body>  " +
            "<div class=\"container\">    <div class=\"element\">      <h1 style=\"color: #00796b;\">Igarage</h1>" +
            "<p>Bienvenue chez Igarage, votre garage de confiance!</p>"
            + htmlBody +
            "<br><br><br><br><br>----------------------<br><p>Merci d'avoir choisi Igarage.</p> "+
            "<p>Cordialement,<br>        L'équipe de Igarage</p>    </div>  </div></body></html>";
        return template;
    }

    async sendMail(htmlBody) {
        const transporter = this.createTransporter();
        const info = await transporter.sendMail({
            from: `Igarage <${process.env.GMAIL_USER}>`, // sender address
            to: this.recipient,
            subject: this.subject, // Subject line
            html: this.createMailBody(htmlBody), // html body
        });
        return info;
    }

}
module.exports = MailSender;