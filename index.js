var katzDeli = [];



function takeANumber(katzDeliLine, name) {
  var len = katzDeliLine.length;
  if(len === 0); {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ` + (len + 1) + " in line."
}
}

function nowServing(name) {
  var len = name.length
  if (len === 3) {
    name.shift(name);
    return "Currently serving " + "Steven" + ".";
  } else {
    return "There is nobody waiting to be served!";
  }
}



function currentLine(line) {
  var len = line.length;
  if(len >= 1) {
    return "The line is currently: 1. " + line[0] + ", 2. " + line[1] + ", 3. " + line[2];
  } else {
    return "The line is currently empty."
  }
}
