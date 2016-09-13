// takeANumber greets customer by name and gives them a num

function takeANumber(katzDeliLine, customerName) {

  katzDeliLine.push(customerName) // adds customer name to katzDeliLine
                                  // so katzDeliLine registers the line got longer

  return `Welcome, ${customerName}. You are number ${katzDeliLine.length} in line.`
  // return customer's name and position in line
}


// nowServing either 1.) announces there's no one on line or
// 2.) announces name of customer currently being served

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) { // if no one is on line, return that message
    return "There is nobody waiting to be served!"
  }

  else { // executes if there's at least 1 person on line
      return `Currently serving ${katzDeliLine.shift()}.` // shift removes beginning element
                                                          // katzDeliLine.shift returns the removed element
  }
}


// currentLine either 1.) announces if there's no one on line or
// 2.) announces position (on line) and name of all people on line

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) { // if no one is on line
    return "The line is currently empty."
  }

  var counter = 0  // counts # people on line
                  // counter + 1 = num people on line

  var positionAndName = [] // store line position and customer name

  while (counter < katzDeliLine.length) { //
    positionAndName.push(`${counter + 1}. ${katzDeliLine[counter]}`)
    counter++
  } // closes 'while' loop

  return `The line is currently: ${positionAndName.join(", ")}` // returns current line
} // closes function
