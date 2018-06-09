var katzDeli = [];

function takeANumber(katzDeliLine,newName){
  katzDeliLine.push(newName);
  return `Welcome, ${newName}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!";
  }
  else{
    name = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${name}.`;
  }
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length === 0){
    return "The line is currently empty.";
  }
  else{
    var nameList = "";
    for(var i = 0; i < katzDeliLine.length; i++){
      var number = i + 1;
      var name = katzDeliLine[i];
      if (i === katzDeliLine.length - 1){
        var newName = `${number}. ${name}`;
      }
      else{
        var newName = `${number}. ${name}, `;}
      nameList = nameList + newName;
    }
    return `The line is currently: ${nameList}`;
  }
}
