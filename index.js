function takeANumber(currentLine, newPerson) {
  currentLine.push(newPerson);
  return `Welcome, ${newPerson}. You are number ${currentLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return `Currently serving ${katzDeliLine.shift()}.`
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine (nowLine) {
  var people = [];
  let i = 0;
  while (nowLine.length > i) {
    people.push(`${i+1}. ${nowLine[i]}`);
    i++;
  }
  if (nowLine.length > 0) {
    return `The line is currently: ${people.join(', ')}`;
  } else {
    return "The line is currently empty."
  }
}
