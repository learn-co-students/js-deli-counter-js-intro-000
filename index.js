function takeANumber(katzDeliLine, customerName) {
  katzDeliLine.push(customerName)
  return `Welcome, ${customerName}. You are number ${katzDeliLine.indexOf(customerName) + 1} in line.`
}

function nowServing(katzDeliLine) {
if (katzDeliLine.length === 0) {
  return `There is nobody waiting to be served!`
} else {
  var personBeingServed = katzDeliLine[0]
  katzDeliLine.splice(0, 1)
  return "Currently serving " + personBeingServed  + "."
}
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return `The line is currently empty.`
  }
var str = `The line is currently: `
for (var i = 0; i < katzDeliLine.length; i++) {

  str += `${i + 1}. ${katzDeliLine[i]}, `
}
  str = str.substring(0, str.length-2)
return str
}
