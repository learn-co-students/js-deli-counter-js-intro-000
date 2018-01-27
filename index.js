var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);

return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}



function nowServing(katzDeliLine) {

  if (katzDeliLine.length > 0) {
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
  else if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  }
}


function currentLine(katzDeliLine) {
  var custQueueAndName = []

    if (katzDeliLine.length > 0) {
      for(var i = 0; i < katzDeliLine.length; i++) {
      custQueueAndName.push(`${i + 1}. ${katzDeliLine[i]}`)
    }
      return `The line is currently: ${custQueueAndName.join(', ')}`
    }
    else if (katzDeliLine.length === 0) {
      return 'The line is currently empty.'
    }
}
