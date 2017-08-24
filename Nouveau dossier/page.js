var cookieParser = require('cookie-parser'); 
var bodyParser = require('body-parser'); 
var expressValidator = require('express-validator'); 



//req.checkBody('data', 'Invalid data')
//.isAlpha();






app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(expressValidator());
app.listen(8080);