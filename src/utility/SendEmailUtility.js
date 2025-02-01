const nodemailer = require('nodemailer');

const SendEmailUtility = async (EmailTo , EmailText , EmailSubject) => {
    let transporter = nodemailer.createTransport({
        service: 'fayaz7rg@gmail.com',
        port: 25,
        secure: false,
        auth: {
            user: process.env.EMAIL_ADDRESS,
            pass: process.env.EMAIL_PASSWORD
        },
        tls: {
            rejectUnauthorized: false
        },
    });

    let mailOptions = {
        from: "Inventory Project MERN",
        to: EmailTo,
        subject: EmailSubject,
        html: EmailText
    }

    return await transporter.sendMail(mailOptions);
}

module.exports = SendEmailUtility;