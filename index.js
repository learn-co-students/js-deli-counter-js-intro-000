function takeANumber(line, person) {
  line.push(person);
  return `Welcome, ${person}. You are number ${line.length} in line.`;
}

function nowServing(line) {
  if (line.length < 1) return `There is nobody waiting to be served!`;
  return `Currently serving ${line.shift()}.`;
}

function currentLine(line) {
  if (line.length < 1) return `The line is currently empty.`;
  return "The line is currently: " + line.map((person,position) => `${position+1}. ${person}`).join(', ');
}
