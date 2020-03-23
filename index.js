function takeANumber(deliLine, customerName) {
  deliLine.push(customerName)
  var customerIndex = deliLine.indexOf(customerName)
  var customerPlaceInLine = customerIndex + 1
  var nameOfCustomerInLine = deliLine[customerIndex]
  for (let i = 0; i < customerName.length; i++) {
    var solutionString = `Welcome, ${nameOfCustomerInLine}. You are number ${customerPlaceInLine} in line.`
  }
  return solutionString
}

function nowServing(katsDeliLine) {
  var firstCustomerInLine = katsDeliLine.shift()
  if (katsDeliLine.length === 0) {
    return 'There is nobody waiting to be served!'    
  } else {
    /*
    do {
      return `Currently serving ${firstCustomerInLine}.`
    } while (katsDeliLine.length > 0)
    */
    while (katsDeliLine.length > 0) {
      return `Currently serving ${firstCustomerInLine}.`
    }
    /*
    for (let i = 0; i < katsDeliLine.length; i) {
      return `Currently serving ${firstCustomerInLine}.`
    }
    */
  }
}

function currentLine(katsDeliLine) {
  var positionInLine = []
  if (katsDeliLine.length === 0) {
    return 'The line is currently empty.'
  } else {
    /*
    var i = 0
    do {
      positionInLine +=`${i + 1}. ${katsDeliLine[i]}, `
      i++
    } while (i < katsDeliLine.length)
    positionInLine = positionInLine.slice(0, -2)
    return `The line is currently: ${positionInLine}`
    */
    /*
    var i = 0
    while (i < katsDeliLine.length) {
      positionInLine +=`${i + 1}. ${katsDeliLine[i]}, `
      i++
    }
    positionInLine = positionInLine.slice(0, -2)
    return `The line is currently: ${positionInLine}`
    */
    for (let i = 0; i < katsDeliLine.length; i++) {
      positionInLine +=`${i + 1}. ${katsDeliLine[i]}, `
    } 
    positionInLine = positionInLine.slice(0, -2)
    return `The line is currently: ${positionInLine}`
  }
}