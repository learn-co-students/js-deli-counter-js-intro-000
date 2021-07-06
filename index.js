var katzDeli = [];
function takeANumber(katzDeli, name) {
  katzDeli.push(`${name}`);
  return "Welcome, " + `${name}` + ". You are number " + `${katzDeli.length}` + " in line."
}

var katzDeliLine = []
function nowServing(katzDeliLine) {
  var i = 0;
  while (i <= katzDeliLine.length) {
    if (katzDeliLine.length !== 0) {
    return "Currently serving " + `${katzDeliLine.shift()}` + ".";
    }
    else return "There is nobody waiting to be served!";
  }
}

function currentLine(line) {
  var i = 0
  while (i < line.length) {
    katzDeliLine.push(" " + [i + 1] + ". " + line[i])
    i++;
  }
  if (line.length === 0){
    return "The line is currently empty."
  } else {
    return "The line is currently:" + katzDeliLine;
  }
}
