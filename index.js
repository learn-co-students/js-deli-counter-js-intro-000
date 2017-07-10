function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  var found = katzDeliLine.length;
  return `Welcome, ${katzDeliLine[found - 1]}. You are number ${found} in line.`;
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
}

function currentLine(katzDeliLine){
  var msg = "The line is currently: ";
  if(katzDeliLine.length === 0){
    return "The line is currently empty.";
  } else {
    for(var i =0; i < katzDeliLine.length; i++){
      msg += `${i+1}. ${katzDeliLine[i]}`
      if(i < katzDeliLine.length - 1 ){msg += ', ';}
    }
  }
return msg;
}
