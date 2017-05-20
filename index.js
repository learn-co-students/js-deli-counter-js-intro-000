var katzDeli = [];

var takeANumber = (katzDeliLine, name) => {
    katzDeliLine.push(name);
    return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

var nowServing = katzDeliLine => {
    if (katzDeliLine.length > 0) {
        var name = katzDeliLine[0];
        katzDeliLine.shift();
        return `Currently serving ${name}.`;
    }
    else {
        return "There is nobody waiting to be served!";
    }
}

var currentLine = katzDeliLine => {
    if (katzDeliLine.length > 0) {
        var string = "The line is currently: "
        for (let i = 0; i < katzDeliLine.length - 1; i++) {
            string += `${i + 1}. ${katzDeliLine[i]}, `
        }
        string += `${katzDeliLine.length}. ${katzDeliLine[katzDeliLine.length - 1]}`
        return string;
    }
    else {
        return "The line is currently empty.";
    }
}
