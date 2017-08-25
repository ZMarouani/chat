
var app = require('express')(); 
var server = require('http').Server(app);
var io = require ('socket.io')(server); 

var ent = require ('ent');
//express.set('view engine' , 'view.js') ; 

var fs = require ('fs')

app.get('/' , function(req,res)
	{
     res.sendFile(__dirname + '/index.html');
	});



io.sockets.on('connection',function(socket , psudo){

		socket.on('new client', function(pseudo){
			pseudo =ent.encode(pseudo);
			socket.pseudo = pseudo;
			socket.broadcast.emit('new client' ,pseudo)
		});

		socket.on('message', function (message) {
			message = ent.encode(message);
			socket.broadcast.emit('message', {pseudo : socket.pseudo , message: message});

		});

		/*console.log('client has been connected');
		socket.emit('message', function(message){
			console.log('test');
			console.log('message:  ' + message);
		}); */ 

 
});

server.listen(8080);

