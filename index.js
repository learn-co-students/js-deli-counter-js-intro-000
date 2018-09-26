function takeANumber(line, newName){
  line.push(newName);
  return `Welcome, ${newName}. You are number ${line.length} in line.`
}

function nowServing(line){
  if (line.length > 0){
    return `Currently serving ${line.shift()}.`;
  } else {
    return `There is nobody waiting to be served!`
  }
}

function currentLine(line){
  var lineString = "The line is currently empty.";
  if (line.length > 0){
    lineString = "The line is currently: "
    for (var i = 0; i < line.length; i++){
      lineString += `${i+1}. ${line[i]}, `
    }
    lineString = lineString.slice(0,-2);
  }
  return lineString;
}
