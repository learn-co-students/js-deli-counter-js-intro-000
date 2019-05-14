function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + 1 + " in line.";
}
function nowServing(katzDeliLine){
  if(katzDeliLine.length >= 0){
    var currentName = "Currently serving" + katzDeliLine[0];
    katzDeliLine.shift();
    return currentName;
  }
  else{
    return "There is nobody waiting in line.";
  }
}
function currentLine(katzDeliLine){
  var line = [];
  for(let i = 0; i < katzDeliLine.length + 1 ; i++;){
    line.push(i + 1 + ". " + katzDeliLine[i]);
  }
  if(katzDeliLine.length == 0){
    return "The line is currently empty.";
  }
  else{
    return "The line is currently " + line
  }
}
