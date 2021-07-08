function takeANumber(katzDeliLine, name) {
    katzDeliLine.push(name);
    let i = 0;
    while (i < katzDeliLine.length) {
        if ( katzDeliLine[i] == name) break;
        else i++;
    }
    return `Welcome, ${name}. You are number ${i+1} in line.`;
}

function nowServing(katzDeliLine) {
    if(katzDeliLine[0] == undefined) return "There is nobody waiting to be served!";
    else {
        return `Currently serving ${katzDeliLine.shift()}.`;
    }
}

function currentLine(katzDeliLine) {
    if (katzDeliLine[0] == undefined) return "The line is currently empty.";
    else {
        var i = 0,
            string = "The line is currently:";

            while (i < katzDeliLine.length) {
                if(i == katzDeliLine.length-1) string += ` ${i+1}. ${katzDeliLine[i]}`;
                else string += ` ${i+1}. ${katzDeliLine[i]},`;
                i++;
            }
        return string;
    }
}
