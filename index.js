function takeANumber(katzDeliLine, name) {
  katzDeliLine.push (name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(line, name) {
  if (line.length > 0) {
    var line1 = line.slice(0, 1);
    line.shift();
    return `Currently serving ${line1}.`
  }
  else {
    return `There is nobody waiting to be served!`
  }
}

function currentLine (line) {
var array = []
  if (line.length > 0) {
    for (var i = 0; i < line.length; i++) {
    array.push (` ${i + 1}. ${line[i]}`)
        }
        return `The line is currently:${array}`
      }
    else {
      return `The line is currently empty.`
          }
}