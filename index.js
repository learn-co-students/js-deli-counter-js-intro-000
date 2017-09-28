function takeANumber(line, name) {
  var someDeli = line.push(name);
  var goodDeli = `Welcome, ${name}. You are number ${line.length} in line.`;
  return goodDeli;
}
function nowServing(line) {
  var someLine = [];
  for (let i = 0; i < line.length; i++) {
    var first = line.splice(0, 1);
    someLine.push(`Currently serving ${first}.`);
    return someLine;
  }
  return "There is nobody waiting to be served!";
}
function currentLine(line) {
  if(!line.length) {
    return "The line is currently empty.";
  }
  var lineUpdate = [];
  for (let i = 0; i < line.length; i++) {
  lineUpdate.push(i+1 + ". " + line[i]); }
console.log("The line is currently: " + lineUpdate)
return "The line is currently: " + lineUpdate.join(', ');
}
