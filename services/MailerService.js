const Mail = require('../models/Mail');
    const sendSuccessRegistrationNotification = async (user) => {
        let recipient = user.email;

        const htmlbody = "<h2>Votre inscription est réussie</h2>" +
            "<p>L'équipe de <strong>igarage</strong> vous souhaites le bienvenu.</p>" +
            "A bientôt";

        const mail = new Mail(recipient, 'Bienvenu chez igarage')
        mail.sendMail(htmlbody);
        console.log("email sent");

    }


module.exports =  {sendSuccessRegistrationNotification};