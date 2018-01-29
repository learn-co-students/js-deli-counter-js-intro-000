var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length == 0) {
    return "There is nobody waiting to be served!"
  } else {
    var customer = katzDeliLine.shift()
    return `Currently serving ${customer}.`
  }
}

function currentLine(katzDeliLine) {
  var output = "The line is currently"
  if (katzDeliLine.length == 0) {
    output += " empty."
  } else {
    output += ":"
    var i = 1
    while (i <= katzDeliLine.length) {
      output += ` ${i}. ${katzDeliLine[i - 1]}`
      if (i < katzDeliLine.length) {
        output += ","
      }
      i++
    }
  }
  return output
}
