function takeANumber(num, name) {
  num.push(name)
  return `Welcome, ${name}. You are number ${num.length} in line.`
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length > 0) {
    return `Currently serving ${katzDeliLine.shift()}.`
  }
    return "There is nobody waiting to be served!"
}

function currentLine(line) {
  if (!line.length) {
    return "The line is currently empty."
  }

const namesNumbers = []

for (let i = 0, l = line.length; i < l; i++) {
  namesNumbers.push(`${i + 1}. ${line[i]}`)
}

return `The line is currently: ${namesNumbers.join(', ')}`
}
