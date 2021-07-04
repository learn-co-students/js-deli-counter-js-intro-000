//Global Variable
var eliasDeli = [];

//Take A Number
function takeANumber(eliasDeliLine, name) {
  var newLine = eliasDeliLine.push(name)
  return `Welcome, ` + name + `. You are number ` + eliasDeliLine.length + ` in line.`
}

//Now Serving
function nowServing(eliasDeliLine, name) {
  if (eliasDeliLine == 0) {
    return `There is nobody waiting to be served!`
  } else {
    return `Currently serving ${eliasDeliLine.shift()}.`
  }
}

//Current In Line
function currentLine(line) {
  if (line == 0) {
    return `The line is currently empty.`
  } else {
    return `The line is currently: 1. ${line[0]}, 2. ${line[1]}, 3. ${line[2]}` 
  }
}
