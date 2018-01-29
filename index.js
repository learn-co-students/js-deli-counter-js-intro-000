var katzDeli = [];

function takeANumber(katzDeliLine, newPerson) {
  katzDeliLine.push(newPerson);
  return "Welcome, "+newPerson+". You are number "+katzDeliLine.length+" in line.";
}

function nowServing(katzDeliLine) {
  var nextPerson;
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else {
    nextPerson = katzDeliLine[0];
    katzDeliLine.shift();
    return "Currently serving " + nextPerson + ".";
  }
}

function currentLine(line) {
  if (!line.length) {
    return "The line is currently empty."
  }
  const numbersAndNames = []
  for (let i = 0, l = line.length; i < l; i++) {
    numbersAndNames.push(`${i + 1}. ${line[i]}`)
  }
  return `The line is currently: ${numbersAndNames.join(', ')}`
};
