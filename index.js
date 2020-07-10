function takeANumber(currentLine,newName){
  if (currentLine>0);
  currentLine.push(newName)
  return `Welcome, ${newName}. You are number ${currentLine.length} in line.`
}

function nowServing(currentLine){
  if (currentLine.length===0){
  return "There is nobody waiting to be served!"
}
var firstCustomer=currentLine.shift();
return `Currently serving ${firstCustomer}.`
}

function currentLine(currentLineofPeople){
  if (currentLineofPeople.length===0){
  return `The line is currently empty.`
}
var nameandNumber=[];
for (let i=0;i<currentLineofPeople.length;i++){
  nameandNumber.push(`${i+1}. ${currentLineofPeople[i]}`)
}
return `The line is currently: ${nameandNumber.join(", ")}`
}
