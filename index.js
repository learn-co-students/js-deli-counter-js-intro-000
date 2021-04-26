function takeANumber(line, name) {
 line.push(name)
 return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line) {
 if (line == 0) {
  return "There is nobody waiting to be served!"
}
 return `Currently serving ${line.shift()}.`
}

function currentLine(line) {
 if (line == 0) {
   return "The line is currently empty."
 }
  return `The line is currently: 1. ${line[0]}, 2. ${line[1]}, 3. ${line[2]}`
}
