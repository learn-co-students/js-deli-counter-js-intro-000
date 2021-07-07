var katzDeliLine = [];

function takeANumber(katzDeliLine, newPerson) {
  katzDeliLine.push(newPerson);
  return(`Welcome, ${newPerson}. You are number ${katzDeliLine.length} in line.`);
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
}

function currentLine(line) {
  var resultArr = ['The line is currently:'];
  var i = 0;
  if (line.length === 0) {
    return "The line is currently empty."
  } else {
    while (i < line.length-1) {
      resultArr.push(`${i+1}. ${line[i]},`);
      i++;
    }
    resultArr.push(`${i+1}. ${line[i]}`)
  }
  return resultArr.join(' ');
}
