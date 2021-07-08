var katzDeli = [];

function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name);
return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
  
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!";
  } else {
  var next = katzDeliLine[0];
  katzDeliLine.shift();
  return `Currently serving ${next}.`;
  }

}

function currentLine(katzDeliLine){
  if(katzDeliLine.length < 1){
    return "The line is currently empty."
  }
  else {
    var message = "The line is currently: 1. " + katzDeliLine[0];
    for(let i = 1; i < katzDeliLine.length; i++){
      message = message + ", " + i + ". " katzDeliLine[i];
    }
    return message;
    
  }
  
}