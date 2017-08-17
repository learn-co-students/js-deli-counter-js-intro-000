var katzDeli = [];

function takeANumber (katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing (line) {
  while (line.length > 0) {
    return `Currently serving ${line.shift()}.`;
  }
    return "There is nobody waiting to be served!"
}

function currentLine(line) {
  if (line.length > 0) {
    var lineArr = [];

    for (let i = 0; i < line.length; i++) {
      lineArr.push(` ${i+1}. ${line[i]}`);
    }
    return `The line is currently:${lineArr}`;
  } else {
    return "The line is currently empty."
  }
}
