function takeANumber(katzDeliLine, person) {
  katzDeliLine.push(person);
  return `Welcome, ${person}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!';
  }
  return `Currently serving ${katzDeliLine.shift()}.`;
}

function currentLine(line) {
  if(line.length === 0) {
    return 'The line is currently empty.';
  }

  var formatted = 'The line is currently:';
  for(var i = 0; i < line.length; i++) {
    formatted += ` ${i + 1}. ${line[i]}`
    if(i < line.length - 1) {
      formatted += ','
    }
  }
  return formatted;
}