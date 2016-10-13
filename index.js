var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  var linePosition = katzDeliLine.length;
  return `Welcome, ${name}. You are number ${linePosition} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
  var firstInLine = katzDeliLine[0];
  katzDeliLine.shift();
  return `Currently serving ${firstInLine}.`
} else {
  return 'There is nobody waiting to be served!'
}
}

function currentLine(katzDeliLine) {
  var n = katzDeliLine.length - 1
  if (katzDeliLine.length > 0) {
  var deliArray=[]
  for (let i = 0; i <= n; i++) {
    deliArray.push(" " + [i+1] + ". " + katzDeliLine[i]);
  }
  // Above loop creates deliArray
  return `The line is currently:${deliArray}`;
} else {
  return 'The line is currently empty.'
}
}
