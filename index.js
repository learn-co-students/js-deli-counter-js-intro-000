function takeANumber(line, name) {
  line.push(name)

  return `Welcome, ${name}. You are number ${line.length} in line.`
};

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty."
  }
  const peopleInLine = []

  for (let i = 0, l = line.length; i < l; i++) {
    peopleInLine.push(`${i + 1}. ${line[i]}`)
  }

  return `The line is currently: ${peopleInLine.join(', ')}`
}


function nowServing(currentLine) {
  if (currentLine.length > 0){
    return `Currently serving ${currentLine.shift()}.`
  } else {
    return "There is nobody waiting to be served!"
  }
}
