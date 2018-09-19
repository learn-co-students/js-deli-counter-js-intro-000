function takeANumber(people, name) {
  people.push(name)
  var lastPosition = people.length
  var message = "Welcome, " + name + ". You are number " + lastPosition + " in line."

  return message
}

function nowServing(katzDeliLine) {

  if (katzDeliLine.length > 0) {
    var name = katzDeliLine[0]
    katzDeliLine.shift()
    return "Currently serving " + name + "."
  }
  else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line) {

  if (line.length === 0) {
    return "The line is currently empty."
  }

  else if (line.length > 0) {
    var list = "The line is currently:"
    var array = []
    for (var i = 0; i < line.length; i++) {
      var x = " " + (i+1) + ". " + line[i] ;
      array.push(x)
    }
  return list + array
  }
}
