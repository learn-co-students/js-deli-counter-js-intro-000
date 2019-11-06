
function takeANumber(lineArr, name) {
  lineArr.push(name)
  return `Welcome, ${name}. You are number ${lineArr.length} in line.`
}

function nowServing(lineArr) {
  if (lineArr.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var name = lineArr.shift()
    return `Currently serving ${name}.`
  }
}

function currentLine(lineArr) {
  if (lineArr.length === 0) {
    return "The line is currently empty."
  } else {
    var line = ""
    for (var i = 0; i < lineArr.length - 1; i++) {
      line = line + (i + 1) + ". " + lineArr[i] + ", "
    }
    return "The line is currently: " + line + (i + 1) + ". " + lineArr[i]
  }
}
