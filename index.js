var katzDeli = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length > 0){
    var firstInLine = katzDeliLine[0];
    katzDeliLine.shift();
    return "Currently serving "+firstInLine+".";
  }else {
    return "There is nobody waiting to be served!";
  }
}
function currentLine(line){
  if(line.length === 0){
    return "The line is currently empty."
  }else{
    var temp = "";
    for (var i = 0; i < line.length - 1; i++) {
      temp = temp + " " + [i + 1] + ". " + line[i] + ",";
    }
    temp = temp + " " + [i + 1] + ". " + line[i]; 
    return "The line is currently:" + temp;
  }
}
