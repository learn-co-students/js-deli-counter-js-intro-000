var katzDeliLine = [];



function takeANumber(line, customer) {
  //var katzDeliLine = [];
  line.push(customer);
  var placeInLine = line.indexOf(customer) + 1;


  return 'Welcome, ' + customer + '. You are number ' + placeInLine + ' in line.';
}

function nowServing(line) {
  var currentCustomer = ''

  if (line.length === 0) {
    return 'There is nobody waiting to be served!';
  } else {
    currentCustomer = line.shift();
    return 'Currently serving ' + currentCustomer + '.';

  }
}

function  currentLine(line) {
  var returnMessage = '';
  if (line.length === 0) {
    return 'The line is currently empty.';
  } else {
    for (var i = 0; i < line.length; i++) {
      returnMessage += (i + 1) + '. ' + line[i] + ', ';
    }
    return 'The line is currently: ' + returnMessage.slice(0, -2);
  }
}
