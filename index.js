function takeANumber(currentLine, newPerson) {

  currentLine.push(newPerson)
  return(`Welcome, ${newPerson}. You are number ${currentLine.length} in line.`)
}

function nowServing(currentLine){

    if (currentLine.length == 0) {
      return("There is nobody waiting to be served!")

    } else {
      return(`Currently serving ${currentLine.shift()}.`)
    }
}



function currentLine(lineArray) {

  var lineString = "The line is currently: ";

  if (lineArray.length == 0) {
    return("The line is currently empty.")
  } else {
    for (var i=1; i<(lineArray.length + 1); i++) {
      if (i == 1) {
        lineString = lineString + i + ". " + lineArray[i - 1]
      } else {
        lineString = lineString + ", " + i + ". " + lineArray[i - 1]
      }
    }

        return(lineString)
  }

}
