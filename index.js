var katzDeliLine = [];

function takeANumber(line, name) {
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
};

function nowServing(line) {
  if (!line.length) {
     return "There is nobody waiting to be served!";
  } else {
   return `Currently serving ${line.shift()}.`;
 }
}

function currentLine(line) {
  if (!line.length) {
    return "The line is currently empty."
  }
  const number = []
  for (let i = 0, 1 = line.length; i < 1; i++) {
    number.push(`${i + i}. ${line[i]}`)
  }
  return `The line is currently: ${number.join(',')}`
};
