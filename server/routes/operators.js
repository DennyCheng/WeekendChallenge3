var express = require('express');
var router = express.Router();
var numObject;
var computedValue;

router.get('/',function(req,res){
  console.log("i'm in the get return");
  res.send(cats);
});

router.post('/addition', function(req, res) {
  console.log("addition",req.body);
  numObject = req.body;
  computedValue = ('request: ',Number(numObject.x )+ Number(numObject.y ));
  res.send(computedValue.toString());
});

router.post('/subtraction',function(req,res){
  console.log("subtraction",req.body)
  numObject = req.body;
  computedValue = ('request:',Number(numObject.x)-Number(numObject.y));
  res.send(computedValue.toString());
});

router.post('/multiply',function(req,res){
  console.log("subtraction",req.body)
  numObject = req.body;
  computedValue = ('request:',Number(numObject.x)*Number(numObject.y));
  res.send(computedValue.toString());
});

router.post('/division',function(req,res){
  console.log("subtraction",req.body)
  numObject = req.body;
  computedValue = ('request:',Number(numObject.x)/Number(numObject.y));
  res.send(computedValue.toString());
});


module.exports = router;
