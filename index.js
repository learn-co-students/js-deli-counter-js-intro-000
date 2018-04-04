var katzDeli = []

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  let currentCustomer = katzDeliLine.shift();
  if (currentCustomer === undefined) {
    return 'There is nobody waiting to be served!';
  } else {
    return `Currently serving ${currentCustomer}.`;
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return 'The line is currently empty.';
  } else {
    var lineSentence = `The line is currently: 1. ${katzDeliLine[0]}`;
    for (let i = 1; i < katzDeliLine.length; i++) {
      lineSentence += `, ${i + 1}. ${katzDeliLine[i]}`
    }
    return lineSentence
  }
}
