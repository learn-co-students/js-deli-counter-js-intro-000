var katzDeli = [];

function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

// "Welcome, Ada. You are number 1 in line."

function nowServing(line) {
  let first = line.shift();
  if (!line.length) {
    return 'There is nobody waiting to be served!';
  }
  return `Currently serving ${first}.`;
}

function currentLine(line) {
  let order = [];
  if (!line.length) {
    return "The line is currently empty.";
  }
  for(let i = 0;i<line.length;i++) {
    order.push(`${i + 1}. ${line[i]}`);
  }
  return `The line is currently: ${order.join(', ')}`
}
