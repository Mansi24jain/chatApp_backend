const socketclient = require('socket.io-client');
const socket = socketclient.connect('http://localhost:3000');
const readline = require('readline');
const reader = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
var name;
reader.question('What is the username? ', function(username) {
	name = username;
	var message = `${username} has joined.`;
	socket.emit('message', message);
});
reader.on('line', function(data) {
	var message = `${name}:${data}`;
	socket.emit('message', message);
});
socket.on('newclientconnect', function(data) {
	console.log(data);
});
