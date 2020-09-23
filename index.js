function takeANumber(line, name) {
line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line) {
  let i = 0
let n = []
  if(line.length < 1) {
    n.push("There is nobody waiting to be served!")
  } else {
    n.push(`Currently serving ${line.shift()}.`)
  }
  return n
}

function currentLine(line) {
  if (line.length < 1) {
    return "The line is currently empty."
  } else {
    let n = `1. ${line[0]}`
    for (let i = 1 ; i < line.length; i++) {
     n = n + `, ${i+1}. ${line[i]}`
}
    return `The line is currently: ${n}`
  }
}
