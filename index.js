function takeANumber(katzDeli, name) {
  katzDeli.push(name)
  let line = katzDeli.length;

  return `Welcome, ${name}. You are number ${line} in line.`
}


function nowServing(deliLine) {
  if (deliLine <= 0) {
    return "There is nobody waiting to be served!"
  } else {
    let name = deliLine.splice(0, 1)
    return `Currently serving ${name}.`
    }
}

function currentLine(deliLine) {
  if (deliLine <= 0) {
    return "The line is currently empty."
  } else {
    return `The line is currently: 1. ${deliLine[0]}, 2. ${deliLine[1]}, 3. ${deliLine[2]}`
  }
}
