function currentLine(line) {
  if (!line.length) {
    return "The line is currently empty."
  }

  const numbersAndNames = []

  for (let i = 0, l = line.length; i < l; i++) {
    numbersAndNames.push(`${i + 1}. ${line[i]}`)
  }

  /* Keep in mind, join() is a a shorthand for looping and building
   * into a String. */
  return `The line is currently: ${numbersAndNames.join(', ')}`
};

function nowServing(line) {
  if (!line.length) {
    return "There is nobody waiting to be served!"
  }

  return `Currently serving ${line.shift()}.`
};

function takeANumber(line, name) {
  line.push(name)

  return `Welcome, ${name}. You are number ${line.length} in line.`
};

/* var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);            //pushes the new name to the end of the empty array
  return("Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.");
}

function nowServing(katzDeliLine) {
  if (katzDeliLine < 1) {
    return ("There is nobody waiting to be served!");
  } else {
    return ("Currently serving " + katzDeliLine.shift() + ".");
  }
}

function currentLine (katzDeliLine) {
  if (katzDeliLine < 1) {
    return("The line is currently empty.")
  }else {
    return("The line is currently: 1. " + katzDeliLine[0] + ", 2. " + katzDeliLine[1] + ", 3. " + katzDeliLine[2]);
  }
}
*/
