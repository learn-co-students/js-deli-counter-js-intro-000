/*
About: This function puts a new customer's name on the waitlist, and tells the customer their position 
in line.
Notes: 
currentLinev is the name of the waitlist, newName is the new customer's name
*/

function takeANumber(currentLinev, newName)
{
  currentLinev.push(newName);
  return `Welcome, ${newName}. You are number ${currentLinev.length} in line.`;
}

/*
About: This function gives the name of the customer who is currently being served, then removes them 
from the waitlist. It also gives a message specifically for when no one is being served. 
*/ 

function nowServing(currentLinev)
{
  
  if (currentLinev.length > 0)
  {
    return "Currently serving " + currentLinev.shift() + ".";
  }
  else
  {
    return "There is nobody waiting to be served!";
  }
}

/*
About: This function gives all the customer names and their numerical positions in line, or indicates 
that it is empty. 
*/

function currentLine(currentLinev)
{
 if (currentLinev.length > 0)
 {
   var displayList = "";
   
   for (var i = 0; i < currentLinev.length; i++)
   {
        displayList += `${i+1}. ${currentLinev[i]}, `;
   }
   
   displayList = displayList.slice(0, -2);
   return `The line is currently: ${displayList}`;
 }
 else
 {
   return "The line is currently empty.";
 }
}