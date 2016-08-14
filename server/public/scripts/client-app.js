$(document).ready(function(){


//take input1/input2/mathmatical operator and bundle it into a object
//listener even that sets off a function that bundles the info into a object

//click event listener for addition
$("#number-form").on("click","#num_add",function(event){
  event.preventDefault();
  console.log("this works");
  console.log("this jquery",$(this).firstnumber);
  console.log("javascript",this);
  var numObject = {};

  $.each($("#number-form").serializeArray(),function(i,field){
    numObject[field.name] = field.value;
  });
  numObject.operator = "addition";
  console.log(numObject);
  sendRequest(numObject);
});

//click event listener for subtraction
$("#number-form").on("click","#num_sub",function(event){
  event.preventDefault();
  console.log("subtract works");
  var numObject = {};

  $.each($("#number-form").serializeArray(),function(i,field){
    numObject[field.name] = field.value;
  });
  numObject.operator = "subtraction";
  sendRequest(numObject)
});

//click event listener for multiplication
$("#number-form").on("click","#num_multi",function(event){
  event.preventDefault();
  console.log("Multiplication works");
  var numObject = {};

  $.each($("#number-form").serializeArray(),function(i,field){
    numObject[field.name] = field.value;
  });
  numObject.operator = "multiply";
  sendRequest(numObject)
});

//Click event listener for division
$("#number-form").on("click","#num_divide",function(event){
  event.preventDefault();
  console.log("Division works");
  var numObject = {};

  $.each($("#number-form").serializeArray(),function(i,field){
    numObject[field.name] = field.value;
  });
  numObject.operator = "division";
  sendRequest(numObject)
});




//clear button clears the forms/dom
$("#number-form").on("click","#clear",function(event){
  $("#number_result").empty();
});

//send the object over to the server  and route it depending on what operator it is being called

function sendRequest(numObject){
$.ajax({
  type:'POST',
  url:'/calculator/' + numObject.operator,
  data:numObject,
  success: function(data){
    console.log("post request successful");
    console.log(data);
    appendDom(data);
    console.log(data);
  },
  error: function(){
    console.log("post failed");
  }
});
};





// when result is sent back from server append to the DOM
function appendDom(number){
  $("#number_result").append("<div></div>");
  $el = $("#number_result").children().last();
  $el.append('<p>'+number+'</p>');
}




});
