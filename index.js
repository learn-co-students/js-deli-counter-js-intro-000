function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}

function nowServing(line) {
  if (line.length > 0) {
    let person = line.shift();
    line = line.slice(1);
    return `Currently serving ${person}.`;
  }
  else {
    return 'There is nobody waiting to be served!';
  }
}

function currentLine(line) {
  if (line.length > 0) {
    let l = 'The line is currently: ';
    for(let i = 0; i < line.length; ++i) {
      l += `${i + 1}. ${line[i]}`;
      if (i < line.length - 1) {
        l += ', ';
      }
    }
    return l;
  }
  else {
    return 'The line is currently empty.';
  }
}
