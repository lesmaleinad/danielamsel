const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

require('dotenv').config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

app.get('/pathfinder', (req, res) => {
	res.sendFile(__dirname + '/public/pathfinder/path.html');
});

app.get('/*', (req, res) => {
	res.sendFile(__dirname + '/views/index.html');
});

app.post('/sendemail', (req, res) => {
	const { email: replyTo, name, subject, content: text } = req.body;
	const msg = {
		to: process.env.EMAIL_USER,
		from: process.env.EMAIL_USER,
		replyTo,
		subject: `${name}: ${subject}`,
		text
	};

	console.log(msg);

	nodemailer
		.createTransport({
			port: process.env.EMIAL_PORT,
			host: process.env.EMAIL_HOST,
			auth: {
				user: process.env.EMAIL_USER,
				pass: process.env.EMAIL_PASS
			}
		})
		.sendMail(msg, (err, info) => {
			if (err) {
				res.send(err.message);
			} else {
				console.log(info);
				res.redirect('/contact');
			}
		});
});

app.listen(
	process.env.PORT || 3000,
	console.log(`Starting server on port ${process.env.PORT || 3000}`)
);
