
function takeANumber(line, name) {
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}


function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!"
  }
  else {
    var firstPerson = line[0];
    line.shift()
    return `Currently serving ${firstPerson}.`;
  }
}


function currentLine(line) {
  const num = line.length;
  const numbered = [];
  let i = 0;
  let n = 1;

  if (num === 0) {
    return "The line is currently empty."
  }
  else {
    while (i < num) {
      numbered.push(` ${n}. ${line[i]}`)
      n++
      i++
    }
  }
  return "The line is currently:" + numbered
}
