function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return (`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`)
}

function nowServing(deliLine) {
  if (deliLine.length > 0) {
    return (`Currently serving ${deliLine.shift()}.`)
  }
  if (deliLine.length === 0) {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(array) {
  if (array.length === 0) {
    return "The line is currently empty."
  }
  var string = ("The line is currently: ")
  for (var i = 0; i < array.length; i++) {
    string = string + (`${i + 1}. ${array[i]}, `)
  }
  return string.substring(0, string.length - 2)
}
