function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)

  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."
}

function nowServing(katzDeliLine) {
  var person

  if (katzDeliLine.length == 0) {
    return "There is nobody waiting to be served!"
  }
  else {
    person = katzDeliLine.shift()
    return "Currently serving " + person + "."
  }
}

function currentLine(katzDeliLine){
  var line

  if (katzDeliLine.length == 0) {
    return "The line is currently empty."
  }
  else {
    line = "The line is currently: "
    for (var i = 0; i < katzDeliLine.length - 1; i++) {
      line = line + (i + 1) + ". " + katzDeliLine[i] + ", "
    }
    line = line + katzDeliLine.length + ". " + katzDeliLine[katzDeliLine.length - 1]
    return line
  }
}
