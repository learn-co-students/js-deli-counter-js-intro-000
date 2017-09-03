function takeANumber(deliLine, name){
  deliLine.push(name);
  return `Welcome, ${name}. You are number ${deliLine.length} in line.`;
}

function nowServing(deliLine){
  if(deliLine.length<1){
    return "There is nobody waiting to be served!";
  } else {
    var serving = deliLine.shift();
    return `Currently serving ${serving}.`;
  }
}

function currentLine(line){
  if(line.length<1){
    return "The line is currently empty.";
  } else {
    var str = "The line is currently:";
    for(var i=0; i<line.length; i++){
      var currentPos = i + 1;
      str += " " + currentPos + ". " + line[i];
      if(currentPos < line.length) str += ",";
    }
  }
  return str;
}
