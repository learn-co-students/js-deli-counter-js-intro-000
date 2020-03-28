// Deli functions

// greets a new customer with their name and their number in line
function takeANumber(line, name) {
  // adds the person's name to the end of the array
  line.push(name);
  
  //returns a string greeting including the person's name and their number in line
  return `Welcome, ${name}. You are number ${line.indexOf(name) + 1} in line.`
  
  }
  
  //returns the name of the first person in line and removes them from the line
  function nowServing (line) {
    
    // checks to see that line isn't empty
    if (line.length !== 0) {
    // if line isn't empty, returns string with the name of the first person in 
    // line
      return `Currently serving ${line.shift()}.`;
    
    //if line is empty, returns string saying that "nobody is waiting to be
    // served"
    } else {
      
      return "There is nobody waiting to be served!";
    }
  }
  
  
  // accepts the current line of people as array 'line' and returns the current 
  // line as a string 
  function currentLine(line) {
      
  // defines and assigns empty string to variable
  // if 'line' is empty, returns string saying that line is empty

    var fullLine = " ";
    if (line.length === 0) {
      
      return "The line is currently empty.";
      
   // if line isn't empty, loop through the array adding every person's name 
   // to 'fullLine' string until every person's name in array is added          
   // to 'fullLine' string 
    } else {
      
      for (let i = 0; i < line.length; i++) {
      
   fullLine += `${i + 1}. ${line[i]}, `;
      
      }
// use slice method to remove extra commAt at the end of 'fullLine' string
// return complete 'fullLine' string
fullLine = fullLine.slice(0, fullLine.length - 2);
return `The line is currently:${fullLine}`;
    }
     
    
    
  }
  