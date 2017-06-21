function takeANumber(line, customer) {
  line.push(customer);
  return `Welcome, ${customer}. You are number ${line.length} in line.`;
}

function nowServing(line) {
  if (line.length == 0) {
    return `There is nobody waiting to be served!`;
  } else {
    return `Currently serving ${line.shift()}.`;
  }
}

function currentLine(line) {
  if (line.length == 0) {
    return `The line is currently empty.`;
  } else {
    return `The line is currently:${printLine(line)}`;
  }
}

function printLine(line) {
  var string = '';
  for (let i = 0; i < line.length; i++) {
    if (i == line.length - 1) { // last customer in line
      string += ` ${i+1}. ${line[i]}`;
    } else {
      string += ` ${i+1}. ${line[i]},`;
    }
  }
  return string;
}
