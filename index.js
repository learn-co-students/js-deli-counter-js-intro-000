function takeANumber(katzDeliLine, person){
  //var LineNum = LineNum + 1;

  katzDeliLine.push(person);

  var LineNum = katzDeliLine.length;
  return `Welcome, ${person}. You are number ${LineNum} in line.`;
  //return "Welcome, " + person + ". You are number " + LineNum + " in line";
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length > 0){
    var namer = katzDeliLine[0];
    katzDeliLine.shift(0);
    return `Currently serving ` + namer + `.`;
  }
  else if(katzDeliLine.length == 0){
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine){
  if(katzDeliLine.length > 0){
    for(var es = 0; es < katzDeliLine.length; es++){
    }
  }
  else if(katzDeliLine.length == 0){
    return `The line is currently empty.`;
  }

}
