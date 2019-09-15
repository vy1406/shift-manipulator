const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

class EmailService {

    sendNotifications(emails, adminEmail, dates) {

        let transport = nodemailer.createTransport({
            host: 'smtp.mailtrap.io',
            port: 2525,
            auth: {
               user: process.env.USER,
               pass: process.env.PASS
            }
        });
        console.log("ADD PROCESS env variables to heroku")
        let htmlText = this.createHtmlText(dates)

        let message = {
            from: adminEmail, // Sender address
            to: emails,         // List of recipients
            subject: 'Options Request', // Subject line
            html: htmlText
        };

        transport.sendMail(message, function(err, info) {
            if (err) {
              console.log(err)
            } else {
              console.log(info);
            }
        });
    }

    createHtmlText(dates) {

        let dateFrom = new Date(dates.dateFrom)
        let dateTo = new Date(dates.dateTo)
        let header = '<h1>Hey guys!</h1>' 
        let textDates = '<p>Options for a week From <b>' + this.formatDate(dateFrom) + '</b> To <b>' + this.formatDate(dateTo) + '</b></p>'
        let innerText = '<p>Just reminding you to send your week options</p>'
        let ps = 'P.S. You can bribe me with dark chocolate to get some good shifts.'
        let result = header + textDates + innerText + ps
        return result
    }

    formatDate(date){

            const monthNames = [
                "Jan", "Feb", "Mar",
                "Apl", "May", "Jun", "Jul",
                "Aug", "Sep", "Oct",
                "Nov", "Dec"
            ];
            const weekNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
            let day = date.getDate()
            let weekIndex = date.getDay()
            let monthIndex = date.getMonth()
            let year = date.getYear() + 1900

            let result = monthNames[monthIndex] + ' ' + day + ', ' + year;
            return result
    }
}

module.exports = EmailService