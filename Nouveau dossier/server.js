var http = require('http'); 
var url = require('url');
var querystring = require('querystring');

var server = http.createServer(function(req,
	res) { 

var params = 
querystring.parse(url.parse(req.url).query);

res.writeHead(200 , {"Content-Type":
	"text-plain"});
if ('prenom' in params && 'nom' in params) {
	res.write('parameters are '+ params['prenom']
		+' ' + params['nom']);
}
else { 
 res.write('nothing'); 
 }	

  	 
res.end();
}); 
server.listen(8080);