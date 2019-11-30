function takeANumber(currentLine, custName) {
  currentLine.push(custName)
  return `Welcome, ${custName}. You are number ${currentLine.length} in line.`
}

function nowServing(currentLine) {
  var i = 0
  while (i < currentLine.length) {
    i++
  }

  if (currentLine.length > 0) {
    return `Currently serving ${currentLine.shift()}.`
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(currentLine) {
  var i = 0
  var message = "The line is currently:"
  if (currentLine.length === 0) {
    return "The line is currently empty."
  } else {
    while (i < currentLine.length) {
      message += ` ${i + 1}. ${currentLine[i]}`
      if (i < currentLine.length - 1) {
        message += ","
      }
      i++
    }
    return message
  }
}
