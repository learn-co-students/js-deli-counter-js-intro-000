var katzDeli = [];
var katzDeliLine = [];

function takeANumber(line, name) {
  var n = line.length + 1;
  line.push(name);
  return "Welcome, " + name + ". You are number " + n + " in line.";

}

function nowServing(line) {
  if(line.length > 0) {
    var helping = line["0"];
    line.shift(helping)
    return "Currently serving " + helping + ".";
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(line) {
  var waiting = []
  if (line.length > 0) {
    for (var i = 0; i < line.length; i++) {
      waiting.push(`${i + 1}. ${line[i]}`);
    }
    return `The line is currently: ${waiting.join(', ')}`
  } else {
    return "The line is currently empty.";
  }
}
