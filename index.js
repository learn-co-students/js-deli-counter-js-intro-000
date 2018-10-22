function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}

function nowServing(line) {
  // if (!line.length) {
  //   return "There is nobody waiting to be served!";
  // }
  return line.length > 0 ? `Currently serving ${line.shift()}.` : "There is nobody waiting to be served!";
}

function currentLine(line) {
  // return line.length = 0 ? "There is nobody waiting to be served!" :
  // for (let i = 0; i < line.length; i++)
  if (!line.length) {
    return "The line is currently empty."
  }
  const numbersAndNames = []
  for (let i = 0, l = line.length; i < l; i++) {
    numbersAndNames.push(`${i + 1}. ${line[i]}`)
  }

  return `The line is currently: ${numbersAndNames.join(', ')}`
}
