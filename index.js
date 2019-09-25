var katzDeliLine = []

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."
}

function nowServing(katzDeliLine) {
  var msg
  if (katzDeliLine.length === 0) {
    msg = "There is nobody waiting to be served!"
  } else {
    msg = "Currently serving " + katzDeliLine[0] + "."
  }
  katzDeliLine.shift()
  return msg
}

function currentLine(katzDeliLine) {
  var msg
  var lineNumbers = []

  if (katzDeliLine.length === 0) {
    msg = "The line is currently empty."
  } else {
    for (let i = 0; i < katzDeliLine.length; i++) {
      lineNumbers.push([i+1] + "." + " " + katzDeliLine[i])
    }
    msg = "The line is currently: " + lineNumbers.join(", ")
  }
  return msg
}
