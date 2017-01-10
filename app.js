var express = require('express');

var hi = 'hello'
var app = express();

app.listen(3000, function(err){
	console.log('server started ' + err);	
});

if (true) {
    console.log('hi');
}
console.log(hi);