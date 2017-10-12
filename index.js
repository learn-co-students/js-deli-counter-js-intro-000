var katzDeli = []

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return "Welcome, " + name + ". You are number " + (katzDeliLine.length) + " in line."
}

function nowServing(line) {
  if (line.length > 0) {
    var serving = "Currently serving " + line[0]+ "."
    line.shift()
    return serving
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line) {
  var lineArray = []
  if (line.length > 0) {
    for (var i = 0; i < line.length; i++) {
      lineArray.push(" " + (i + 1) + ". " + line[i])
    }
    return "The line is currently:" + lineArray
  } else {
    return "The line is currently empty."
  }
}
