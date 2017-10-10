var katzDeliLine = [];
//take a number function
function takeANumber (katzDeliLine, name) {
  katzDeliLine.push(name);
  var deliLength = katzDeliLine.length
  return (`Welcome, ${name}. You are number ${deliLength} in line.`);
}
//now serving function
function nowServing (katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  }
  else {
    var firstInLine = katzDeliLine.shift()
    return `Currently serving ${firstInLine}.`
  }
}
//current line function
function currentLine (katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
  return `The line is currently: 1. ${katzDeliLine[0]}, 2. ${katzDeliLine[1]}, 3. ${katzDeliLine[2]}`
  }
}
