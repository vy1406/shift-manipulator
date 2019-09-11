const nodemailer = require('nodemailer');

class EmailService {

    sendNotifications(emails, adminEmail, dates) {

        let transport = nodemailer.createTransport({
            host: 'smtp.mailtrap.io',
            port: 2525,
            auth: {
               user: '1b8cb9b2c2a255',
               pass: 'e3eb115502bc04'
            }
        });

        let htmlText = this.createHtmlText(dates)

        let message = {
            from: adminEmail, // Sender address
            to: emails,         // List of recipients
            subject: 'Design Your Model S | Tesla', // Subject line
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
        let textDates = '<p>From ' + this.formatDate(dateFrom) + ' To ' + this.formatDate(dateTo) + '</p>'
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