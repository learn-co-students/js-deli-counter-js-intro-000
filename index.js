var katzDeliLine = [];
var otherDeli = ["Steven", "Blake", "Avi"];

 
function takeANumber(katzDeliLine, otherDeli) {
  katzDeliLine.push(otherDeli);
  return "Welcome, " + otherDeli + ". You are number " + katzDeliLine.length + " in line.";
}

function nowServing(katzDeliLine) {
   if (katzDeliLine.length > 0){
    return `Currently serving ${katzDeliLine.shift()}.`;
  } else if (katzDeliLine <= 0) {
       return "There is nobody waiting to be served!";
    } 
}
  
function currentLine(katzDeliLine) {
  const newLine = [];
  
  if (katzDeliLine <= 0){
    return "The line is currently empty.";
    
  } else {
    for (let i = 0, l = katzDeliLine.length; i < l; i++) {
    newLine.push(`${i + 1}. ${katzDeliLine[i]}`);
  }

  return `The line is currently: ${newLine.join(', ')}`;
}
  }  
  
  
 
  
  