var katzDeliLine = [];

function takeANumber(katzDeliLine, newName) {
  katzDeliLine.push(newName);
  return `Welcome, ${newName}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    let next = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${next}.`;
  }
  else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine) {
  let currentString = "The line is currently";
  if (katzDeliLine.length === 0) {
    currentString += " empty.";
  }
  else {
    currentString += ":";
    for (let i = 0; i < katzDeliLine.length; i++) {
      currentString += ` ${i + 1}. ${katzDeliLine[i]}`;
      if (i < katzDeliLine.length - 1) {
        currentString += ',';
      }
    }
  }
  return currentString;
}
