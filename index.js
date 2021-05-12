var katzDeliLine = [];
function takeANumber(katzDeli, name){
  katzDeli.push(`${name}`)
  return (`Welcome, ${name}. You are number ${katzDeli.length} in line.`)
}

function nowServing(katzDeli){
  let i = 0
  while (i < katzDeli.length) {
    i++;
  }
  if (katzDeli.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else {
    return (`Currently serving ${katzDeli.shift()}.`);
  }
}

var line = [];
function currentLine(katzDeli) {
  for (let i = 0; i < katzDeli.length; i++) {
    line.push(` `+ [i+1] + `. ` + katzDeli[i])
  }
  if (katzDeli.length === 0) {
    return "The line is currently empty.";
  } else
    return (`The line is currently:` + line);
}
//Need to review this lab again at some point
//Came up with above and got help with making below
function currentLine(katzDeliLine){
  var len = katzDeliLine.length;
  var output;
  if(len===0){
    output = "The line is currently empty.";
  }
  else{
    output = "The line is currently: ";
    output = output.concat(1,". ",katzDeliLine[0])
    for(let i = 1; i < len; i++){
      output = output.concat(", ",i + 1,". ",katzDeliLine[i])
    }
  }
  return output
}
