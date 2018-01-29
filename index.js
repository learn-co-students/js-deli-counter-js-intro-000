var katzDeli = [];

function takeANumber(katzDeliLine, newPerson) {
  katzDeliLine.push(newPerson);
  return `Welcome, ${newPerson}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var serving = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${serving}.`;
  }
}



function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else {
    function loopLine() {
      var array = new Array;

      for (var i = 0; i < katzDeliLine.length; i++) {
        array.push(` ${i + 1}. ${katzDeliLine[i]}`);
      }

      return array;
    }
  return `The line is currently:${loopLine()}`;
  }
}
