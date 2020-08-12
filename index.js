function takeANumber(currLine, name) {
  currLine.push(name);
  return `Welcome, ${name}. You are number ${currLine.length} in line.`;
}

function nowServing(currLine) {
  if (currLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    let firstPerson = currLine.shift();
    return `Currently serving ${firstPerson}.`;
  }
}

function currentLine(currLine) {
  if (currLine.length === 0) {
    return "The line is currently empty.";
  } else {
    let out = "The line is currently: ";
    let numAndPeople = [];
    let j = 1;
    for (let i=0; i < currLine.length; i++) {
      numAndPeople.push(`${j}. ${currLine[i]}`);
      j++;
    }
    return out + numAndPeople.join(", ");
  }
}
