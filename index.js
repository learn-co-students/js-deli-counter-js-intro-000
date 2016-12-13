var takeANumber = (katzDeliLine, name) => {
  katzDeliLine.push(name)
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."
}

var nowServing = (katzDeliLine) => {
  if (katzDeliLine.length == 0) {
    return "There is nobody waiting to be served!"
  } else {
    return "Currently serving " + katzDeliLine.shift() + "."
  }
}

var currentLine = (line) => {
  var string = "The line is currently: "
  if (line.length == 0) {
    return "The line is currently empty."
  } else {
    for (let i = 0; i < line.length; i++) {
      string = string + (i+1) + ". " + line[i]
      if (i < line.length - 1) {
        string = string + ", "
      }
    }
    return string
  }
}