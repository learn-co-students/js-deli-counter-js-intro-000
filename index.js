//var katzDeli = [];
var katzDeliLine = [];
function takeANumber(line, name){
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`
};

function nowServing(line){
  if (line.length !== 0){
    var beingServed = [];
    beingServed.push(line[0]);
    line.shift();
    return `Currently serving ${beingServed[0]}.`
  }
  else{
    return "There is nobody waiting to be served!"
  }
};

function currentLine(line){
  var numberedLine = [];
  if (line.length !== 0){
    for (var i = 0; i < line.length; i++){
      if (i === 0) {
      numberedLine.push(`${i+1}. ${line[i]}`);
    }
    else {
      numberedLine.push(` ${i+1}. ${line[i]}`);
    }
  }
  return `The line is currently: ${numberedLine}`;
}
else {
  return "The line is currently empty."
}
};
