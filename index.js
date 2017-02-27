function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(deliLine) {
  var line = []
  line.unshift(deliLine[0])
  if (deliLine.length === 0) {
    return "There is nobody waiting to be served!"
    } else {
      deliLine.shift([0])
      return `Currently serving ${line[0]}.`
      }
}

function currentLine(line) {
  var array = [];
  if (line.length === 0) {
    return "The line is currently empty.";
    } else {
      for (var i = 1, j = line.length + 1; i < j; ++i) {
        array.push(`${i}. ${line[i-1]}`);
        }
      }
  return `The line is currently: ${array.join(", ")}`
}
