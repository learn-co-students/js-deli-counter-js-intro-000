function takeANumber (katzDeliLine, name){
  var position = katzDeliLine.length+1
  katzDeliLine.push(name)
return "Welcome, " + name +". You are number "+ position +" in line."

}

function nowServing (katzDeliLine){
var name;

if(katzDeliLine.length == 0){
  return "There is nobody waiting to be served!"
}

name = katzDeliLine.shift()
return ("Currently serving " + name + ".")
}


function currentLine(line) {
  var lineNum = [];
  if (line.length == 0) {
    return "The line is currently empty.";
  }
  for (var i = 0; i < line.length; i++) {
    lineNum.push(` ${i+1}. ${line[i]}`);
 }
  return "The line is currently:" + lineNum;

 }
