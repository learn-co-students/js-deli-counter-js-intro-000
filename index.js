
var katzDeli = [];

function takeANumber(katzDeliLine, client) {
    var count = katzDeliLine.length;
    katzDeliLine.push(client);
    return `Welcome, ${client}. You are number ${count+1} in line.`
}


function nowServing(katzDeliLine, client) {
    var count = katzDeliLine.length;
    if (count === 0) {
        return "There is nobody waiting to be served!";
    } else {
        var nextClient = katzDeliLine[0];
        katzDeliLine.shift(client);
        return `Currently serving ${nextClient}.`;
    }
}


function currentLine(line) {
    var count = line.length;
    var current = "The line is currently: ";
    if (count === 0) {
        return "The line is currently empty.";
    } else {
        for (var i = 1; i <= line.length; i++) {
            current += `${i}. ${line[i-1]}, `
        }
        current.substring(0, current.length-1);
    }
    return current.substring(0, current.length - 2);
}
