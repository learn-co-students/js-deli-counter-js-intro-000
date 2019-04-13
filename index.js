function takeANumber(katzDeliLine, newName) {
  katzDeliLine.push(newName);
  return `Welcome, ${newName}. You are number ${katzDeliLine.indexOf(newName)+1} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return `Currently serving ${katzDeliLine.shift()}.`;
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(line) {
  if (line.length < 1) {
    return "The line is currently empty."
  } else {
    var i = 0;
    var currLine = `The line is currently: ${line.indexOf(line[i])+1}. ${line[i]}`
    i++;
    while (i < line.length) {
      currLine = currLine + `, ${line.indexOf(line[i])+1}. ${line[i]}`;
      i++;
    }
  }
  return currLine;
}
