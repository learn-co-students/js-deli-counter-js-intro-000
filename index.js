function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0)
    return "There is nobody waiting to be served!"
  var first = katzDeliLine[0];
  katzDeliLine.shift();
  return `Currently serving ${first}.`;
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length === 0)
    return "The line is currently empty."
  var line = "The line is currently: ";
  for (let i = 0; i < katzDeliLine.length; i++)
    line += `${i + 1}. ${katzDeliLine[i]}${i < katzDeliLine.length - 1 ? ', ' : ''}`
  return line
}