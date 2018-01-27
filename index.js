var katzDeli = [];
var katzDeliLine = new Array();
function takeANumber (katzDeliLine, name) {
  var numberInLine = katzDeliLine.length + 1;
  katzDeliLine.push(name);
  var output = "Welcome, " + name + ". You are number " + numberInLine + " in line.";
  return output;
}

function nowServing (katzDeliLine) {
  var number = katzDeliLine.length;
  var person = katzDeliLine.shift();
  if (number > 0) {
    return "Currently serving " + person + ".";
  }
  else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length == 0) {
    return "The line is currently empty.";
  }
  else {
    for (var i = 0; i < katzDeliLine.length; i++) {
      var theNumber = i + 1;
      katzDeli.push(" " + theNumber + ". " + katzDeliLine[i]);
//      [...katzDeli, console.log(theNumber) + ". " + katzDeliLine[i] + ", "];
  //    [...katzDeliLine, "Hi"];
//      [...katzDeli, "5"];
    }
    return "The line is currently:" + katzDeli;
  }
}
