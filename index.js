var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return "Welcome, "+name+". You are number "+katzDeliLine.length+" in line.";

}

function nowServing(katzDeliLine){
  if(katzDeliLine.length>0){
  return "Currently serving "+katzDeliLine.shift()+".";
} else{
  return "There is nobody waiting to be served!";
}
}

function currentLine(katzDeliLine){
  var line = "The line is currently: ";
  if(katzDeliLine.length>0){
    for(let i=1; i < katzDeliLine.length+1; i++){
      line += ( `${i}. ${katzDeliLine[i-1]}`);
        if(i<katzDeliLine.length){
          line += ", ";
        }
    }
  } else{
    line = ("The line is currently empty.");
  }
return line;

}
