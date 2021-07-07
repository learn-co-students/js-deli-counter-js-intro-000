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
function  currentLine (katzDeliLine) {
  if (katzDeliLine.length===0) {
  return "The line is currently empty.";
}
   let customerNumber = [];
   for (var i = 0; i<katzDeliLine.length; i++) {
   customerNumber.push(`${i+1}. ${katzDeliLine[i]}`)
}
  return "The line is currently: " + customerNumber.join(", ");
}
