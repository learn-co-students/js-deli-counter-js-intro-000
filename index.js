var katzDeliLine = [];

function takeANumber(linePosition, custName) {
    linePosition.push(custName)
    return `Welcome, ${custName}. You are number ${linePosition.length} in line.`
  };


function nowServing(katzDeliLine) {
  if (!katzDeliLine.length) {
    return "There is nobody waiting to be served!"
  } else

  return `Currently serving ${katzDeliLine.shift()}.`
};


function currentLine(line) {
  if (!line.length) {
    return "The line is currently empty."
  }

const namesNumbers = []

for (let i = 0, l = line.length; i < l; i++) {
  namesNumbers.push(`${i + 1}. ${line[i]}`)
}

return `The line is currently: ${namesNumbers.join(', ')}`
};
