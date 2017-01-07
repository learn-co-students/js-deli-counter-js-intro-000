var katzDeli = [ ];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  var position = katzDeliLine.indexOf(name) + 1
  return "Welcome, " + name + ". You are number " + position + " in line."
}

function nowServing(katzDeliLine) {
  var first = katzDeliLine[0];
  if (katzDeliLine.length == 0) {
    return "There is nobody waiting to be served!";
  } else {
    katzDeliLine.shift();
    return `Currently serving ${first}.`
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length ==0) {
    return "The line is currently empty."
  } else {
  return `The line is currently: 1. ${katzDeliLine[0]}, 2. ${katzDeliLine[1]}, 3. ${katzDeliLine[2]}`
}
}
