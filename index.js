function takeANumber(line, newName) {
  line.push(newName);
  return (`Welcome, ${newName}. You are number ${line.length} in line.`);
}

function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    let first = line.shift();
    return (`Currently serving ${first}.`);
  }
}

function currentLine(line) {
  let theLine = "The line is currently: ";
  if (line.length === 0) {
    return "The line is currently empty."
  } else {
    for (let z = 0; z < line.length; z++) {
      if (z === (line.length - 1)) {
        theLine += `${z + 1}. ${line[z]}`;
      }
        else {
        theLine += `${z + 1}. ${line[z]}, `;
      }
    }
  } return theLine;
}
