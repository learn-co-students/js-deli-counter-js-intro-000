
var katzDeliLine = [];
function takeANumber (katzDeliLine, name){
  var position = katzDeliLine.length+1
  katzDeliLine.push(name)
return "Welcome, " + name +". You are number "+ position +" in line."

 }
function nowServing(katzDeliLine) {
if(katzDeliLine == 0){
return 'There is nobody waiting to be served!';
}

var newCustomer = katzDeliLine.shift()// shift array of people
return "Currently serving "+ newCustomer + ".";
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length == 0){
    return "The line is currently empty.";
  }

var line = [];
for(var i = 0; i < katzDeliLine.length; i++){
  line.push(i + 1+ ". " + katzDeliLine[i] )
}
return "The line is currently: " + line.join(", ");
}
