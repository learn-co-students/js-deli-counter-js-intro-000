var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  var i = katzDeliLine.length;
  katzDeliLine[i] = (name);
  return `Welcome, ${name}. You are number ${++i} in line.`;
}

function nowServing(katzDeliLine) {
  var i = katzDeliLine.length;
  var name = katzDeliLine[0];
  if (i === 0) {
    return "There is nobody waiting to be served!";
  }
  katzDeliLine.shift();
  return `Currently serving ${name}.`;
}

function currentLine(katzDeliLine) {
  var i = katzDeliLine.length;
  var line = "";
  if (i === 0) {
    return "The line is currently empty.";
  }
  for (let x = 1; x < i; ++x) {
    line = line + `${x}. ${katzDeliLine[x - 1]}, `;
  }
  line = line + `${i}. ${katzDeliLine[i - 1]}`;
  return "The line is currently: " + line;
}
