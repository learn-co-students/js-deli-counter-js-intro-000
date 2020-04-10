function takeANumber(line , name) {
line.push(name);
return `Welcome, ${name}. You are number ${line.length} in line.`;
}

function nowServing(line) {
  var origArray = line.slice(0);
  if (line.length > 0) {

    line.shift()
    return `Currently serving ${origArray[0]}.`;
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(line) {
  if (line.length > 0) {
    var string = `The line is currently: 1. ${line[0]}`

    let i = 0;
    while (i < line.length-1) {
    string = string + `, ${i+2}. ${line[i+1]}`
    i++;
    }
    return string;
  } else {
    return "The line is currently empty.";
  }

}
