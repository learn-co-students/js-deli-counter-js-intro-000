function takeANumber(current_line, name) {
  current_line.push(name);
  var placeInLine = current_line.indexOf(name);
  return `Welcome, ${name}. You are number ${placeInLine + 1} in line.`;
}

function nowServing(currentLine) {
  if (currentLine === undefined || currentLine.length === 0) {
    return 'There is nobody waiting to be served!';
  } else {
    var personServing = currentLine.shift();
    return `Currently serving ${personServing}.`;
  }
}

function currentLine(current_line) {
  if (current_line === undefined || current_line.length === 0) {
    return `The line is currently empty.`;
  } else {
    var placeAndNames = [];
    for (var i = 0; i < current_line.length; i++) {
      placeAndNames.push(`${i + 1}. ${current_line[i]}`);
    }
    return `The line is currently: ${placeAndNames.join(', ')}`;
  }
}
