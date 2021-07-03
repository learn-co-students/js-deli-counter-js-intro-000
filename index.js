function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.indexOf(name) + 1} in line.`;
}

function nowServing(line) {
  if (line.length === 0) {
    return 'There is nobody waiting to be served!';
  } else {
    var serving = line[0];
    line.shift();
    return `Currently serving ${serving}.`;
  }
}

function currentLine(line) {
  if (line === [] || line.lenght === 0 || line[0] === null || line[0] === undefined ) {
    return 'The line is currently empty.';
  }

  let lineOutput = 'The line is currently: ';

  for (var i = 0, l = line.length; i < l; i++) {
    if (l - 1 === i) {
      lineOutput += `${i + 1}. ${line[i]}`;
    } else {
      lineOutput += `${i + 1}. ${line[i]}, `;
    }
  }

  return lineOutput;
}
