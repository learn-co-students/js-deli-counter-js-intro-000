function takeANumber(katzDeliLine, name) {
    katzDeliLine.push(name);
    return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
    return katzDeliLine.length === 0 ? "There is nobody waiting to be served!" : `Currently serving ${katzDeliLine.shift()}.`
}

function currentLine(katzDeliLine) {
    if (katzDeliLine.length === 0) {

        return "The line is currently empty."
    } else {
        let currentString = "The line is currently:"

        for (let i = 0; i < katzDeliLine.length; i++) {
            currentString = `${currentString} ${i+1}. ${katzDeliLine[i] === katzDeliLine[katzDeliLine.length -1] ? katzDeliLine[i] : katzDeliLine[i]+","}`
        }

        return currentString
    }
}
