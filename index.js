function takeANumber(currentLine,newPerson) {
  currentLine.push(newPerson)
  var i= currentLine.length
  return "Welcome, " + newPerson + ". You are number " + i + " in line."
}

function nowServing(currentLine) {
  if (currentLine.length == 0) {
    return "There is nobody waiting to be served!"
  }
  else {
  var first = currentLine[0]
  currentLine.shift()
  return "Currently serving " + first + "."
  }
}

function currentLine(deliLine) {
  if (deliLine.length == 0) {
    return "The line is currently empty."
  }
  else {
  var lineUp = "The line is currently: "
  for (let i=0; i < deliLine.length; i++) {
    var j = i+1
    lineUp = lineUp+j+". "+deliLine[i]
  if (j !== deliLine.length) {
      lineUp = lineUp+", "
  }
  }
  return lineUp
  }
}
