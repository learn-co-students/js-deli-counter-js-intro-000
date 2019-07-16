function takeANumber (line, name) {
  line.push (name)
  return ("Welcome, " + name + ". You are number " + line.length + " in line.")
}

function nowServing (line) {
  if (line.length === 0) {
    return ("There is nobody waiting to be served!")
  }
  else {
    var name = line[0]
    line.shift()
    return ("Currently serving " + name + ".")
  }
}

function currentLine (line) {
  if (line.length === 0) {
    return ("The line is currently empty.")
  }
  else {
    var stringLine = "The line is currently: "
    for (var i = 1; i <= line.length; i++) {
      stringLine = stringLine + i + ". " + line[i-1]
      if (i != line.length) {
        stringLine = stringLine + ", "
      }
    }
  }
  return stringLine
}
