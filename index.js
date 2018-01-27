var katzDeli = [];

function takeANumber(katzDeliLine, customer) {
   katzDeliLine.push(customer);
   return `Welcome, ${customer}. You are number ${katzDeliLine.length} in line.`;
 }
 
 
function nowServing(katzDeliLine) {
 if(katzDeliLine.length === 0) 
{ 
return "There is nobody waiting to be served!"
} 


else {


 return `Currently serving ${katzDeliLine.shift()}.`;
   }
 }
 
 function currentLine(katzDeliLine) { 
 if(katzDeliLine.length === 0) 
{ 
return "The line is currently empty."
} 


else {
var nextInLine = "The line is currently: ";

for (var i = 0; i < katzDeliLine.length; i++) {
         nextInLine += `${i + 1}. ${katzDeliLine[i]}`;
     
        if (katzDeliLine.length > i + 1)  {
           nextInLine += ', '
       }
     }
     return nextInLine;
   }
 }
 
