function takeANumber(katzDeliLine, person) {
  katzDeliLine.push(person);
  return `Welcome, ${person}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  return katzDeliLine.length > 0 ?
  `Currently serving ${katzDeliLine.shift()}.`:
  "There is nobody waiting to be served!";
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var line = "The line is currently: ";
    var i = 0;
    for (; i < katzDeliLine.length - 1; i++) {
      line += "" + (i + 1) + ". " + katzDeliLine[i] + ", ";
    }
    line += (i + 1) + ". " + katzDeliLine[katzDeliLine.length - 1];
    return line;
  } else {
    return "The line is currently empty."
  }
}
