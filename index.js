var katzDeli = [];
function takeANumber(katzDeliLine, newPerson) {
  katzDeliLine.push(newPerson)
  return `Welcome, ${newPerson}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0)  {
    return `Currently serving ${katzDeliLine.shift()}.`
  } else if (katzDeliLine = []) {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line) {
  if (line.length >0) {
    return `The line is currently: 1. ${line[0]}, 2. ${line[1]}, 3. ${line[2]}`
  } else if (line = []) {
    return "The line is currently empty."
  }
}
