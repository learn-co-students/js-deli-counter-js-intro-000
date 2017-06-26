var katzDeli = [];

function takeANumber(katzDeliLine, customer) {
  katzDeliLine.push(customer);
  return `Welcome, ${customer}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else {
    var lineStatement = "The line is currently: ";
    var i;
    for (i = 0; i < katzDeliLine.length; i++) {
      if (i < katzDeliLine.length - 1) {
        lineStatement += `${i + 1}. ${katzDeliLine[i]}, `
      } else {
        lineStatement += `${i + 1}. ${katzDeliLine[i]}`
      }
    }
    return lineStatement;
  }
}
