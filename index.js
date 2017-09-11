function takeANumber(katzDeliLine,personName){
katzDeliLine.push(personName);
return "Welcome, "+personName+"."+ " You are number "+katzDeliLine.length+" in line."
}


function nowServing(KatzDeliLine){
  if(KatzDeliLine.length>0){
    var person=KatzDeliLine[0];
    KatzDeliLine.shift();
    return "Currently serving "+person+".";
  }

  else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line){
  if(line.length>0){
    var result="The line is currently: ";
    for (let i=0;i<(line.length-1);i++){
      let index=i+1;
      result=result+index+". "+line[i]+", ";
    }
    result=result+line.length+". "+line[line.length-1];

    return result;

  }

  else {

      return "The line is currently empty.";

  }
}
