function takeANumber(line, person) {
  line.push(person)
  return `Welcome, ${person}. You are number ${line.length} in line.`
}

function nowServing(line) {
  var retString = ""

  if (line.length === 0) {
    retString = "There is nobody waiting to be served!"
  }
  else {
    retString = `Currently serving ${line[0]}.`
    line.shift()
  }

  return retString
}

function currentLine(line) {
  var lineLength = line.length
  var retString = ""

  if (line.length === 0) {
    retString = "The line is currently empty."
  }
  else {
    retString = "The line is currently:"

    for (var i=0; i<lineLength; i++) {
      if (i>0) {
        retString = retString + ","
      }
      retString = retString + ` ${(i+1)}. ${line[i]}`
    }
  }

  return retString
}
