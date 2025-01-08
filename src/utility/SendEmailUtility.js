const nodemailer = require('nodemailer');

const SendEmailUtility = async (EmailTo , EmailText , EmailSubject) => {
    let transporter = nodemailer.createTransport({
        service: 'mail.teamrabbil.com',
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
        from: "<h1 style='color:blue;text-align:center;'>Inventory Project MERN</h1>",
        to: EmailTo,
        subject: EmailSubject,
        text: EmailText
    }

    return await transporter.sendMail(mailOptions);
}

module.exports = SendEmailUtility;