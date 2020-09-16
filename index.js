
function takeANumber (linePos,name){
  linePos.push(name);
  
  return `Welcome, ${name}. You are number ${linePos.length} in line.`;
}
function nowServing(linePos) {
  if (linePos.length > 0) {
    return "Currently serving " + linePos.shift() + ".";
  } else {
      return "There is nobody waiting to be served!";
  }
}
function currentLine(linePos) {
  if (linePos.length > 0) {
    var output = "";
    for(var i = 0; i < linePos.length; i++) {
        output += (i + 1) + ". " + linePos[i] + ", ";
      }
    output = output.slice(0, -2);
    return `The line is currently: ${output}`;
  } else {
    return "The line is currently empty.";
  }
}