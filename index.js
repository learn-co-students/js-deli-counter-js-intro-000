var katzDeli = [];

function takeANumber (katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {

  if (katzDeliLine.length == 0) {
    return "There is nobody waiting to be served!";
  } else {
    var name = katzDeliLine.shift();
    return `Currently serving ${name}.`;
  }
}

function currentLine(line) {

  if (line.length == 0) {
    return "The line is currently empty."
  }

  var theLine = "The line is currently: ";

  for (var i = 0; i < line.length; i++) {

    if (i == line.length - 1) {
      theLine += `${i + 1}. ${line[i]}`;
    } else {
      theLine += `${i + 1}. ${line[i]}, `;
    }
  }
  return theLine;
}
