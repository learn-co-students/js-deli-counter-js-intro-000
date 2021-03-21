function takeANumber(current, name) {
  var newArray = current;
  newArray.push(name);
  return (`Welcome, ${name}. You are number ${newArray.length} in line.`);
}

function nowServing(current){
  if (current.length === 0) {
    return `There is nobody waiting to be served!`
  }
  else {
    return `Currently serving ${current.shift()}.`;
  }
}

function currentLine(current){
  if (current.length === 0) {
    return `The line is currently empty.`;
  } else
    return `The line is currently: 1. ${current[0]}, 2. ${current[1]}, 3. ${current[2]}`
  }
