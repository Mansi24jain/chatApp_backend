const http = require('http');
const server = http.createServer();
const socketio = require('socket.io');
const socketserver = socketio(server);
socketserver.listen(3000);
console.log('Server is listening at port: 3000');
socketserver.on('connect', function(socket) {
	console.log(socket.id);
	socket.on('message', function(data) {
		console.log(data);
		socket.broadcast.emit('newclientconnect', data);
	});
	
});
