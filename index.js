var katzDeli = [];
var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."
}
function nowServing(name) {
  let i = 0;
  while (i < name.length) {
    i++;
  }
  if (name.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else
  return (`Currently serving ${name.shift()}.`);
 }

function currentLine(katzDeliLine) {
  var line = [];
if (katzDeliLine.length === 0) {
  return "The line is currently empty."

} else {
  for(var i = 0; i < katzDeliLine.length; i++) {
    line+= (i +1) +". " +katzDeliLine[i] + ", "
  }
  line = line.slice(0, line.length-2)
  return "The line is currently: " + line

}
}
