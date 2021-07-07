function takeANumber(line, person) {
  line.push(person)
  return `Welcome, ${person}. You are number ${line.indexOf(person) + 1} in line.`
}

function nowServing(line) {
  return line.length > 0 ? `Currently serving ${line.shift()}.` : "There is nobody waiting to be served!"
}

function currentLine(line) {
  if (line.length < 1) {
    return "The line is currently empty."
  }
  else {
    return "The line is currently: " +
      line.map(person => `${line.indexOf(person) + 1}. ${person}`).join(', ')
  }
}