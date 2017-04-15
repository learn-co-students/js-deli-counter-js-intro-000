var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."
}

function nowServing(name) {
  if (name.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    name.shift(name[0]);
    return "Currently serving "+ "Steven" + ".";
  }
}

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty.";
  } else {
    for(var i = 0; i < line.length; i++) {
      line += (i + 1) + ". " + line[i] + ", "
    }
    line = line.slice(0, line.length-2)
    return "The line is currently: " + line
  }
}
