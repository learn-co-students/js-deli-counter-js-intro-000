var katzDeliLine = []

function takeANumber(line, name) {
  line.push(name)
  return (`Welcome, ${name}. You are number ${line.length} in line.`)
}

function nowServing(katzDeliLine) {
  if(katzDeliLine == 0) {
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`
  }
}

function currentLine(katzDeliLine) {
  if(katzDeliLine == 0) {
    return "The line is currently empty."
  } else {
    var order = `1. ${katzDeliLine[0]}`
    var i = []
    for(i = 1; i < katzDeliLine.length; i++) {
      order = order + `, ${i + 1}. ${katzDeliLine[i]}`;
    }
    return `The line is currently: ${order}`
  }
}
