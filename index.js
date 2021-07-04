function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  for(var i = 0; i<katzDeliLine.length; i++) {
    if(katzDeliLine[i] === name) {
    return 'Welcome, ' + name + '. You are number ' + (i+1) + ' in line.';
    }
  }
}
function nowServing(katzDeliLine) {
  var serving = katzDeliLine[0];
  var result = '';
  if(katzDeliLine.length === 0) {
    result = 'There is nobody waiting to be served!';
  } else {
    result = 'Currently serving ' + serving + '.';
    katzDeliLine.shift();
  }
  return result;
}
function currentLine(line) {
  var result = 'The line is currently: ';
  if(line.length === 0) {
    return 'The line is currently empty.';
  } else {
    for(var i = 0; i <line.length; i++) {
      if(i < (line.length - 1)) {
        result += ((i + 1) + '. ' + line[i] + ', ');
      } else {
        result += ((i + 1) + '. ' + line[i]);
      }
    }
    return result;
  }
}
