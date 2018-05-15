'use strict';
const nodemailer = require('nodemailer');
var inlineBase64 = require('nodemailer-plugin-inline-base64');

const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))

// Generate test SMTP service account from ethereal.email
// Only needed if you don't have a real mail account for testing
nodemailer.createTestAccount((err, account) => {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'smtp-mail.outlook.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: "photokiosk@outlook.com", // generated ethereal user
            pass: "Elephantsredolantgrimacefear" // generated ethereal password
        },
        tls: {
        ciphers:'SSLv3'
    }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"bing photobooth" <photokiosk@outlook.com>', // sender address
        to: 'gallagherj7@gmail.com', // list of receivers need var
        subject: 'Your photobooth photo', // Subject line
        text: 'Thanks for stopping by!', // plain text body
        html: '<b>Hello world?</b>' // html body
    };

    //base64
    transporter.use('compile', inlineBase64({cidPrefix: 'pb_'}));

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });
});