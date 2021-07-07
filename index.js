// accept two parameters: the current line of people, new person's name.
// return a welcome message including the new person's position in line.
function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return(`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`)
}

// accept the current line of people (katzDeliLine).
// return the first person in line and then remove that individual from the line.
// If there is nobody in line, display "... nobody waiting..." message
function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var first = katzDeliLine.shift()
    return `Currently serving ${first}.`
  }
}

// returns "The line is currently empty." if no one is in line
// says who is in line when there are people waiting
function currentLine(DeliLine) {
  var line = "The line is currently"
  if (DeliLine.length === 0) {
    return line + " empty."
  } else {
    line += ": "
    for (let i = 0; i < DeliLine.length; ++i) {
      (i === DeliLine.length - 1) ? line += `${i+1}. ${DeliLine[i]}` : line += `${i+1}. ${DeliLine[i]}, `
    }
    return line
  }
}
