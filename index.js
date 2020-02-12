
var katzDeliLine = [];

function takeANumber(deli, person) {
  deli.push(person);

  return `Welcome, ${person}. You are number ${deli.length} in line.`;
}

function nowServing(deli) {
  if (deli.length == 0) {
    return "There is nobody waiting to be served!";
  }

  return `Currently serving ${deli.shift()}.`;
}

function currentLine(deli) {
  if (!deli.length) {
    return "The line is currently empty.";
  }

  const numbersAndNames = [];
  for (let i = 0, l = deli.length; i < l; i++) {
    numbersAndNames.push(`${i + 1}. ${deli[i]}`);
  }

  /* Keep in mind, join() is a a shorthand for looping and building
   * into a String. */
  return `The line is currently: ${numbersAndNames.join(', ')}`;
};
