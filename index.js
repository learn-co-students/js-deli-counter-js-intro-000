//Adds a customer to the line
// -- works

function takeANumber(currentLine, newCustomer) {
  currentLine.push(newCustomer);
  return `Welcome, ${newCustomer}. You are number ${currentLine.length} in line.`;
}

//Shows which customer is ready to be served
// -- not working

function nowServing(line) {
  if (line.length === 0) {
    return 'There is nobody waiting to be served!'
  } else {
    return `Currently serving ${line.shift()}.`
  }
}

//Show the list of the current line.
// -- working

function currentLine(line) {
  var list = [];
  if (line.length === 0) {
    return 'The line is currently empty.'
  }
  for (let i = 0; i < line.length; i++) {
    list.push(` ${i + 1}. ${line[i]}`);
    }
  return `The line is currently:${[...list]}`
}
