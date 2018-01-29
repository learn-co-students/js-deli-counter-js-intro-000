var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return `Currently serving ${katzDeliLine.splice(0, 1)}.`;
  }
}

function currentLine(katzDeliLine) {
  var lineString = `The line is currently: 1. ${katzDeliLine[0]}`;
  if(katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else {
    for(var i = 1; i < katzDeliLine.length; i++) {
      lineString += `, ${i + 1}. ${katzDeliLine[i]}`;
    }
    return lineString;
  }
}
