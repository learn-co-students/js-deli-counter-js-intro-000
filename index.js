function takeANumber(deliLine, name) {
  deliLine.push(name);
  return "Welcome, " + name + ". You are number " + deliLine.length + " in line."
}

function nowServing(deliLine) {
  if (deliLine.length > 0) {
    var next = deliLine[0];
    deliLine.shift();
    return "Currently serving " + next + "."
  }
  else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(deliLine) {
  var line = "The line is currently:";
  if (deliLine.length == 0) {
    return "The line is currently empty."
    }
  else {
    for (let i = 0; i < deliLine.length; i++) {
      var j = i +  1;
      line += " " + j + ". " + deliLine[i] + ",";
    }
    return line.slice(0,-1)
  }
}
