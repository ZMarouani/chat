var express = require('express'); 
var session = require('cookie-session');

var bodyParser = require('body-parser');
//var path = require('path');
var urlencodedparser = bodyParser.urlencoded({
	extended: false});
//app.use(parser.urlencoded({extended:false}))
//app.use(parser.json())

var app = express(); 

app.set('view engine', 'ejs') ; 


app.use(session({secret: 'todotopsecret'}))

//app.??
.use(function(req,res,next){
	//res.locals.userValue = null;
	if (typeof(req.session.todolist) ==
		'undefined'){req.session.todolist = [];
	}
	next(); 
})

//app.set('view engine', 'ejs');
//app.set('views', path.join(__dirname,'./views'));

.get('/',function(req,res){
	res.render('chambre.ejs',{
		todolist:req.session.todolist});
		
	console.log('user accessing home page');
})

.get('/delete/:id', function(req,res){
	if (req.params.id != '') {
		req.session.todolist.splice(req.params.id,1)
	}
	res.redirect('/');
})

.post('/add' , urlencodedparser ,function(req,res){
	if (req.body.newtodo != '') {
		req.session.todolist.push(req.body.newtodo);
	}
res.redirect('/');

	})
.use(function(req,res,next){
	res.redirect('/');
})


.listen(8080, function(){
	console.log('server running on port 8080');
});















