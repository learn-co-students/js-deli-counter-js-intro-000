var katzDeli = []
var katzDeliLine = [];

function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line) {
  if(line.length < 1) {
    return ("There is nobody waiting to be served!")
  } else {
  return ("Currently serving " + line.shift() + ".")
  }
}

function currentLine(line) {
  if(line.length < 1) {
    return "The line is currently empty."
  } 
  var nameNum = [];
  for (var i = 0; i < line.length; i++) {
    nameNum.push(`${i + 1}. ${line[i]}`);
  }
    return `The line is currently: ${nameNum.join(', ')}`
}