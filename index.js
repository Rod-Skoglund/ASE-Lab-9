var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();

//Setting View Engine
app.set('view engine', 'pug');

//Setting public folder
app.use(express.static('public'));
app.use(cookieParser());

//Default Route
app.get('/', function(req, res){
    res.render('index')
});

app.get('/login', function(req,res) {
    res.clearCookie('name');
    res.clearCookie('email');
    var thisName = req.query.name;
    var thisEmail = req.query.email

    res.cookie('name', thisName);
    res.cookie('email', thisEmail);
    res.render('cookiedata', {cookieName : thisName, cookieEmail: thisEmail})
});
//Listening to nodeJS Application
app.listen(3000, function(){
   console.log("Listening to port 3000")
});
