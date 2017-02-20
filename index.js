var katzDeli = []

function takeANumber(line, person) {
  line.push(person)
  return `Welcome, ${person}. You are number ${line.length} in line.`
}

function nowServing(line) {
  if (!line.length) {
    return "There is nobody waiting to be served!"
  }

  return `Currently serving ${line.shift()}.`
}

function currentLine(line) {
  if (!line.length) {
    return "The line is currently empty."
  }
  const arr = []

  for (let i = 0; i < line.length; i++) {
    arr.push(`${i + 1}. ${line[i]}`)
  }

  return `The line is currently: ${arr.join(", ")}`

}