var katzDeli = []

function takeANumber(line, name) {
     line.push(name)
     return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line) {
    if (line.length >= 1) {
        var customer = line[0]
        line.shift()
        return `Currently serving ${customer}.`
    } else if (line.length === 0) {
        return "There is nobody waiting to be served!"
    }
}

function currentLine(line) {
    if (line.length === 0) {
        return "The line is currently empty."
    } else {
        var count = line.length
        var number = 1
        var customersWaiting = "The line is currently:"
        while (count != 0) {
            var customerString = ` ${number}. ${line[number - 1]},`
            customersWaiting += customerString
            number++
            count--
        }
        return customersWaiting.slice(0, -1)
    }
}