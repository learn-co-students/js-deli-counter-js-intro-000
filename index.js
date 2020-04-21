function takeANumber(l, n) {
  l.push(n)
  return `Welcome, ${n}. You are number ${l.length} in line.`
}

function nowServing(l) {
  if (l.length > 0) {
    var serving = l[0]
    l.shift()
    return `Currently serving ${serving}.`
  }
  else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(l) {
  if (l.length > 0) {
    var result = 'The line is currently:'

    for (var i = 0; i < l.length - 1; i++) {
      result += ` ${i + 1}. ${l[i]},`
    }
result += ` ${l.length - 1 + 1}. ${l[l.length - 1]}`
    return result
  }
  else {
    return "The line is currently empty."
  }
}
