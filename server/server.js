var express = require('express');
var app = express();
var path = require('path');
var messageController = require('./messages/messageController');
var authController = require('./utils/authController');
var bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, './../client')));
app.use(bodyParser());

// place routes here
app.get('/messages', messageController.getMessages);
app.post('/messages', authController, messageController.postMessage);




app.listen(3000);

module.exports = app;