var katzDeli = [];
var katzDeliLine = [];

var takeANumber = (katzDeliLine, name) => {
    katzDeliLine.push(name);
    var number = katzDeliLine.indexOf(name) + 1
    return `Welcome, ${name}. You are number ${number} in line.`
}

var nowServing = (katzDeliLine) => {
  var nextUp = katzDeliLine[0]
  if (katzDeliLine[0] == null) {
    return "There is nobody waiting to be served!"
  }
  else {
    katzDeliLine.shift()
    return `Currently serving ${nextUp}.`
    }
}

var currentLine = (katzDeliLine) => {
  var line = katzDeliLine.length
  var lineString = "The line is currently: "
  if (katzDeliLine[0] == null) {
    return "The line is currently empty."
  }
  else {
    for (let i = 0; i < line; i++) {
    lineString = lineString + `${i + 1}. ${katzDeliLine[i]}`
      if (i < (line - 1)) {
        lineString = lineString + ', '
      }
    }
  }
  return lineString
}
