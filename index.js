function takeANumber(line, name) {
  line.push(name);
  //return line.length;
  return (`Welcome, ${name}. You are number ${line.length} in line.`);
}

function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!";
  }
  var serving = line.shift();
  return `Currently serving ${serving}.`;
}

function currentLine(line) {
  var s = "The line is currently: "
  if (line.length === 0) {
    return "The line is currently empty.";
  }
  for (var i = 0; i < line.length; i++) {
    if (i === 0) {
      s = s + `${i + 1}. ${line[i]}`;
    } else {
      s = s + `, ${i + 1}. ${line[i]}`;
    }
  }
  return s;
}
