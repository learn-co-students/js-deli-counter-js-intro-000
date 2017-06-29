var katzDeli = [];

function takeANumber(array, person) {
  array.push(person)
  var n = array.length

  return "Welcome, " + person + ". You are number " + n + " in line."
}

function nowServing(people) {
  if (people.length > 0 ) {
    var p = people[0]
    people.shift();
    return "Currently serving " + p + "."
  }

  return "There is nobody waiting to be served!"
}

function currentLine(array) {
  var s = "";
  if (array.length === 0) {
    s = "The line is currently empty."
  } else {
    s = "The line is currently: "
    for (var i = 0; i < array.length; i++) {
      let n = i+1
      s += n + ". " + array[i]
      if (i < array.length-1) {
        s += ", "
      }
    }
  }
  return s
}
