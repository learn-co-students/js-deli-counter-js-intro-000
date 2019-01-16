function takeANumber(currentLine, newName) {
  currentLine.push(newName);

  return `Welcome, ${newName}. You are number ${currentLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return `Currently serving ${katzDeliLine.shift()}.`;
    katzDeliLine.shift();
  }
  else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(currentLine) {
  var names = [];

  if ( currentLine.length > 0 ) {
    for (var i = 0; i < currentLine.length; i++) {
      names.push(`${i + 1 }. ${currentLine[i]}`);
    }
    return `The line is currently: ${names.join(', ')}`
  }
  else {
    return "The line is currently empty."
  }
}
