function takeANumber(katzDeli, name) {
katzDeli.push (name)
  return `Welcome, ${name}. You are number ${katzDeli.indexOf(name)+1} in line.`
}

function nowServing (deliLine) {
  if (deliLine.length === 0) {
    return "There is nobody waiting to be served!"
  }  else {
    let a = deliLine[0]
    deliLine.shift()
    return `Currently serving ${a}.`
  }
}
function currentLine (newLine) {
  if (newLine.length ===0) {
    return "The line is currently empty."
  } else {
    return `The line is currently: 1. ${newLine[0]}, 2. ${newLine[1]}, 3. ${newLine[2]}`
  }

}
