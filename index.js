var katzDeliLine = [];

function takeANumber (katzDeliLine, newPerson) {
  katzDeliLine.push(newPerson);
  return "Welcome, " + newPerson + ". You are number " + katzDeliLine.length + " in line.";
}

function nowServing (katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return "Currently serving " + katzDeliLine.shift() + ".";
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine (katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var lineMessage = "The line is currently:";
    for (var i=0; i < katzDeliLine.length; i++) {
      lineMessage += " " + (i+1) + ". " + katzDeliLine[i] + ",";
    }
    lineMessage = lineMessage.replace(/.\s*$/, "");
    return lineMessage;
  } else {
    return "The line is currently empty."
  }
}
