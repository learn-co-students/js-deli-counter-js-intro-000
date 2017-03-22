var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return "Welcome, " + name + ". You are number " + (katzDeliLine.length) + " in line.";
}

function nowServing(line) {
  if (!line.length) {
    return "There is nobody waiting to be served!";
  }
  return 'Currently serving ' + line.shift() + '.';
}

function currentLine(line) {
  if(!line.length) {
    return "The line is currently empty.";
  }
  var returnString = "The line is currently: ";
  var count = 1;
  for(let i = 0; i < line.length; i++) {
    if(i === 0) {
      returnString += count++ + ". " + line[i];
    } else {
      returnString += ", " + count++ + ". " + line[i];
    }
  }
  return returnString;
}
