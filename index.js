// I am just saying, I don't know where these people will actually be in line. But I'll leave them here since I don't want them to think I forgot about them.

var katzDeli = [];
var name = ["Ada", "Grace", "Kent"]
var deliLine = ["Steven", "Blake", "Avi"]
var katzDeliLine = ["Bill", "Jane", "Ann"]

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
}
var line = [];

function currentLine(katzDeliLine) {
  let i = 0;
  while (i < katzDeliLine.length) {
    line.push(` ` + [i + 1] + `. ` + katzDeliLine[i]);
    i++;
  }
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else {
    return(`The line is currently:` + line)
  }
}
