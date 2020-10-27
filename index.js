var katzDeliLine = ['Ada', 'Grace', 'Kent']

function takeANumber(katzDeliLine,name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
if (katzDeliLine.length != 0) {
  var person=katzDeliLine[0]
  katzDeliLine.shift()
  return "Currently serving " + person + "."
}
else {
  return "There is nobody waiting to be served!"
}
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length != 0) {
  var string = "The line is currently: "
  for (let i=0; i<katzDeliLine.length; i++) {
    string += (i + 1) + ". " + katzDeliLine[i]
    if (i<katzDeliLine.length-1) {
      string += ", "
    }
    else {
      string += " "
    }
  }
  return string
  }
  else {
    return "The line is currently empty."
  }
}
