var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  let lineCount = katzDeliLine.length;
  return `Welcome, ${name}. You are number ${lineCount} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    let currentCustomer = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${currentCustomer}.`;
  } else {
      return 'There is nobody waiting to be served!'
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return 'The line is currently empty.'
  } else {
    let lineList = [];
    let i = 0;
    while (i < katzDeliLine.length) {
      lineList[i] = ` ${i+1}. ${katzDeliLine[i]}`
      i++;
    }
    return `The line is currently:${lineList}`;
  }
}
