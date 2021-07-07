function takeANumber(line, name) {
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line) {
  if (line.length >= 1) {
    return `Currently serving ${line.shift()}.`
  } else {

    return `There is nobody waiting to be served!`
}
}

function currentLine(line) {
  var deliArray = []
  if (line.length > 0) {
    for (let i = 0; i < line.length; i++) {
    deliArray.push(`${i + 1}. ${line[i]}`)
  }
  return `The line is currently: ${deliArray.join(", ")}`
} else {
  return "The line is currently empty."}
}
