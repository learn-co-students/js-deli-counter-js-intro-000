var takeANumber = (katzDeliLine, name) => {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

var nowServing = (katzDeliLine) => {
  if (katzDeliLine.length > 0) {
    return `Currently serving ${katzDeliLine.shift()}.`
  } else {
    return "There is nobody waiting to be served!"
  }
}

var currentLine = (line) => {
  if (line.length > 0) {
    var string = "The line is currently: "
    for (var i = 0; i < line.length; i += 1) {
      string +=  `${i + 1}. ${line[i]}${i + 1 === line.length ? '' : ', '}`
    }
    return string
  } else {
    return "The line is currently empty."
  }
}
