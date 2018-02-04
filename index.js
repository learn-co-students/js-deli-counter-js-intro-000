var katzDeli = [];

function takeANumber(people, person) {
  people.push(person);

  return `Welcome, ${person}. You are number ${people.length} in line.`;
}

function nowServing(line) {
  if(line.length <= 0) {
    return "There is nobody waiting to be served!";
  }

  return `Currently serving ${line.shift()}.`;
}

function currentLine(line) {
  if(line.length <= 0) {
    return "The line is currently empty."
  }

  let retString = "The line is currently: "

  for(let i = 0; i < line.length - 1; i++) {
    retString += `${i + 1}. ${line[i]}, `;
  }

  return retString += `${line.length}. ${line.slice(-1)}`;
}
