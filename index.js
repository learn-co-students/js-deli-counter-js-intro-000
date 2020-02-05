var estherDeliLine = [];

function takeANumber(estherDeliLine, newGuest) {
 estherDeliLine.push(`${newGuest}`);
 
 for(var i = 0; i < estherDeliLine.length; i++) {
   return `Welcome, ${newGuest}. You are number ${estherDeliLine.length} in line.`;
 }
}


function nowServing(estherDeliLine) {
  
  if(estherDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var message =  `Currently serving ${estherDeliLine[0]}.`;
    estherDeliLine.shift();
    return message;
  }
}


function currentLine(estherDeliLine) {
  if(estherDeliLine.length === 0) {
    return "The line is currently empty.";
  } else {
      
    for(var i = 0; i < estherDeliLine.length; i++) {
      
      var count = 1;
      
      estherDeliLine.unshift(`${count}.`);
      count ++;
      
      var message = `The line is currently: ${estherDeliLine}`;
      return message;
    }
  }
}
