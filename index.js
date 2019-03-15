function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  var n = katzDeliLine.length
  return `Welcome, ${name}. You are number ${n} in line.`
}

function nowServing(katzDeliLine) {
  var m = katzDeliLine[0]
  if (katzDeliLine.length > 0) {
    katzDeliLine.shift()
    return "Currently serving " + m + "."
  }
  else {
    return "There is nobody waiting to be served!"
  }
}


function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  }
  else {
    var currentLine = []
    for (let i = 0; i < katzDeliLine.length; i++) {
      currentLine.push(` ${i+1}. ${katzDeliLine[i]}`)
    }
  }
  return `The line is currently:${currentLine}`
}
