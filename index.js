var deli = [];

function takeANumber(deliLine, name) {
  deliLine.push(name);
  return `Welcome, ${name}. You are number ${deliLine.length} in line.`;
};

function nowServing(deliLine) {
  if (deliLine.length > 0) {
    return 'Currently serving ' + deliLine.shift() + '.';
  } else {
    return 'There is nobody waiting to be served!';
  };
};

function currentLine(line) {
  var output = 'The line is currently: ';
  if (line.length > 0) {
    for (let i = 1; i < line.length + 1; i++) {
      if (i < line.length) {
        output = output + i + '. ' + line[i-1] + ', ';
      } else {
        output = output + i + '. ' + line[i-1];
      };
    };
    return output;
  } else {
    return 'The line is currently empty.';
  };
};
