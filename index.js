function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}

function nowServing(line) {
 if (!line.length) {
    return "There is nobody waiting to be served!";
  }

  var nextGuest = [];
  for (let i = 0; i < line.length; i++) {
    nextGuest.push(line[i]);
    line.shift();
    return "Currently serving " + nextGuest[i] + ".";
}

function currentLine(line) {
  if (!line.length) {
      return "The line is currently empty.";
  }

  var waitingInLine = [];
  for (let i = 0; i < line.length; i++) {
    waitingInLine.push((i + 1) + ". " + line[i]);
  }
   return "The line is currently: " + waitingInLine.join(", ");
 }
