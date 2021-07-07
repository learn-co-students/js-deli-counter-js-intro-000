function takeANumber (KatzDeliLine, Name) {
  var position = KatzDeliLine.length+1;
  KatzDeliLine.push(Name);
  return `Welcome, ${Name}. You are number ${position} in line.`
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length > 0) return `Currently serving ${katzDeliLine.shift()}.`;
  else return "There is nobody waiting to be served!";
}

function currentLine(line) {
  var lineNum = [];
  if (line.length == 0) {
    return "The line is currently empty.";
  }
  for (var i = 0; i < line.length; i++) {
    lineNum.push(` ${i+1}. ${line[i]}`);
 }
  return "The line is currently:" + lineNum;
}
