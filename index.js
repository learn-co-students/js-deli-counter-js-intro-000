var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
 if(katzDeliLine.length > 0) {
 return `Currently serving ${katzDeliLine.shift()}.`;
 } else {
     return "There is nobody waiting to be served!";
}
}
nowServing(katzDeliLine);

function currentLine(katzDeliLine){
  if(katzDeliLine.length > 0) {
    var newLine = "The line is currently: ";
    for(let i = 0; i < katzDeliLine.length; i++){
      if(i === 0) {
        newLine = newLine + `${i+1}. ${katzDeliLine[i]}`;
      } else {
        newLine = newLine + `, ${(i+1)}. ${katzDeliLine[i]}`;
             }
 }
 return newLine;
  } else {
    return "The line is currently empty."
  }
}
