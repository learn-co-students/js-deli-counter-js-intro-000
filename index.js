function takeANumber(line, person) {
  line.push(person);

  return `Welcome, ${person}. You are number ${line.length} in line.`
}

function nowServing(line) {
  var announcement = null;
  var personServed = null;

  if (line.length < 1) {
    announcement = 'There is nobody waiting to be served!';

  } else {
    personServed = line.shift();
    announcement = `Currently serving ${personServed}.`;
  }

  return announcement;
}

function currentLine(line) {
  var announcement = null;
  var order = [];

  if (line.length < 1) {
    announcement = 'The line is currently empty.';
  } else {
    for (var i = 0; i < line.length; i++) {
      order.push(`${i + 1}. ${line[i]}`);
  
    }

    var joined = order.join(', ');
    announcement = `The line is currently: ${joined}`;

  }

  return announcement;
}
