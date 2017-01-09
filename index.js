var katzDeli = []

function takeANumber (katzDeliLine, person) {
  katzDeliLine.push(person)
  for (var i = 0; i < katzDeliLine.length ; i++) {
    if (katzDeliLine[i] == person) {
      return `Welcome, ${person}. You are number ${i += 1} in line.`
    }
    }
  }

function nowServing(katzDeliLine) {
  if (katzDeliLine.length == 0) {
    return "There is nobody waiting to be served!"
  }
  else {
    var name = katzDeliLine.shift()
    return `Currently serving ${name}.`
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length == 0) {
    return "The line is currently empty."
  }
  else {
    var namesOnLine = []
    for (var i = 0 ; i < katzDeliLine.length ; i++) {
      namesOnLine.push(` ${i + 1}. ${katzDeliLine[i]}`)
    } return `The line is currently:${[namesOnLine]}`
  }
  }
