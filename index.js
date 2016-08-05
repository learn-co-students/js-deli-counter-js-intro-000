function takeANumber(line, name) {
  // push new customer to the end of the line
    line.push(name);
    return "Welcome, " + name + ". You are number " + (line.length) + " in line.";
}

function nowServing(line, name) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return "Currently serving " + line.shift() + ".";
  }
}

function currentLine(line) {
  if (!line.length) {
      return "The line is currently empty."
  }

  var numberedLine = [];

  for (let i = 0; i < line.length; i++) {
    numberedLine.push((i+1) + ". " + line[i]);
  }

  return "The line is currently: " + numberedLine.join(", ");
}
