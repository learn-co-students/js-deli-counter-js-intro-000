function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
  if(katzDeliLine[0] === undefined){
    return 'There is nobody waiting to be served!'
  }
  else{
      var a = katzDeliLine.shift();
    return `Currently serving ${a}.`
    }
}

function currentLine(katzDeliLine){
  if(katzDeliLine[0] === undefined){
    return "The line is currently empty."
  }
  else{
    for(var i=0; i<katzDeliLine.length; i++){
      katzDeliLine[i] = ` ${i+1}. ${katzDeliLine[i]}`;
      }
    return `The line is currently:${katzDeliLine}`
  }
}
