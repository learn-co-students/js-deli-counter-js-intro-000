function takeANumber(line, name) {
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line) {

  if (line.length === 0)
     return "There is nobody waiting to be served!"


  return `Currently serving ${line.splice(0,1)}.`
}

function currentLine(line) {
  if (line.length === 0)
     return "The line is currently empty."

  let str = 'The line is currently:'
  for (let x = 0; x < line.length; x++) {
    let suffix =  (x === line.length - 1) ? '' : ','
    str = str + ` ${x+1}. ${line[x]}${suffix}`
  }
  return str

}
