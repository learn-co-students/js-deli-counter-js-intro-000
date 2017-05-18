var katzDeli = [];

function takeANumber(katzDeliLine, personName) {
 katzDeliLine.push(personName)
 return `Welcome, ${personName}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
}
  return `Currently serving ${katzDeliLine.shift()}.`
}

function currentLine(katzDeliLine) {
  var katzDeliLineList = String()
  var i = 0;
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  }
  for (i = 0; katzDeliLine.length; i++) {
      katzDeliLineList = `${i+1}. ${katzDeliLine[i]}`
  }
  return `The line is currently: ${katzDeliLine}`
}
