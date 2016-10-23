function takeANumber(katzDeli, name) {
    katzDeli.push(name);
    return ('Welcome, ' + name + '. You are number ' + katzDeli.length + ' in line.');
}

function nowServing(katzDeli, name) {
  if (katzDeli.length > 0) {
    return 'Currently serving ' + katzDeli.shift() + '.';
    katzDeli;
/*this returns the first array element and mutates the array at the same time. Not sure why you cannot just katzDeli[0] for the return text
and then do katzDeli.shift(); followed by katzDeli; but that does not mutate the array for some reason.*/
  }
  else {
    return 'There is nobody waiting to be served!';
  }
}

function currentLine(katzDeli, name) {
  var array = [];
  if (katzDeli.length > 0) {
    for (let i = 0; i < katzDeli.length; i++) {
      array.push(' ' + (i + 1) + '. ' + katzDeli[i]);
    }
    return 'The line is currently:' + array;
  }
  else {
    return 'The line is currently empty.'
  }
}
