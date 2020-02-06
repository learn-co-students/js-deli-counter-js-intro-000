function takeANumber(katzDeliLine, newPerson) {
  var place = katzDeliLine.length + 1;
  var greeting = 'Welcome, ' + newPerson + '. You are number ' + place + ' in line.';
  katzDeliLine.push(newPerson);
  return greeting;
};

function nowServing(katzDeliLine) {
  var message;
  if(katzDeliLine.length === 0) {
    message = 'There is nobody waiting to be served!'
  } else {
    message = 'Currently serving ' + katzDeliLine[0] + '.';
    katzDeliLine.shift();
  }
  return message;
};

function currentLine(current) {
  if(current.length === 0) {
    return 'The line is currently empty.';
  } else {
    var line = [];
    for(let i = 0; i < current.length; i++) {
      line.push(i+1 + '. ' + current[i])
    }
    return 'The line is currently: ' + line.join(', ');
  }
}
