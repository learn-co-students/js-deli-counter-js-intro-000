
var katzDeliLine = [];
function takeANumber(katzDeli, name){
  katzDeli.push(`${name}`)
  return (`Welcome, ${name}. You are number ${katzDeli.length} in line.`)
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return "Currently serving " + katzDeliLine.shift() + ".";
  } else {
      return "There is nobody waiting to be served!";
  }
}

Function currentLine(katzDeli){
  if (katzDeli.length > 0){
    var outputString = "";
    for( var i=0; i < katzDeli.length; i++) {
      outputString += (i+1) + "." +katzDeli[i] + ",";
    }
  outputString = outputString.slcie(0,-2);
  return `The line is currently: ${outputString}`;
} else{
    return "the line is currently empty."
  }
}
