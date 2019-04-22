function takeANumber(line, name) {
  line.push(`${name}`);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}

function nowServing(line) {
  if (line.length == 0) {
    return 'There is nobody waiting to be served!';
  }
  else {
    return `Currently serving ${line.shift()}.`;
  }
}

var Line1 = [];
function currentLine(line) {
  if (line.length == 0) {
    return `The line is currently empty.`
  }
  else {
    for (var i = 0; i < line.length; i++) {
      Line1.push(' '+[i+1]+'. '+ line[i]);
    }
    return `The line is currently:` + Line1;
  }
}
