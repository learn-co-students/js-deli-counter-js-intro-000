var katzDeli = [];
function takeANumber(katzDeliLine, name) {
  var line = katzDeliLine.length
  katzDeliLine.push(name);
  if(line === 0) {
    return `Welcome, ${katzDeliLine[0]}. You are number 1 in line.`
  } else {
    return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
  }
}
function nowServing(line) {
  if(line.length === 0) {
  return 'There is nobody waiting to be served!';
  } else {
  var nowLine =  `Currently serving ${line[0]}.`;
  line.shift();
  return nowLine;
  }
}
function currentLine(line) {
  var name = '';
  if(line.length === 0) {
  return 'The line is currently empty.'
} else {
  for(var i = 1; line.length > i; i++){
  name = name + `, ${i + 1}. ${line[i]}`
}
  return `The line is currently: 1. ${line[0]}${name}`
}
}
