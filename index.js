function takeANumber(line, name) {
 line.push(name)
 var pos = line.length
 return `Welcome, ${name}. You are number ${pos} in line.`
}

function nowServing(line) {
  var person = ""
  if (line.length > 0) {
    person = line[0]
    line.shift()
    return `Currently serving ${person}.`
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line) {
  if (line.length < 1) {
    return "The line is currently empty."
  } else {
    var txt = "The line is currently: "
    for (var i = 0, x = 1; i < line.length; i++, x++) {
      if (i > 0) {
        txt = txt + ", "
      }
      txt = txt + x + ". " + line[i]

    }
    return txt
  }
}
