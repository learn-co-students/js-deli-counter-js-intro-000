const katzDeli = []; 
const otherDeli = ['Steven', 'Blake', 'Avi'];

function takeANumber(katzDeli, personName){
  katzDeli.push(personName);
  return `Welcome, ${personName}. You are number ${katzDeli.indexOf(personName) + 1} in line.`;
}
takeANumber(katzDeli, 'Ada');
takeANumber(otherDeli, 'Grace');
takeANumber(katzDeli, 'Kent');



const deliLine = ["Steven", "Blake", "Avi"];

function nowServing(deliLine){
  return deliLine.length > 0 ? `Currently serving ${deliLine.shift()}.` : 'There is nobody waiting to be served!';
}
nowServing(deliLine);



function currentLine(inLine){
  const updatedLine = [];
  
  if(!inLine.length){
    return 'The line is currently empty.';
  } else {
    for(let i = 0; i < inLine.length; i++){
      updatedLine.push(`${i + 1}. ${inLine[i]}`);  
    }
  }
  
  return `The line is currently: ${updatedLine.join(', ')}`;
}
currentLine(["Bill", "Jane", "Ann"]);