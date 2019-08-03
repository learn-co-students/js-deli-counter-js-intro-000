var katzDeli = [];
function takeANumber(line, name) {
  line.push(name);
  return (`Welcome, ${name}. You are number ${line.length} in line.`);
}
function nowServing(line) {
  var customer = line.splice(0, 1);
  if (line.length === 0) {return "There is nobody waiting to be served!"}
  else {return `Currently serving ${customer}.`};
}
function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty."
  } else {
    var lineNames = [];
    for (var i = 0; i < line.length; i++) {
      lineNames.push(i+1 + ". "+ line[i]);
    }
return "The line is currently: " + lineNames.join(", ");
  }
}
