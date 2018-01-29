function takeANumber(katzDeliLine, personName) {
  katzDeliLine.push(personName);
  return `Welcome, ${personName}. You are number ` + katzDeliLine.length + ` in line.`;

}

function nowServing(katzDeliLine) {
  var firstInLine = katzDeliLine[0];

  if (katzDeliLine.length > 0) {
    katzDeliLine.shift();
    return `Currently serving ${firstInLine}.`;
  } else {
    return "There is nobody waiting to be served!";
  }

}

function currentLine(katzDeliLine) {
var msg = "The line is currently: ";
var lastPerson = katzDeliLine.length + ". " + katzDeliLine[katzDeliLine.length - 1];
var people = function() {
  for (var i = 0; i < katzDeliLine.length - 1; i++) {
  msg += `${i+1}` + "." + " " + katzDeliLine[i] + ", ";
  }
 };
 if (katzDeliLine.length > 0) {
   people();
   return `${msg += lastPerson}`;
 } else {
   return "The line is currently empty.";
 }

}
