var katzDeliLine = [];

function takeANumber(katzDeliLine, person) {
  katzDeliLine.push(person);
  var number = katzDeliLine.length;
  return `Welcome, ${person}. You are number ${number} in line.`
}


function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var serving = `Currently serving ${katzDeliLine[0]}.`;
    katzDeliLine.shift();
    return serving;
  } else {
    return `There is nobody waiting to be served!`;
  }
}

function currentLine(katzDeliLine) {
  var array = [];
  if (katzDeliLine.length === 0) {
    return `The line is currently empty.`;
  } else {
    for (var i = 0; i < katzDeliLine.length; i++) {
      array.push([i + 1] + ". " + katzDeliLine[i]);
    }
  } return "The line is currently: " + array.join(', ');
}
