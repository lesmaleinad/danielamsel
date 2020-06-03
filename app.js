const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/*', (req, res) => {res.sendFile(__dirname + '/views/index.html')})

app.listen(process.env.PORT||3000, console.log('Starting server on port 3000'))