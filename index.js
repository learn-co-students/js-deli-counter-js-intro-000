var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  var lineNumber = katzDeliLine.length + 1;
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${lineNumber} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!'
  } else {
    var current = katzDeliLine.shift();
    return `Currently serving ${current}.`
  }
}

function currentLine(line) {
  if (line.length > 0) {
    var x = '';
    var arr = [];
    var output = 'The line is currently: ';
    for (var i = 0; i < line.length; i++) {
      var name = line[i];
      var addOutput = `${i + 1}. ${name}`;
      arr.push(addOutput);
    }

    return output + arr.join(', ')

  } else {
      return 'The line is currently empty.'
    }
}
