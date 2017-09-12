var katzDeli = [];

// build a function that a new customer will use when entering the deli

// function takeANumber should accept two paraments
// the current line and persons name
function takeANumber(line, name) {
  // add a person to the line
  line.push(name);
  // appends a person at the end of the line if there are already peopel on it
  // handles mulitple people on line with line.length
  // return the position in line
  return `Welcome, ${name}. You are number ${line.length} in line.`
};

function nowServing(line) {
  // returns line is empty is no one is on line
  if (!line.length) {
    return "There is nobody waiting to be served!";
  } // return & then remove the first individual from the line
    return `Currently serving ${line.shift()}.`;
};

function currentLine(line) {
  if (!line.length) {
    return "The line is currently empty."
  }

  var currentLine = [];

  for(var i = 0; i < line.length; i++){
    currentLine.push(`${i + 1}. ${line[i]}`)
  }
    return `The line is currently: ${currentLine.join(', ')}`;
};
