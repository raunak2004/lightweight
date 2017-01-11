var express = require('express');

var hi = 'hello'
var app = express();
app.use(express.static('public'));

app.listen(8080, function(err){
	console.log('server started ' + err);	
});

if (true) {
    console.log('hi');
}

app.get('/', function(req, res){
    
    res.send("Hello world");
});
