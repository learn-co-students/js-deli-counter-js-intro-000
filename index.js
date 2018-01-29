var theLine = [];

function takeANumber(theLine, name) {
  theLine.push(name);
  return `Welcome, ${name}. You are number ${theLine.length} in line.`;
}

function nowServing(theLine) {
  if (theLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return `Currently serving ${theLine.shift(name)}.`;
  }
}

function currentLine(theLine) {
  if (theLine.length === 0) {
    return "The line is currently empty.";
  } else {
    var personInLine = [];
    for (var i = 0; i < theLine.length; i++) {
      personInLine.push(`${[i + 1]}. ${theLine[i]}`);
    }
    return `The line is currently: ${personInLine.join(', ')}`;
  }
}
