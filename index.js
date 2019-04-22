function takeANumber(customers, newCustomer) {
  customers[customers.length] = newCustomer;
  return `Welcome, ${newCustomer}. You are number ${customers.length} in line.`;
}

function nowServing(customers) {
  var nextCustomer = customers[0];
  customers.shift();
  return (nextCustomer ? `Currently serving ${nextCustomer}.` : "There is nobody waiting to be served!");
}

function currentLine(line) {
  var lineOrder = "The line is currently: ";
  for (var place = 0; place < line.length; place++) {
    lineOrder = lineOrder + (place + 1) + `. ${line[place]}` + (place < line.length-1 ? `, ` : ``);
  }
  return (line.length > 0 ? lineOrder : "The line is currently empty.");
}
