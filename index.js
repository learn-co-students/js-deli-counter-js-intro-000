var katzDeliLine = [];

function takeANumber(currentLine, name){
  currentLine.push(name);
  return `Welcome, ${name}. You are number ${currentLine.length} in line.`;
}

function nowServing(currentLine){
  if(currentLine.length === 0){
    return `There is nobody waiting to be served!`;
  }
  else{
    var name = currentLine[0];
    //Grab 1 element from index 0
    currentLine.splice(0, 1);
    return `Currently serving ${name}.`;
  }
}

function currentLine(currentLine){
  var line = [];
  if(currentLine.length === 0){
    return `The line is currently empty.`;
  }
  else{
    for(let i = 0; i < currentLine.length; i++){
      line.push(` ${i+1}. ${currentLine[i]}`)
    }
    return `The line is currently:${line}`;
  }
}



