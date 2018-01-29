

var takeANumber = function (katzDeliLine, person) {
  katzDeliLine.push(person);
  return `Welcome, ${person}. You are number ${katzDeliLine.length} in line.`;
}

var nowServing = function (katzDeliLine) {
  if (katzDeliLine.length < 1) {
    return "There is nobody waiting to be served!";
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
}




var currentLine = function (katzDeliLine) {
  var array = [];
    for (var i = 0; i < katzDeliLine.length; i++) {
      array.push(`${i + 1}. ${katzDeliLine[i]}`);
  }
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
    return `The line is currently: ${array.join(', ')}`;
  }
}
