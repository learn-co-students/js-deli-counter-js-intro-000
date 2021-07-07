function takeANumber(line, name) {
  var number = line.length + 1;
  line.push(name);
  return `Welcome, ${name}. You are number ${number} in line.`;
}

function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!";
  }

  return `Currently serving ${line.shift()}.`;
}

function currentLine(line) {
  var count = 0;
  var lineString = "The line is currently:";

  if (line.length === 0) {
    return "The line is currently empty.";
  } else {
    while (count < line.length) {
      lineString = lineString + ` ${count + 1}. ${line[count]}`

      if (line.length - count > 1) {
        lineString = lineString + ","
      }

      count++;
    }

    return lineString;
  }
}
