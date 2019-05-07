let katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);

  return `Welcome, ${katzDeliLine[katzDeliLine.length - 1]}. You are number ${katzDeliLine.length} in line.`;

  return katzDeliLine;
}

function currentLine(katzDeliLine) {
  let katzDeli = '';

  if (katzDeliLine.length > 0) {
    for (let i = 0; i < katzDeliLine.length; i++) {
      katzDeli = katzDeli + `${i + 1}. ${katzDeliLine[i]}${(i === katzDeliLine.length - 1) ? '' : ', '}`;
    }

    return `The line is currently: ${katzDeli}`;
  } else {
    return 'The line is currently empty.';
  }
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return `Currently serving ${katzDeliLine.shift()}.`;
    //katzDeliLine.shift();

    //return katzDeliLine;
  } else {
    return 'There is nobody waiting to be served!';
  }
}
