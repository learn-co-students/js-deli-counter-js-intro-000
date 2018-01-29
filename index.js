
var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {

 katzDeliLine.push(name);
 return `Welcome, ${name}. You are number ${katzDeliLine.indexOf(name) + 1} in line.`;
}

function nowServing(array) {
  
    if(array.length === 0) {
      return `There is nobody waiting to be served!`;
    }
    if ( array.length !== 0) {
      var a = array.shift()
      return `Currently serving ${a}.`;
    }
}

function currentLine(line) {
  
  if(line.length === 0) {
    return 'The line is currently empty.'
  }
  if(line.length !== 0) {
    var newArray= [];
    for(var i = 0; i !== line.length; i++)
     newArray.push(` ${i+1}. ${line[i]}`); 
  }
  var z = `The line is currently:${newArray.toString()}`
  return z
}