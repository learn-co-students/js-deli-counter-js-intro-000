function takeANumber(array, person) {
  array.push(person);
  return `Welcome, ${person}. You are number ${array.length} in line.`;
}

function nowServing(array) {
  if (array.length === 0) {
    return 'There is nobody waiting to be served!';
  } else {
    let person = array.shift();
    return `Currently serving ${person}.`;
  }
}

function currentLine(line) {
  if (line.length === 0) {
    return 'The line is currently empty.';
  } else {
    let string = 'The line is currently: ';

    for (let i = 0; i < line.length; i++) {
      string += `${i + 1}. ${line[i]}`;

      if (i !== line.length - 1) {
        string += ', ';
      }
    }

    return string;
  }
}
