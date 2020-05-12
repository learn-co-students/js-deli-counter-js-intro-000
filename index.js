function takeANumber (line, name){
  line.push(`${name}`)
  return (`Welcome, ${name}. You are number ${line.length} in line.`)
}
function nowServing (line) {
  let x = 0
  while (x < line.length) {
    x++
  }
  if (line.length === 0) {
    return "There is nobody waiting to be served!"
  }
  else {
    return `Currently serving ${line.shift()}.`
  }
}
function currentLine(line) {
  let x = 0
  while (x < line.length){
    line.push(`` + [x+1] + `.` + line[x]); x++
  }
  if (line.length === 0){
    return ("The line is currently empty.")
  }
  else {
    return ("The line is currently: " + line)
  }
}
