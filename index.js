function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}

function nowServing(katzDeliLine) {
  return katzDeliLine.length > 0
    ? `Currently serving ${katzDeliLine.shift()}.`
    : "There is nobody waiting to be served!";
}



function currentLine(katzDeliLine) {
  var line = [];
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else {
    for (var i = 0; i < katzDeliLine.length; i++) {
      line += i + 1 + ". " + katzDeliLine[i] + ", ";
    }
    line = line.slice(0, line.length - 2);
    return "The line is currently: " + line;
  }
}
