function takeANumber (line, name){
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}
function nowServing(line){
  if (line.length === 0) {
    return "There is nobody waiting to be served!"
  }
return `Currently serving ${line.shift()}.`;
}

function currentLine (deliLine){
  if (deliLine.length === 0){
    return "The line is currently empty.";
  } else {
    var numbersAndNames = [];
    for (var i =0; i <deliLine.length; i++){
      numbersAndNames.push(`${i+1}. ${deliLine[i]}`)
    }
    return `The line is currently: ${numbersAndNames.join(', ')}`;
  }  
}