var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (!katzDeliLine.length) {
    return "There is nobody waiting to be served!";
  }
  var name = katzDeliLine.shift();
  return `Currently serving ${name}.`;
}

function currentLine(katzDeliLine) {
  if (!katzDeliLine.length) {
    return "The line is currently empty.";
  }
  var line = `The line is currently: 1. ${katzDeliLine[0]}`;
  for (var i = 1; i < katzDeliLine.length; i++) {
    line += `, ${i + 1}. ${katzDeliLine[i]}`;
  }
  return line;
}
