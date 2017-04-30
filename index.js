var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  let customer;

  if (katzDeliLine.length>0) {
    customer = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${customer}.`
  }
  else {
    return 'There is nobody waiting to be served!'
  }

}

function currentLine(katzDeliLine) {

  let line;

  if (katzDeliLine.length>0) {
    line = `The line is currently: 1. ${katzDeliLine[0]}`;
    for (let i=1; i<katzDeliLine.length; i++){
        line = line + `, ${i+1}. ${katzDeliLine[i]}`;
    }
    return line;
  }
  else {
    return 'The line is currently empty.'
  }
}
