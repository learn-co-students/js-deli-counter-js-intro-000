var katzDeli = []; // finished customers
var katzDeliLine = []; // current customers

function takeANumber(katzDeliLine, personName){
  katzDeliLine.push(personName);
  return `Welcome, ${personName}. You are number ${katzDeliLine.indexOf(personName) + 1} in line.`;
}
//takeANumber(katzDeliLine, 'Ada');
//takeANumber(katzDeliLine, 'Lory');
//takeANumber(katzDeliLine, 'Aspen');
//takeANumber(katzDeliLine, 'Mat');

const deliLine = ["Steven", "Blake", "Avi"];
function nowServing(deliLine){
  return deliLine.length > 0 ? `Currently serving ${deliLine.splice(0, 1)}.` : 'There is nobody waiting to be served!';
}
nowServing([]);
nowServing(deliLine);

function currentLine(inLine){
  var lineArr = [];
  if(inLine.length === 0){
    return 'The line is currently empty.';
  } else {
    for(var i = 0; i < inLine.length; i++){
      lineArr.push(`${i + 1}. ${inLine[i]}`);  
    }
  }
  return `The line is currently: ${lineArr.join(', ')}`;
}
currentLine(["Bill", "Jane", "Ann"]);



