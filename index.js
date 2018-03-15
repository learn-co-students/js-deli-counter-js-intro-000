function takeANumber(katzDeli, name) {
  katzDeli.push(name)
  return `Welcome, ${name}. You are number ${katzDeli.length} in line.`
}

function nowServing(katzDeli) {
  if (katzDeli.length === 0) {
    return "There is nobody waiting to be served!"
  }
  else {
    return `Currently serving ${katzDeli.shift()}.`
  }
}

function currentLine(katzDeli) {
  var str = "The line is currently"
  if (katzDeli.length === 0) {
    return `${str} empty.`
  }
  else {
    str += `: 1. ${katzDeli[0]}`
    let i = 1
    while (i < katzDeli.length) {
      str += `, ${i + 1}. ${katzDeli[i]}`
      i += 1
    }
    return str
  }
}
