var katzDeli = [];

function takeANumber(katzDeli, person) {
  katzDeli.push(person);
  return `Welcome, ${person}. You are number ${katzDeli.indexOf(person)+1} in line.`;
}

function nowServing(katzDeli) {
  if (katzDeli.length > 0) {
    var person = katzDeli.shift();
    return `Currently serving ${person}.`
  } else {
    return 'There is nobody waiting to be served!';
  }
}

function currentLine(katzDeli) {
  var line = 'The line is currently: ';
  if (katzDeli.length > 0) {
    for (var i = 0; i < katzDeli.length; i++) {
        line += (i+1) + '. ' + katzDeli[i] + ', ';
    }
    return line.slice(0, line.length-2);
  } else {
    return 'The line is currently empty.';
  }
}
