var katsDeliLine = [];

function takeANumber (katsDeliLine, name) {
  katsDeliLine.push(name);
  return "Welcome, " + name + ". You are number " + katsDeliLine.length + " in line.";
}

function nowServing (katsDeliLine) {
  if (katsDeliLine.length > 0) {
    return "Currently serving " + katsDeliLine.shift() + ".";
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine (katsDeliLine) {

  if (katsDeliLine.length === 0) {
    return "The line is currently empty."
  }

  var nameNumbers = []

  for (var i = 0; i < katsDeliLine.length; i++) {
  nameNumbers.push((i + 1) + ". " + katsDeliLine[i])
  }
   return "The line is currently: " + nameNumbers.join(', ')
}
