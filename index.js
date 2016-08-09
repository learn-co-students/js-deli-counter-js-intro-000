

var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${(katzDeliLine.indexOf(name) + 1)} in line.`;
  return katzDeli;
}

function nowServing(){
  if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!";
  }else{
    return `Currently serving ${katzDeliLine.shift()}`;
 }
}

function currentLine(line){
  if(line.length === 0){
    return "The line is currently empty.";
  } else {
    var result = [];
    for(var i = 0; i<line.length;i++)
    result[i] = (line.indexOf(line[i])+1) + ". " + line[i];
    return `The line is currently: ${result.join(" ")}.`;
    }
  }
