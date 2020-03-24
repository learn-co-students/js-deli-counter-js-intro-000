function takeANumber (currentLine, newName) {
  let i = 0
  for (i = 0; i <= 0; i+= 1) {
    currentLine.push(newName)
  }
  return `Welcome, ${newName}.` + ` You are number ${currentLine.length} in line.`
}

function nowServing (katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
} else {
    return `Currently serving ${katzDeliLine.shift()}.`
 }
}

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty."
} else {
    return `The line is currently: 1. ${line[0]}, 2. ${line[1]}, 3. ${line[2]}`
 }
}
