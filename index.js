function takeANumber(currentLine,newPerson){
currentLine.push(newPerson)
var i = 0;
return (`Welcome, ${newPerson}. You are number ${currentLine.length} in line.`);
}

function nowServing(katzDeliLine){
if (katzDeliLine.length>0){
  var name = katzDeliLine.shift();
  return `Currently serving ${name}.`
} else {
  return "There is nobody waiting to be served!";
}
}

function currentLine (katzDeliLine){
if (katzDeliLine.length>0){
  for (var i = 0; i < katzDeliLine.length; i++) {
    var count = (i +1)
    return `The line is currently: ${count}. ${katzDeliLine[i]}`}
} else {
  return "The line is currently empty."
}
}
