var katzDeli = []

function takeANumber(deli, name) {
  deli.push(name)
  return `Welcome, ${name}. You are number ${deli.length} in line.`
}

function nowServing(deli) {
  if (deli.length === 0) {
    return 'There is nobody waiting to be served!'
  } else {
    var customer = deli.shift()
    return `Currently serving ${customer}.`
  }
}

function currentLine(line) {
  var lineString = "The line is currently: "
  if (line.length === 0) {
    return 'The line is currently empty.'
  } else {
    line.forEach(function (customer, place) {
      if (place === line.length-1) {
        lineString += `${place + 1}. ${customer}`
      } else {
        lineString += `${place + 1}. ${customer}, `
      }
    }
    )
    return lineString
  }
}