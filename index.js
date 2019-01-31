function takeANumber(katzDeliLine, newName) {
  katzDeliLine.push(newName)
  var position = katzDeliLine.length
  return `Welcome, ${newName}. You are number ${position} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return `There is nobody waiting to be served!`;
  } else {
    var nextCustomer = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${nextCustomer}.`;
  }
}

function currentLine(katzDeliLine) {
  var lineList = 'The line is currently: ';
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
      for (let i = 0; i < katzDeliLine.length; i++) {
        var position = i + 1
        var name = katzDeliLine[i];
          if (i === katzDeliLine.length - 1) {
            lineList = lineList.concat(position + '. ' + name);
          } else {
            lineList = lineList.concat(position + '. ' + name + ', ');
          }
      }
    return lineList;
  }
}
