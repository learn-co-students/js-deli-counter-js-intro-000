function takeANumber(line, person) {
  line.push(person);
  return `Welcome, ${person}. You are number ` + (line.length) + ` in line.`
}

function nowServing(line) {
  if (line.length >= 1) {
    return `Currently serving ` + (line.shift()) + `.`;
  } else {
    return `There is nobody waiting to be served!`
  }
}

function currentLine(line) {
  var indexedPerson = [];
    if (line.length >= 1) {
      for (var end = 0, current = line.length; end < current; end++) {
          indexedPerson.push(` ${end + 1}. ${line[end]}`)
        }
      return `The line is currently:` + (indexedPerson);
  } else {
    return `The line is currently empty.`
  }
 }
