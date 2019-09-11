const nodemailer = require('nodemailer');

class EmailService {

    sendNotifications(emails) {
        let transport = nodemailer.createTransport({
            host: 'smtp.mailtrap.io',
            port: 2525,
            auth: {
               user: '1b8cb9b2c2a255',
               pass: 'e3eb115502bc04'
            }
        });

        const message = {
            from: 'elonmusk@tesla.com', // Sender address
            to: 'to@email.com',         // List of recipients
            subject: 'Design Your Model S | Tesla', // Subject line
            text: 'Have the most fun you can in a car. Get your Tesla today!' // Plain text body
        };

        transport.sendMail(message, function(err, info) {
            if (err) {
              console.log(err)
            } else {
              console.log(info);
            }
        });
    }
   
}

module.exports = EmailService