var katzDeli = [];
var katszDeliLine = [];

function takeANumber(currentLine, person) {
  currentLine.push(person)
  return `Welcome, ${person}. You are number ${currentLine.length} in line.`
}

function nowServing(currentLine) {
  if (currentLine.length > 0) {
    var firstPerson = currentLine[0]
    currentLine.shift()
    return `Currently serving ${firstPerson}.`
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(currentLine) {
  if (currentLine.length > 0) {
    var returnStr = "The line is currently: "
    for (var i = 0; i < currentLine.length; i++) {
      if (i === 0) {
        returnStr = returnStr + `${i + 1}. ${currentLine[i]}`
      } else {
        returnStr = returnStr + `, ${i + 1}. ${currentLine[i]}`
      }
    }
    return returnStr;
  } else {
    return "The line is currently empty." //YAY :D
  }
}
