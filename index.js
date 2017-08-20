function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  for(var i = 0; i < katzDeliLine.length; i++) {
    if (katzDeliLine[i] === name) {
      return `Welcome, ${name}. You are number ${katzDeliLine.indexOf(name) + 1} in line.`;
    }
  }
}

function nowServing(deliLine) {
  if(deliLine.length === 0) {
    return `There is nobody waiting to be served!`;
  } else {
    return `Currently serving ${deliLine.shift()}.`;
  }
}

function currentLine(line) {
  var currentLineString = 'The line is currently: ';

  if(line.length === 0) {
    return 'The line is currently empty.';
  } else {
    for (var i = 0; i < line.length; i++) {
      if(i < line.length -1){
        currentLineString += `${i + 1}. ${line[i]}, `;
      } else {
        currentLineString += `${i + 1}. ${line[i]}`;
      }
    }
    return currentLineString;
  }
}
