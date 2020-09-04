var katzDeliLine = [];

function takeANumber(line, name){
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line) {
  if (line.length===0){
    return "There is nobody waiting to be served!"
  }
  else{
    var temp = line[0];
    line.shift();
    return `Currently serving ${temp}.`
  }
}

function currentLine(line){
  if (line.length===0){
    return "The line is currently empty."
  }
 else{
  var numberAndName = [];
  for(var i=0;line.length>i; i++){
    numberAndName.push(`${i+1}. ${line[i]}`);
  }
  var toPrint = numberAndName.join(', ');
  return `The line is currently: ${toPrint}`
 }
}
