var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.";
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var name = katzDeliLine[0];
    katzDeliLine.splice(0,1);
    return "Currently serving " + name + ".";
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else {
    var line = "The line is currently: ";
    katzDeliLine.forEach(function(lineName, index) {
      var number = index + 1;
      if (index === 0) {
        line = line + number + ". " + lineName;
      } else {
        line = line + ", " + number + ". " + lineName;
      }
    });
    return line;
  }
}
