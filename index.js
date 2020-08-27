var katzDeliLine = []

function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}

function nowServing(line) {
  var output = "There is nobody waiting to be served!";
  if(line.length > 0) {
    output = `Currently serving ${line.shift()}.`;
  }
  return output;
}

function currentLine(line) {
  if(line.length < 1) {
    return "The line is currently empty.";
  } else {
    var order = `1. ${line[0]}`;
    var i;
    for (i = 1; i < line.length; i++) {
      order = order + `, ${i + 1}. ${line[i]}`;
    }
    return `The line is currently: ${order}`;
  }
}
