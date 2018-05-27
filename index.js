function takeANumber (deliLine,custName) {
  deliLine.push (custName)
  return `Welcome, ${custName}. You are number ${deliLine.indexOf(custName) + 1} in line.`
}

function nowServing (array) {
  if (!array.length) {
    return "There is nobody waiting to be served!"
  }
  return `Currently serving ${array.shift()}.`
}

function currentLine(line) {
  if (!line.length) {
    return "The line is currently empty."
  }
  const numbersAndNames = []
  for (let i = 0; i < line.length; i++) {
    numbersAndNames.push(`${i + 1}. ${line[i]}`)}
  return `The line is currently: ${numbersAndNames.join(", ")}`
}
