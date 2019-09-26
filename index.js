function takeANumber (currentLine, name) {
  currentLine.push(name)
  return 'Welcome, ' + name + '. You are number ' + currentLine.length  + ' in line.'
}

function nowServing(currentLine) {
  if (currentLine.length === 0) {
    return "There is nobody waiting to be served!"
  }
  return `Currently serving ${currentLine.shift()}.`
}

function currentLine(currentLine) {
var line = []
  if (currentLine.length === 0) {
    return "The line is currently empty."
    }
  for (let i = 0; i< currentLine.length; i++) {
   line.push(`${i+1}. ${currentLine[i]}`)
  }
  return `The line is currently: ${line.join(', ')}`
}
