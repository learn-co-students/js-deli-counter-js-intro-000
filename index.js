// deli takeANumber adds a person to the line
// deli takeANumber appends the person the end of the line if there are already people on it
// deli takeANumber properly handles multiple people being added
var katzDeliLine = [];
function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return(`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`);
}

// deli nowServing returns the line is empty when no on is on line
// deli nowServing returns an announcement about the person it is serving, and shifts the line
function nowServing(katzDeliLine) {
  var name = katzDeliLine[0];
  if(katzDeliLine.length === 0) {
    return("There is nobody waiting to be served!");
  } else {
    katzDeliLine.shift();
    return(`Currently serving ${name}.`);
  }
}

// deli currentLine(line) returns "The line is currently empty." if no one is in line
// deli currentLine(line) says who is in line when there are people waiting
function currentLine(katzDeliLine) {
  var line = [];
  for(let i = 0; i < katzDeliLine.length; i++) {
    line.push(` ` + [i + 1] + `. ` + katzDeliLine[i]);
  }

  if(katzDeliLine.length === 0) {
    return("The line is currently empty.");
  } else {
    return(`The line is currently:${line}`);
  }
}
