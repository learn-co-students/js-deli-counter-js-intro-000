var katzDeliLine = []

function takeANumber(katzDeliLine, newName) {
  katzDeliLine.push(newName)
  return `Welcome, ${newName}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!'
  }
  else {
    var nextInLine = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${nextInLine}.`
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine == 0) {
    return `The line is currently empty.`
  } else {
    var line = 'The line is currently:'
    for (var i = 0; i < katzDeliLine.length; i++) {
      line += ` ${i+1}. ${katzDeliLine[i]}`
      if ( i < katzDeliLine.length - 1) {
        line += ','
      }
    }
      return line
  }
}
