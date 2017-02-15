function takeANumber(katzDeliLine, name) {
  var katzDeli = []

  for( var i = 0; i < 1; i++ ) {
    var num = katzDeliLine.length
    var x = num + 1
    var greeting = `Welcome, ${name}. You are number ${x} in line.`
    katzDeli.push(greeting)
    katzDeliLine.push(name)
  }
  return katzDeli
}

function nowServing(katzDeliLine) {
  var x = katzDeliLine.length
  if(x > 0) {
  for(var a = 0; a < x; a++) {
    var serving = `Currently serving ${katzDeliLine[a]}.`
    katzDeliLine.splice(0, 1)
    return serving
  }
} else {
  var noOne = "There is nobody waiting to be served!"
  return noOne
}
}

function currentLine(katzDeliLine) {
  var y = katzDeliLine.length

    if(y > 0) {
      var g = 0
      var people = []
      var allPeople = "The line is currently:"
      for(var i = 0; i < y; i++) {
        g = g + 1
        var addPeople = ` ${g}. ${katzDeliLine[i]}`
        people.push(addPeople)
      }
      return allPeople += (people)
    } else {
      var empty = "The line is currently empty."
      return empty
    }
  }
