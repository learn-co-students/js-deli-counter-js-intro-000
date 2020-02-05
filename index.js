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
      var message = `The line is currently: `;
      
        for(var i = 0; i < estherDeliLine.length -1; i++) {
          message += `${i+1}. ${estherDeliLine[i]}, `;//.slice(-1,1);
        }
      message += `${i+1}. ${estherDeliLine[i]}`;  
      return message;
  }
}

