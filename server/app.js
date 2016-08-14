var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var calculate = require('./routes/operators');

app.use(bodyParser.urlencoded({extended:true}));


//routes for requests
// app.use('/add',addition);
app.use('/calculator',calculate)

app.get('/*',function(req,res){
  //catches all other get reqests
    var file = req.params[0] || '/views/index.html'
  res.sendFile(path.join(__dirname,'./public',file));
});

//setting the server port at 5000
app.set('port', process.env.PORT || 5000);

app.listen(app.get('port'),function(){
  console.log("Server is running on port",app.get('port'));
});
