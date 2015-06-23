'use strict';

var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');
var Firebase = require("firebase");
var http = require("http");
var client = require('twilio')('ACbb463f9df1e8c9d04e0f308885aa5181', 'MY_SECRET_KEY');

var portNum = 3000;
app.listen(portNum, function () {
	console.log('Hiding a treasure in port:', portNum);
})

app.use(cors());
app.use(bodyParser.json());

app.use(express.static(__dirname + '/'));

var fireRef = new Firebase('https://textspport.firebaseio.com/');



app.post('/support/messages/', function (req, res) {
	console.log(req.body);
	var message = req.body;

	client.messages.create({
	    body: message.body,
	    to: message.to,
	    from: message.from
	}, function(err, message) {
	    if (err) {
	      return console.error(err);
	    }

	    console.log(message.sid);

	    // what's going on here?
	    //process.stdout.write(message.sid);
	});

	res.json({success: true})

})