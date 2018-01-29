var katzDeli = [];
function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}
function nowServing(katzDeli){
  if (katzDeli.length === 0){
    return "There is nobody waiting to be served!"
  }
  return `Currently serving ${katzDeli.shift()}.`
}
function currentLine(katzDeliLine){
  var currentLine = "The line is currently:";
  if (katzDeliLine.length === 0){
    return "The line is currently empty."
  }
  for (let i = 0; i < katzDeliLine.length;i++){
    currentLine = currentLine.concat(` ${i + 1}. ${katzDeliLine[i]},`)
  }
  currentLine = currentLine.substr(0, currentLine.length -1);
  return currentLine
}

