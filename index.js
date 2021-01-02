
var katsDeli = []

var takeANumber = (katsDeli, name) => {
    katsDeli.push(name);
    return `Welcome, ${name}. You are number ${katsDeli.length} in line.`
}

var nowServing = (katsDeli) => {
    if (katsDeli.length > 0) {
        var nowServing = katsDeli[0];
        katsDeli.shift();
        return `Currently serving ${nowServing}.`;
    } else {
        return `There is nobody waiting to be served!`;
    }
}

var currentLine = (line) => {
    if (line.length === 0) {
        return `The line is currently empty.`;
    } else {
        var array = [];
        for (var i = 0; i < line.length; i++) {
            array.push(` ${i+1}. ${line[i]}`);
        }
        return `The line is currently:` + array;
    }
}