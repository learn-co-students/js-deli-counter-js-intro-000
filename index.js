function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  var i = katzDeliLine.length;
  return `Welcome, ${name}. You are number ${i} in line.`
}

function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else {
    var firstPerson = line[0];
    line.shift();
    return `Currently serving ${firstPerson}.`;
  }
}

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty."
  }
  else {
    var currentLine = [];
    for (var i = 0; i < line.length; i++) {
      if (i === 0) {
        currentLine.push(`${i + 1}. ${line[i]}`)
      }
      else {
        currentLine.push(` ${i + 1}. ${line[i]}`);
      }
  }
  return `The line is currently: ${currentLine}`;
  }
}
