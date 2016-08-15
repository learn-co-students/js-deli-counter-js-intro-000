var katzDeli = [];

function takeANumber (katzDeliLine, newName) {
  katzDeliLine.push(newName);
  var position = (katzDeliLine.indexOf(newName)+1);
  return "Welcome, " + newName + "." + " You" + " are" + " number " + position + " in" + " line."
}

function nowServing (katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    return "Currently serving " + katzDeliLine.shift() + ".";
  }
}

function currentLine (katzDeliLine) {

  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  }

var NameAndPosition = []
  for (var i = 0; i < katzDeliLine.length; i++) {

    NameAndPosition.push((i+1) + ". " + katzDeliLine[i]);

  }

  return "The line is currently: " + NameAndPosition.join(", ");
};
