function takeANumber(line, name) {
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}
function nowServing(line) {
  if (line.length == 0) {
    return "There is nobody waiting to be served!"
  } else {
     return `Currently serving ${line.shift()}.`
  }
}
function currentLine(line) {var array = []
  if (line.length == 0) {
    return "The line is currently empty."
  } else {
    line.map((e,i) => array.push(`${i+1}. ${e}`))
    return `The line is currently: ${array.join(', ')}`
  }
}
