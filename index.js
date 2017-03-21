var katzDeli = [];
var katzDeliLine = [];

var takeANumber = function(katzDeliLine, name) {
  katzDeliLine.push(name);
  return "Welcome, " + name + ". You are number " + (katzDeliLine.length) + " in line."
}

var nowServing = function(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var empty = []
    empty.push(katzDeliLine[0])
    katzDeliLine.shift()
    return "Currently serving " + empty + "."
  } else {
    return "There is nobody waiting to be served!"
  }
}

var currentLine = function(katzDeliLine, name) {
  if (katzDeliLine.length > 0) {
    var empty = []
    for (var i = 0; i < katzDeliLine.length; i++ ) {
      empty.push(" " + (i + 1) + ". " + katzDeliLine[i])
    }
    return "The line is currently:" + empty
  } else {
    return "The line is currently empty."
  }
}
