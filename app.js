const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const sgMail = require('@sendgrid/mail');
const nodemailer = require('nodemailer')

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));

let transporter = nodemailer.createTransport({
    port: '587',
    host: 'smtp-mail.outlook.com',
    auth: {
        user: 'lesmaleinad@hotmail.com',
        pass: process.env.EMAIL_PASS
    }
});

app.get('/*', (req, res) => {res.sendFile(__dirname + '/views/index.html')})

app.post('/sendemail', (req, res) => {
        const {email: replyTo, name, subject, content: text} = req.body;
        const msg = {
            to: 'lesmaleinad@hotmail.com',
            from: 'lesmaleinad@hotmail.com',
            replyTo,
            subject: `${name}: ${subject}`,
            text
        };

        console.log(msg)

        transporter.sendMail(msg, (err, info) => {
            if (err){
                console.log(err)
            } else {
                console.log(info)
            }}
        )

        res.redirect('/contact')
})

app.listen(process.env.PORT||3000, console.log('Starting server on port 3000'))