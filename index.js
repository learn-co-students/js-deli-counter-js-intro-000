var katzDeliLine = [];
function takeANumber(a, b) {
  a.push(b);
  return `Welcome, ${b}. You are number ` + a.length + " in line.";
}

function nowServing(a) {
  if (a.length > 0) {
    var person = a.shift();
    return `Currently serving ${person}.`
  } else {
    return 'There is nobody waiting to be served!';
  }
}

function currentLine(a) {
  if (a.length > 0){
    return `The line is currently: ${[...a]}`;
  } else {
    return 'The line is currently empty.'
  }
}
