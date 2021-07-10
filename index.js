function takeANumber(line, person) {
  line.push(person);
  return `Welcome, ${person}. You are number ${line.indexOf(person)+1} in line.`
}

function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return `Currently serving ${line.shift()}.`;
  }
}

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty.";
  } else {
    var lineList = "";
    for (var i = 0; i < line.length; i++) {
      lineList += i + 1;
      lineList += ". " + line[i];
      lineList += (i === line.length - 1) ?  "" : ", ";
    }
    return `The line is currently: ${lineList}`;
  }
}
