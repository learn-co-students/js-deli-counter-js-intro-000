var katzDeli = [];
var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.";
}


function nowServing(katzDeliLine){
var message;
  if(katzDeliLine.length === 0){
    message = "There is nobody waiting to be served!"
  } else if(katzDeliLine.length > 0){
    message = "Currently serving " + katzDeliLine.shift() + ".";

  }
      return message;

}

function currentLine(array){
  var newArray = [];
  var message;
  debugger;
  for(var index = 0; index < array.length; index++){
    newArray += [index + 1] + ". " + array[index] + ", ";
  }
  if(array.length === 0){
    message = "The line is currently empty.  "
  } else {
     message = "The line is currently: " + newArray;
  }
  return message.substring(0, message.length-2);
}
