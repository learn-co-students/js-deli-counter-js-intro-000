

function takeANumber(line, name) {
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line) {
  if (line.length != 0) {
    var serving = line[0]
    line.shift()
    return `Currently serving ${serving}.`
  }
  return "There is nobody waiting to be served!"
}

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty."
  } else {
    var currentLine = "The line is currently: "
    for (let i=0; i<line.length-1; i++) {
      currentLine+=`${i+1}. ${line[i]}, ` //This portion adds all members of the line except the last to make the comma easier
    }
    return currentLine + `${line.length}. ${line[line.length-1]}`
  }
}
