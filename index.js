function takeANumber(line, name) {
  line.push(name)
  var string = "Welcome, " + name + ". You are number " + line.length + " in line."
  return string
}

function nowServing(line) {
  if (line.length > 0) {
    var serving = line[0]
    line.shift()
    return "Currently serving " + serving + "."
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line) {
  if (line.length > 0) {
    var output = "The line is currently: "
    for (var i = 0; i < line.length; i++) {
      var j = i + 1
      if (i < line.length - 1) {
        output = output.concat(j + ". " + line[i] + ", ")
      } else {
        output = output.concat(j + ". " + line[i])
      }
    }
    return output
  } else {
    return "The line is currently empty."
  }
}
