var katzDeli = [];

function takeANumber (line, newPersonName) {
  line.push(newPersonName);
  var numberOfPeople = line.length;
  katzDeli = line;
  var returnValue = 'Welcome, ' + newPersonName + '. You are number ' + numberOfPeople + ' in line.';
  return returnValue;
}

function nowServing (line) {
  if (line.length === 0) { return 'There is nobody waiting to be served!'
  }
  var firstPerson = line[0];
  line.shift();
  return 'Currently serving ' + firstPerson + '.'

}


function currentLine (line) {
  if (line.length === 0) { return 'The line is currently empty.'
  }
  var cs = [];
  for (var i = 0; i < line.length; i++) {
    cs.push(`${i + 1}. ${line[i]}`)
  }
  return `The line is currently: ${cs.join(', ')}`

}

"The line is currently: 1. Ada 2. Grace"
