function takeANumber (currentLine, newPerson) {
  var spot = currentLine.length + 1
  currentLine.push(newPerson)
  return `Welcome, ${newPerson}. You are number ` + spot + " in line."
}

function nowServing (currentLine) {
  if (currentLine.length > 0) {
    var upNow = currentLine[0]
    currentLine.shift()
    return `Currently serving ${upNow}.`
  }
  else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(currentLine) {
  if (currentLine.length > 0) {
    var list = "The line is currently: "
    for (var i = 1; i <= currentLine.length; i++) {
      list = list + i + `. ${currentLine[i - 1]}, `
    }
    var list2 = list.slice(0, -2)
    return list2
  }
  else {
    return "The line is currently empty."
  }
}
