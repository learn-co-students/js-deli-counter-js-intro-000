function takeANumber (katzDeliLine, name){
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function currentLine (katzDeliLine){
  var response = "The line is currently:";
  for (var stander in katzDeliLine){
    stander = parseInt(stander, 10) + 1;
    response += stander === katzDeliLine.length ? ` ${stander}. ${katzDeliLine[stander-1]}` : ` ${stander}. ${katzDeliLine[stander-1]},`;
  }
  return katzDeliLine.length > 0 ? response : "The line is currently empty.";
}

function nowServing (katzDeliLine){
  return katzDeliLine.length > 0 ? `Currently serving ${katzDeliLine.shift()}.` : "There is nobody waiting to be served!";
}
