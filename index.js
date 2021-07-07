function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}

function nowServing(line) {
  return line.length > 0 ? `Currently serving ${line.shift()}.` : "There is nobody waiting to be served!";
}

function currentLine(line) {
  var lineIsCurrently = 'The line is currently';
  if(line.length > 0) {
    for(var i = 0; i < line.length; i++) {
      lineIsCurrently += i === 0 ? ": " : ", ";
      lineIsCurrently += `${i+1}. ${line[i]}`;
    }
  } else {
    lineIsCurrently += " empty.";
  }
  return lineIsCurrently;
}
