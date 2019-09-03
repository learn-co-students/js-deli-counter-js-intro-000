function takeANumber (currentLine, newPerson) {
  currentLine.push(newPerson)
  return `Welcome, ${newPerson}. You are number ${currentLine.length} in line.`
}

function nowServing (currentLine) {
  if (currentLine.length == 0) {
    return 'There is nobody waiting to be served!'
  } else {
    return `Currently serving ${currentLine.shift()}.`
  }
}

function currentLine (currentLine) {
  var line = [];
  for (var i = 0; i < currentLine.length; i++) {
    line.push(' ' + [i + 1] + '. ' + currentLine[i]);
  }
  if (currentLine.length == 0) {
    return 'The line is currently empty.'
  } else {
  return ('The line is currently:' + line);
  }
}
