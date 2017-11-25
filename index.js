function takeANumber(line, name) {
  line.push(name);
  var linePos = line.indexOf(name) + 1;
  return `Welcome, ${name}. You are number ${linePos} in line.`
}

function nowServing(line) {
  if (line.length > 0) {
    var ready = line.shift()
    return `Currently serving ${ready}.`
  }
  else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(line) {
  if (line.length > 0 ) {
    var message = 'The line is currently: ';
    for (let i = 0; i < line.length; i++) {
      if (i != line.length - 1) {
        message += `${i+1}. ${line[i]}, `
      } else {
        message += `${i+1}. ${line[i]}`
      }
    }
    return message;
  } else {
    return "The line is currently empty.";
  }
}
