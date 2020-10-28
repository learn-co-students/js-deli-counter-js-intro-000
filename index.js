function takeANumber(katzDeliLine,newName) {
  katzDeliLine.push(newName);
  return (`Welcome, ` + newName +`. You are number ${katzDeliLine.length} in line.`)
}

function nowServing(katzDeliLine) {
  var outputString;
  if (katzDeliLine.length == 0) {
    outputString ="There is nobody waiting to be served!"
}
    else { outputString = "Currently serving " + katzDeliLine[0]+".";
   katzDeliLine.shift()
 }
  return outputString;
}

function currentLine(katzDeliLine){
var outputString;
  if (katzDeliLine == 0){
    outputString = "The line is currently empty."}
    else{
      outputString = "The line is currently: "
    for (var i=0; i < katzDeliLine.length;i++){
      if(i == 0){
        outputString=outputString +(i+1)+". "+katzDeliLine[i];
      }
  else {
    outputString=outputString +", " +(i+1)+". "+katzDeliLine[i];
  }
  }
  }
  return outputString
}
