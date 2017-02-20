var katzDeli = [];

function takeANumber(katzDeli, name){
  katzDeli.push(name);
return `Welcome, ${name}. You are number ${katzDeli.length} in line.`;
  }

 function nowServing(katzDeli){
   katzDeli.slice();

  if(katzDeli.length>0){
    var serving= `Currently serving ${katzDeli[0]}.`;
     katzDeli.shift();
     return serving;
  }
  else {
    return "There is nobody waiting to be served!";
  }
  
   }

function currentLine(katzDeli){
    
  if(katzDeli.length>0){
    var lineString=[];
for(var i=0; i<katzDeli.length; i++){
        lineString.push(` ${katzDeli.indexOf(katzDeli[i])+1}. ${katzDeli[i]}`);
      }
        //lineString.push(`${katzDeli.indexOf(katzDeli[i])+1}. ${katzDeli[i]}`);
      
        return `The line is currently:${lineString}`;
          
        }
    else {
          return "The line is currently empty.";
          }
          
        
  }
  
  