function takeANumber(katzDeliLine, name) {
  var lineLength = katzDeliLine.length;
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${lineLength + 1} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var serving = katzDeliLine.shift();
    return `Currently serving ${serving}.`;
  };
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else {
    var string = "The line is currently: ";
    for (let n = 1; n <= katzDeliLine.length; n++) {
      string = string + `${n}. ${katzDeliLine[n-1]}`;
      if (n < katzDeliLine.length) {
        string = string + ", "};
      }
    return string;
  }
}
