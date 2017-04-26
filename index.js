var katzDeli = [];

function takeANumber(line, name) {
  line.push(name);
  var lineLength = line.length;
  return `Welcome, ${name}. You are number ${lineLength++} in line.`
}

function nowServing(line) {
  if(!line.length) {
    return "There is nobody waiting to be served!"
  }
  return `Currently serving ${line.shift()}.`
}

const arr = []
function currentLine(line) {
  if(!line.length) {
    return "The line is currently empty."
  }
  for (let i = 0; i < line.length; i++) {
    arr.push(`${i + 1}. ${line[i]}`)
  }

  return `The line is currently: ${arr.join(", ")}`
}
