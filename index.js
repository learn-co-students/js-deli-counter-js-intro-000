function takeANumber (katzDeliLine, newName) {
  katzDeliLine.push(newName);
  return "Welcome, " + newName + ". You are number " + katzDeliLine.length + " in line.";
}

function nowServing (katzDeliLine) {
  if(katzDeliLine.length <= 0) {
    var result = "There is nobody waiting to be served!";
  }
  else {
        var result = "Currently serving " + katzDeliLine[0] + ".";
        katzDeliLine.shift();
  }
  return result;
}

function currentLine (katzDeliLine) {
  if (katzDeliLine.length > 0) {
      var curLine = [];
    for(var x = 0; x < katzDeliLine.length; x++) {
      curLine.push(' ' + (x + 1) + '. ' + katzDeliLine[x])
          }
        }
    else {
      return "The line is currently empty.";
    }
    return "The line is currently:" + curLine;
  }
