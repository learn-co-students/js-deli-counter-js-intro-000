var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);            //pushes the new name to the end of the empty array
  return("Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.");
}

function nowServing(katzDeliLine) {
  if (katzDeliLine < 1) {
    return ("There is nobody waiting to be served!");
  } else {
    return ("Currently serving " + katzDeliLine.shift() + ".");
  }
}

function currentLine (katzDeliLine) {
  if (katzDeliLine < 1) {
    return("The line is currently empty.")
  }else {
    return("The line is currently: 1. " + katzDeliLine[0] + ", 2. " + katzDeliLine[1] + ", 3. " + katzDeliLine[2]);
  }
}
