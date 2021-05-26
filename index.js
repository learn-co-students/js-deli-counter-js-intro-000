function takeANumber(currentLine, newName) {
  currentLine.push(newName);
  return `Welcome ${newName}. You are currenly number ${currentLine.length} in line.`;
}

function nowServing(currentLine) {
  if(currentLine.length===0) {
    return 'There is nobody waiting to be served!';
  }
  return currentLine.shift();
}

function currentLine(currentLine) {
  const currentLineString = 'The current line is: ';
  for(let x = 0; x < currentLine.length; x++) {
    currentLineString.concat(`${x+1}: ${currentLine[x]}`);
  }
  return currentLineString;
}
