function takeANumber(line, name) {
  line.push(name)
  var number = line.indexOf(name) + 1
  return `Welcome, ${name}. You are number ${number} in line.`
}
function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var current = katzDeliLine[0]
    katzDeliLine.shift()
    return `Currently serving ${current}.`
  }else {
    return "There is nobody waiting to be served!"
  }

}
function currentLine(line) {
  if (line.length > 0) {
    const ar = []
    for (var i = 0; i < line.length; i++) {
      ar.push(`${i + 1}. ${line[i]}`)
    }
    return `The line is currently: ${ar.join(', ')}`
  }else {
    return 'The line is currently empty.'
  }
}
