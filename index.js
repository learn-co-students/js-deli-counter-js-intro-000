function takeANumber (currentLine, newCust) {
  currentLine.push(newCust);
  let nextInLine = [('Welcome, ' + newCust + '. You are number ' + currentLine.length + ' in line.')];
  return nextInLine;
}
function nowServing (currentLine) {
  if(!currentLine.length) {
    return 'There is nobody waiting to be served!';
  } else {
    return 'Currently serving ' + currentLine.shift()+'.';
  }
}
function currentLine (currentLine) {
  if (!currentLine.length) {
    return 'The line is currently empty.';
  } else {
    let inLiners = [];
    for (let i = 0; i < currentLine.length; i++) {
      inLiners.push(`${i + 1}. ${currentLine[i]}`);
    }
    return 'The line is currently: ' + inLiners.join(', ');
  }
}
