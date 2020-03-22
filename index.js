function takeANumber(line, newPerson) {
  line.push(newPerson);
  return `Welcome, ${newPerson}. You are number ${line.length} in line.`;
}

function nowServing(line) {
  if(line.length === 0) {
    return "There is nobody waiting to be served!";
  }
  return `Currently serving ${line.shift()}.`;
}

function currentLine(line) {
  if(line.length === 0) {
    return "The line is currently empty.";
  }
  var result = "The line is currently: ";
  for(let i = 0; i< line.length; i++) {
    result += `${i + 1}. ${line[i]}`;
    if(i != line.length - 1) {
      result += ', ';
    }
  }
  return result;
}
