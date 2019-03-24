function takeANumber(katzDeliLine, name) {
  var position = katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${position} in line.`
};

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var current = katzDeliLine.shift();
    return `Currently serving ${current}.`
  } else {
    return "There is nobody waiting to be served!";
  }
};

function currentLine(katzDeliLine) {
  if (katzDeliLine.length > 0) {
	var customer = "The line is currently: ";
    for(var i = 0; i < katzDeliLine.length; i++) {
      if (i + 1 != katzDeliLine.length) {
        customer = customer.concat(`${i + 1}. ${katzDeliLine[i]}, `);
      } else {
        customer = customer.concat(`${i + 1}. ${katzDeliLine[i]}`);
      }
    } return customer
  } else {
    return "The line is currently empty.";
  }
};
