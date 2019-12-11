// Function "takeANumber" takes parameters "name" and "number in line, and returns a message about the person's place in line.

function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ` + line.length + " in line."
}

function nowServing(line) {
  if (line.length > 0) {
    return "Currently serving " + line.shift() + "."
  }
  else {
    return "There is nobody waiting to be served!"
  }
}


// Function "currentLine" takes parameter "line" and returns a string stating the entire line in order.

function currentLine(line) {
  // Create a variable "deliLine" that will be the string.
  if (line.length > 0) { // Set up if-then to determine if there's anybody in line.
  var deliLine = "The line is currently: ";
  for (var i = 0; i < line.length; i++) {
      if (i < line.length - 1) {
//        deliLine = `${deliLine}${i}. ${line[i]}, `;
          deliLine = deliLine + (i + 1) + ". " + line[i] + ", ";
      }
      else {
//        deliLine = `${deliLine}${i}. ${line[i]}.`;
          deliLine = deliLine + (i + 1) + ". " + line[i];
      }
    }
    return deliLine
  } else {
        return "The line is currently empty."
  }
}
