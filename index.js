var katzDeliLine = [];


function takeANumber(lineOfPeople, newPersonName) {
  lineOfPeople.push(newPersonName);
  let item = lineOfPeople.indexOf(newPersonName) + 1;

  return `Welcome, ${newPersonName}. You are number ${item} in line.`;
}

function nowServing(lineOfPeople) {
  if(lineOfPeople.length > 0) {
    let first = lineOfPeople[0];
    lineOfPeople.shift(first);
    return `Currently serving ${first}.`
  }else {
    return `There is nobody waiting to be served!`;
  }
}

function currentLine(lineOfPeople) {
  let arr = [];

  if(lineOfPeople.length < 1) {
    return `The line is currently empty.`;
  } else {
    for(let i = 0; i < lineOfPeople.length; i++) {
      arr.push(` ${i + 1}. ${lineOfPeople[i]}`);
    }
    return `The line is currently:${arr}`;
  }
}
