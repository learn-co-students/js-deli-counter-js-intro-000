var katzDeli = [];
function takeANumber(katzDeliLine, newPerson){
  katzDeliLine.push(newPerson);
  return "Welcome, "+newPerson+". You are number "+katzDeliLine.length+" in line.";
}
function nowServing(katzDeliLine){
  var nextPerson;
  if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!";
  }else{
    nextPerson = katzDeliLine[0];
    katzDeliLine.shift();
    return nextPerson;
  }
}


function currentLine(line){
  if(line.length===0){
    return "The line is currently empty.";
  }else{
    var i = 0;
    var returnString = "The line is currently:";
    while(i<line.length){
      returnString += " " + (i+1) + ". " + line[i];
    }
    return returnString;
  }
}
