var katzDeliLine = [];
function takeANumber(katzDeliLine, newPerson) {
  katzDeliLine.push(newPerson);
  return `Welcome, ${newPerson}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
 if(katzDeliLine.length > 0){
   var name = katzDeliLine[0];
   katzDeliLine.shift();
   return `Currently serving ${name}.`;
 }
return "There is nobody waiting to be served!"
}

function currentLine(katzDeliLine){
  var string = "The line is currently:"
  if(katzDeliLine.length > 1){
   for (var i = 0; i <katzDeliLine.length; i++){
    string = string + ` ${i + 1}. ${katzDeliLine[i]},`

  } return string.slice(0, string.length-1);
} else
  {
    return "The line is currently empty."
  }
}
