function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!'
  }
  else {
    var vTemp = `Currently serving ${katzDeliLine[0]}.`
    katzDeliLine.shift()
    return vTemp
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return 'The line is currently empty.'
  }
  else {
    var vTemp = 'The line is currently: '
    for (var i = 1; i <= katzDeliLine.length; i++) {
      vTemp = vTemp + i + '. ' + `${katzDeliLine[i-1]}${(i) === katzDeliLine.length ? '' : ', '}`;
    }
    return vTemp
  }
}
