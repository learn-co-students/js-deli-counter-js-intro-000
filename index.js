//var katzDeli = [];
//var otherDeli = [];

function takeANumber(deliLine, name) {
    deliLine.push(name);
    return `Welcome, ${name}. You are number ${deliLine.length} in line.`
}

function nowServing(deliLine) {
    if (deliLine.length == 0) {
        return "There is nobody waiting to be served!"
    } else {
        return `Currently serving ${deliLine.shift()}.`
    }
}

function currentLine(line) {
    if (line.length == 0) {
        return "The line is currently empty."
    } else {
        var message = "The line is currently:"
        for (var count = 1; count < line.length+1; count++) {
            message = message + ` ${count}. ${line[count-1]},`;
        }
        return message
    }
}