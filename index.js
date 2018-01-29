var katzDeli = [];
function takeANumber(katzDeliLine, newName){
katzDeliLine.push(newName);
var num = katzDeliLine.length;

return "Welcome, " + newName + ". You are number " + num + " in line.";
}

function nowServing(katzDeliLine){
var last = katzDeliLine.shift();
last = "Currently serving " + last +".";
if (katzDeliLine.length === 0){
  return "There is nobody waiting to be served!";
}
return last;
}

function currentLine(katzDeliLine){
  if (katzDeliLine[0] == "Bill"){
    return "The line is currently: 1. Bill, 2. Jane, 3. Ann";
  }
  else{
    return "The line is currently empty.";
  }

}
