var katzDeliLine = [];

function takeANumber(katzDeliLine,newPerson){
  katzDeliLine.push(newPerson);
  return `Welcome, ${newPerson}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length===0){
    return "There is nobody waiting to be served!"
  }
  else{
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
}

function currentLine(katzDeliLine){
  if(katzDeliLine.length===0){
    return "The line is currently empty."
  }
  else{
    var output = 'The line is currently: ';
    var i=0;
    while(i<katzDeliLine.length){
      output = output + `${i+1}. ${katzDeliLine[i]}`
      i++;
      if(i<katzDeliLine.length){
        output = output + `, `
      }
    }
    return output;
  }
}
