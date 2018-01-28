var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(deliLine) {
  var customer;
  if (deliLine.length > 0) {
    customer = deliLine[0];
    deliLine.shift();
    return `Currently serving ${customer}.`
  } else {
    return 'There is nobody waiting to be served!';
  }
}

function currentLine(line) {
  var res = 'The line is currently: ';
  if (line.length > 0) {
    for (var i = 0; i < line.length; i++) {
      (i < line.length -1 ? res += `${i+1}. ${line[i]}, ` : res += `${i+1}. ${line[i]}`);
    }
  } else {
    return 'The line is currently empty.';
  }
  return res;
}

