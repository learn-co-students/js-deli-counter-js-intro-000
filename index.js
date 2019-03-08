
var katzDeliLine = [];

function takeANumber (katzDeliLine, newPerson){
  katzDeliLine.push(newPerson);
  return `Welcome, ${newPerson}. You are number ${Line.length} in line.`;
}

function nowServing (katzDeliLine){
  if (katzDeliLine.length === 0)
    return "There is nobody waiting to be served!";
  else
    return `Currently serving ${katzDeliLine.shift()}.`;
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length === 0)
    return "The line is currently empty.";
  else {
    var lineOut = "The line is currently: ";
    for (var i = 0; i <= katzDeliLine.length-1; i++){
      lineOut += String(i+1) +". " +katzDeliLine[i]+", ";
    }
    return lineOut.slice(0,lineOut.length-2);
  }
}

function line.length

function line.length() {
  return takeANumber1 + takeANumber2 +takeANumber3;
}

  takeANumber(katzDeliLine, "Ada");
  takeANumber(katzDeliLine, "Grace");
  takeANumber(katzDeliLine,  "Kent");
  takeANumber (katzDeliLine, "Matz");


currentLine(katzDeliLine); // "The line is currently: 1. Ada, 2. Grace, 3. Kent"

nowServing(katzDeliLine); // "Currently serving Ada."

currentLine(katzDeliLine); // "The line is currently: 1. Grace, 2. Kent"

takeANumber(katzDeliLine, "Matz"); // "Welcome, Matz. You are number 1 in line."

currentLine(katzDeliLine); // "The line is currently: 1. Grace, 2. Kent, 3. Matz"

nowServing(katzDeliLine); // "Currently serving Grace."

currentLine(katzDeliLine); // "The line is currently: 1. Kent, 2. Matz"
