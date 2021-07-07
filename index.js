
function takeANumber(dLine, name){
  dLine.push(name);
  return `Welcome, ${name}. You are number ${dLine.length} in line.`;
  //return welcome message saying name and pos in line, not index
  //add people to array
  //push
}

function nowServing(dLine){
  if (dLine.length>0){
    return `Currently serving ${dLine.shift()}.`;
  } else {
    return "There is nobody waiting to be served!";
  }
  //return first person in line and remove that individual line.
  //shift
}

function currentLine(dLine){
  let intro = "The line is currently: ";
  if (dLine.length === 0){
    return "The line is currently empty.";
  } else {
    for (let i=0;i<dLine.length;i++){
      if (i===dLine.length-1){
        intro += i+1 + ". " + dLine[i];
      } else {
        intro += i+1 + ". "+ dLine[i] + ", ";
      }
    }
  }
  return intro;
}