function takeANumber( katzDeliLine, name){
//adds the new name to the array.
  katzDeliLine.push(name);
//tell the new person in line his or her number.
return  `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing (deliLine){
let name;

if(deliLine.length === 0){
  return "There is nobody waiting to be served!"
}

name = deliLine.shift();
return `Currently serving ${name}.`
}

function currentLine(line) {
  let i = 0;
  while (i < line.length) {
    line.push(`${[i+1]}. ${line[i]}`)
    i++;
  }
  if (line.length === 0) {
    return "The line is currently empty.";
  } else
  return(`The line is currently: ${line}`);
}
