var katzDeli = []

function takeANumber(katzDeli, name) {
  katzDeli.push(name);
  return `Welcome, ${name}. You are number ${katzDeli.length} in line.`
}

function nowServing(katzDeli) {
  if (katzDeli.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${katzDeli.shift()}.`;
  }
}

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty."
  } else {
    var nan = []
    for(let i = 0, l = line.length; i < l; i++) {
       nan.push(`${i+1}. ${line[i]}`)
    }
    return `The line is currently: ${nan.join(", ")}`
  }
}
