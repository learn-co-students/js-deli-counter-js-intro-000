var katzDeli = [];

function takeANumber(line, name) {
  line.push(name)
  return "Welcome, " + name + "." + " You are number " + line.length + " in line."
}

function nowServing(line) {
  return line.length > 0 ? "Currently serving " + line.shift() + "." : "There is nobody waiting to be served!"
}

function currentLine(line) {
  var lineString = ""
  for (let i = 1; i <= line.length; i++) {
    i < line.length ? lineString += i + ". " + line[i - 1] + ", "  : lineString += i + ". " + line[i - 1]
  }
  return line.length > 0 ? "The line is currently: " + lineString : "The line is currently empty."
}
