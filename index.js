

var katzDeli =[];
var i= 0

function takeANumber(array , name) {
i++;
array.push(name);
var index = array.indexOf(name) + 1;// since index start with 0 , we have to add 1 inorder not to confuse customer
var Welcome = `Welcome, ${name}. You are number ${index} in line.`;
return Welcome;
}

function nowServing (array){

  var currentPerson = array[0];
  var Serving = `Currently serving ${currentPerson}.`;
  var Notserving= "There is nobody waiting to be served!"
  array.splice(0,1);
  --i;
  if(array.length > 0){
    return Serving;

  }
  else {
    return Notserving;
  }
}

function currentLine (array){
 var CurrentQue = [];
 var index ;
 var Greeting;
 var message = "The line is currently empty.";
if (array.length == 0 )
{
  return message;
}
else {

 for (var i = 0; i <array.length ; i++)
    {
      var name = array[i];
      index = array.indexOf(name) + 1;
       var Temp  = ` ${index}. ${name}`;  // attention to details ...need a space before the index indorder to create seperation (took me 20 min)
      CurrentQue.push(Temp);
    }
     Greeting = `The line is currently:${CurrentQue}`;
     return Greeting;

}

}
