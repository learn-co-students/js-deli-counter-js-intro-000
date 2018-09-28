function takeANumber(line, name) {
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var first_person = line.shift()
    return `Currently serving ${first_person}.`
  }
}

function currentLine(line) {
  var list = []
  if (line.length === 0) {
    return "The line is currently empty."
  } else {
    for (var i = 0; i < line.length; i++) {
      list.push(`${i+1}. ${line[i]}`)
    }
  }
  return `The line is currently: ${list.join(", ")}`
}
