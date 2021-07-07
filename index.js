//Appends a person to the line
function takeANumber(line, name) {
    line.push(name)
    return `Welcome, ${name}. You are number ${line.indexOf(name) + 1} in line.`
}

//Returns the current person being served and removes the person from queue
function nowServing(line) {
  if (line.length > 0) {
    return `Currently serving ${line.splice(0, 1)}.`
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line) {
  if (line.length > 0) {
    var list = []
    for (var i = 0; i < line.length; i++) {
      list.push(`${i + 1}. ${line[i]}`)
    }
    return `The line is currently: ${list.join(", ")}`
  } else {
    return "The line is currently empty."
  }
}
