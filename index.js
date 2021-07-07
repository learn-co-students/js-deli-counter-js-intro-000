function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.indexOf(name)+1} in line.`;
}

function nowServing(katzDeliLine) {
  let firstPerson = katzDeliLine[0];
  if(firstPerson === undefined) {
    return "There is nobody waiting to be served!";
  } else {
    katzDeliLine.shift();
    return "Currently serving " + firstPerson + '.';
  }
}

function currentLine(line) {
  let newArray = [];
  if(line.length === 0) {
    return "The line is currently empty.";
  }

  for(let i = 0; i < line.length; i++) {
    newArray.push(`${i+1}. ${line[i]}`);
  }

  return "The line is currently: " + newArray.join(', ');
}
