function takeANumber(katzDeliLine, name) {
  // var katzDeliLine = katzDeli;
  var newLine = katzDeliLine.push(name);
  var newNamePosition = katzDeliLine.length
  var greeting = `Welcome, ${name}. You are number ${newNamePosition} in line.`;
  return greeting;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var nextPersonInLine = katzDeliLine[0]
    katzDeliLine.shift();
    return `Currently serving ${nextPersonInLine}.`;
  }
  else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine) {

  if (katzDeliLine.length > 0) {
    var lineStatus = "The line is currently: ";
    var people = "";

    // for (var i = 0; i < katzDeliLine.length - 1; i++) {
    for (var i = 0; i < katzDeliLine.length; i++) {
      var position = i + 1;
      var name = katzDeliLine[i];
      var currentPerson = `${position}. ${name}`;
      if (i < katzDeliLine.length - 1) {
          people = people + currentPerson + ", ";
      }
      else {
          people = people + currentPerson;
      }
    }
    var currentLineStatus = lineStatus + people;
  }
  else {
    var currentLineStatus = "The line is currently empty."
  }
  return currentLineStatus;
}
