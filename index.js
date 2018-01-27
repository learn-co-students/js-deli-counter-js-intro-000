var katzDeli = [];

function takeANumber (katzDeliLine, name) {
  katzDeliLine.push(name)
  var length = katzDeliLine.length
  return `Welcome, ${name}. You are number ${length} in line.`
}

function nowServing (array) {
  if (array.length === 0) {
    return "There is nobody waiting to be served!"
  }
  else {
    var returnValue = array[0]
    array.shift()
    return `Currently serving ${returnValue}.`
  }
}

function currentLine(line) {
  if (!line.length) {
    return "The line is currently empty."
  }

  const numbersAndNames = []

  for (let i = 0, l = line.length; i < l; i++) {
    numbersAndNames.push(`${i + 1}. ${line[i]}`)
  }

  return `The line is currently: ${numbersAndNames.join(', ')}`
};
