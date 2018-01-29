function takeANumber(katzDeliLine, newName) {
  katzDeliLine.push(newName)
  return("Welcome, " + newName + ". You are number " + katzDeliLine.length + " in line.")
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return("There is nobody waiting to be served!")
  } else {
    var servingName = katzDeliLine.shift()
    return("Currently serving " + servingName + ".")  
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return("The line is currently empty.")
  } else {
    var theLine = "The line is currently: "
    for (let i = 0; i < katzDeliLine.length; i++) {
      theLine = (theLine + (i + 1) + ". " + katzDeliLine[i])
      if (i < (katzDeliLine.length - 1)) {
        theLine = (theLine + ", ")
      }
    }
  }
  return(theLine)
}
  