
var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
      return `Currently serving ${katzDeliLine.shift()}.`;
  }
}

function currentLine(line) {
  let array = [];
  for (let i = 0; i < line.length; i++) {
    if (line.length > 0) {
      array.push(`The line is currently: 1. ${line[0]}, 2. ${line[1]}, 3. ${line[2]}`);
      return array[i];
    }
  }
  return "The line is currently empty.";
}
