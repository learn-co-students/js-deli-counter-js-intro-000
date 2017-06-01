function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  var i = katzDeliLine.length
  return 'Welcome, ' + name + `. You are number ${i} in line.`
  }
function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var announcement = 'Currently serving ' + `${katzDeliLine[0]}` + '.'
    katzDeliLine.shift()
  	return announcement
  } else if (katzDeliLine.length === 0) {
      return "There is nobody waiting to be served!"
  }
}
function currentLine(line) {
  if (line.length > 0) {
    return 'The line is currently: 1. ' + line[0] + ', 2. ' + line[1] + ', 3. ' + line[2]
  } else if (line.length === 0) {
    return 'The line is currently empty.'
  }
}