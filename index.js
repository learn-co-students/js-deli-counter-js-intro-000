var katzDeli = [];

function takeANumber(currentLine, name) {
  currentLine[currentLine.length] = name
  return `Welcome, ${name}. You are number ${currentLine.length} in line.`
}

function nowServing(line) {
  if (line.length == 0) {
    return "There is nobody waiting to be served!"
  }
  else {
    var serving = line[0]
    line.shift()
    return `Currently serving ${serving}.`
  }
}

function currentLine(line) {
  var printString = "The line is currently:"
  if (line.length == 0) {
    return "The line is currently empty."
  }
  else
    for (let i = 0; i < line.length; i++) {
      printString = printString + ` ${i+1}. ${line[i]}`
      if (i < line.length - 1) {
        printString = printString + ','
      }
    }
  return printString
}
