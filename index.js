var katzDeli = []

function takeANumber(currentLine, customerName) {

    // The function, takeANumber, should accept the current line of people,
    // katzDeliLine, along with the new person's name as parameters.
    // The function should return their position in line.
    // And don't go being too programmer-y and give them their index. These are
    // normal people. If they are 7th in line, tell them that. Don't get their
    // hopes up by telling them they are number 6 in line.

    currentLine.push(customerName)
    return `Welcome, ${customerName}. You are number ${currentLine.length} in line.`
}

function nowServing(currentLine) {

    // This function should return the first person in line and then remove
    // that individual from the line. If there is nobody in line, it should
    // return "There is nobody waiting to be served!"

    if (currentLine.length < 1) {
        return "There is nobody waiting to be served!"
    }
    return `Currently serving ${currentLine.shift()}.`
}

function currentLine (currentLine) {

    // This function currentLine returns the current line. For example,
    // if katzDeliLine is currently ["Ada", "Grace"], currentLine(katzDeliLine)
    // would return "The line is currently: 1. Ada, 2. Grace".
    // If there is nobody in line, it should return "The line is currently
    // empty."

    if ( currentLine.length >= 1 ) {
        var line = 'The line is currently: '
        for (var i=1; i < (currentLine.length + 1); i++) {
            if ( i === 1 ) {
                line += `${i}. ${currentLine[i - 1]}`
            } else {
                line += `, ${i}. ${currentLine[i - 1]}`
            }
        }
        return line
    } else {
        return 'The line is currently empty.'
    }
}
