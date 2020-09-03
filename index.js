function takeANumber(lineUp, newName) {
  lineUp.push(newName);
  return `Welcome, ${newName}. You are number ${lineUp.length} in line.`
  
}

function nowServing(lineUp) {
  if(lineUp.length === 0) {
   
    return "There is nobody waiting to be served!"
    
  } else {
    
    return "Currently serving " + lineUp.shift() + ".";
    
  }
}

function currentLine(lineUp) {
  
  if (lineUp.length === 0) {
    
    return "The line is currently empty."
    
  } else {
           var str = "The line is currently: ";
    
            for (var i = 0; i < lineUp.length; i++) {
      
                str += `${i+1}. ${lineUp[i]}${i === lineUp.length-1 ? "" : ", "}`
                }
    return str;
  }
}

