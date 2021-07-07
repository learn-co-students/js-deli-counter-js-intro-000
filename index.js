
function takeANumber(katzDeliLine, name) {
  var x = katzDeliLine.length + 1;
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${x} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!'
  } else {
    var served = `${katzDeliLine[0]}`
    katzDeliLine.shift();
    return `Currently serving ${served}.`
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return 'The line is currently empty.'
  } else {
  var linelist = 'The line is currently:';
  for (let i = 0; i < (katzDeliLine.length - 1); i++) {
    linelist = `${linelist} ${(i + 1)}. ${katzDeliLine[i]},`;
  }
    linelist = `${linelist} ${katzDeliLine.length}. ${katzDeliLine[(katzDeliLine.length - 1)]}`;

    return linelist
  }
}
