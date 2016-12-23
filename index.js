function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length == 0) {
    return "There is nobody waiting to be served!"
  }
  else {
    firstInLine = katzDeliLine[0]
    katzDeliLine.shift()
    return `Currently serving ${firstInLine}.`
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length == 0) {
    return "The line is currently empty."
  }
  else {
    var lineString = "The line is currently: "
    for (let i = 0; i < katzDeliLine.length; i++) {
      lineString += `${i + 1}. ${katzDeliLine[i]}`
      if (i != katzDeliLine.length - 1) {
        lineString += ', '
      }
    }
    return lineString
  }
}

function firstInLine(katzDeliLine) {
  return katzDeliLine[0]
}
