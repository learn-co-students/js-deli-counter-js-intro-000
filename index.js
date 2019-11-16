function takeANumber(line, name){
  var position = line.length+1;
  line.push(name);
  return `Welcome, ${name}. You are number ${position} in line.`;
}


function nowServing(line){
  return (line.length > 0 ? `Currently serving ${line.shift()}.` : "There is nobody waiting to be served!");
}

/* ALT METHOD ---
function nowServing(line){
  if(line.length>0){
    return `Currently serving ${line.shift()}.`;
  } 
  return "There is nobody waiting to be served!";
}
*/

function currentLine(line){
  var numberedLine = [];
  line.forEach(name => numberedLine.push(` ${line.indexOf(name)+1}. ${name}`));
  if(line.length>0){
    return `The line is currently:${numberedLine.toString()}`;
  } else {
    return "The line is currently empty.";
  }
}

/* ALT METHOD ---
function currentLine(line){
  var numberedLine = [];
  for (var element of line){
    numberedLine.push(` ${line.indexOf(element)+1}. ${element}`);
  }
  if(line.length>0){
    return "The line is currently:" + numberedLine.toString();
  } else {
    return "The line is currently empty.";
  }
}
*/