var katzDeliLine = []

var takeANumber = (line, customer) => {
  line.push(customer)
  return (`Welcome, ${customer}. You are number ${line.length} in line.`)
}

var nowServing = (line) => {
  if(line.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var serving = line.shift()
    return `Currently serving ${serving}.`
  }
}

var currentLine = (line) => {
  if (line.length === 0) {
    return "The line is currently empty."
  } else {
    var response = "The line is currently: "
    for (let i = 0; i < line.length; i++) {
      if (i === line.length - 1) {
        response = response + (i + 1) + ". " + line[i]
      } else {
        response = response + (i + 1) + ". " + line[i] + ", "
      }

    }
    return response
  }
}
