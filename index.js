var katzDeliLine= [];
// beginning of day zero ppl in line

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(`${name}`);
  return (`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`);
}


function nowServing(katzDeliLine) {
  if (katzDeliLine.length==0) {
    return ("There is nobody waiting to be served!")
  }
  else {
  return (`Currently serving ${katzDeliLine.shift()}.`);
}
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length==0) {
    return ("The line is currently empty.");
  }
  else {
    var i=0;
    return (`The line is currently: ${i+1}. ${katzDeliLine[i]}, ${i+2}. ${katzDeliLine[i+1]}, ${i+3}. ${katzDeliLine[i+2]}`);
  }
}
