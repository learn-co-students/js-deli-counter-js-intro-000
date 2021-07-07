var katzDeliLine = []

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(`${name}`);
  return (`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`);
}

function nowServing(line) {
  var name = line.shift();
  if (line.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    return (`Currently serving ${name}.`)
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  }

  var lineup = `The line is currently: 1. ${katzDeliLine[0]}`;
  for (let i = 1; i < katzDeliLine.length; i++) {
  lineup += `, ${i+1}. ${katzDeliLine[i]}`
    }
return lineup
}
