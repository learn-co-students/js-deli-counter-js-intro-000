function takeANumber(katzDeliLine, name) {
    katzDeliLine.push(name);

    return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}


function nowServing (katzDeliLine) {
    if(katzDeliLine.length === 0)
        return "There is nobody waiting to be served!"
    return `Currently serving ${katzDeliLine.shift()}.`;
}


function currentLine(katzDeliLine) {
    if(katzDeliLine.length < 1)
        return "The line is currently empty.";
    else {
        var message = "The line is currently: ";
        for(var i = 0; i < katzDeliLine.length; i++){
            if(i === katzDeliLine.length - 1)
                message += `${i + 1}. ${katzDeliLine[i]}`;
            else
                message += `${i + 1}. ${katzDeliLine[i]}, `;
        }

        return message;
    }
}
