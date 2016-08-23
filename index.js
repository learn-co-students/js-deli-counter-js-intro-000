var katzDeliLine=[];
function takeANumber(katzDeliLine, name){
katzDeliLine.push(name)
return ("Welcome, "+ `${name}`+". You are number "+ `${katzDeliLine.length}` +" in line.");
}

function nowServing(katzDeliLine){
if(!katzDeliLine.length)
{
  return("There is nobody waiting to be served!");
}
else {
  return("Currently serving "+`${katzDeliLine.shift()}`+".");
}
}

function currentLine(katzDeliLine){
  var shaheer=[];
  var i=0;
    if(!katzDeliLine.length){
   return ("The line is currently empty.");
 }
   for(let i=0; i< katzDeliLine.length; i++){
     shaheer.push(` ${i+1}. ${katzDeliLine[i]}` );
  }
  return("The line is currently:"+`${shaheer}`);
}

/*while(i<katzDeliLine.length){
katzDeliLine[i]=`${i}. + katzDeliLine[i]`;
i++;
}
return("The line is currently: "+ `${katzDeliLine}`);
}*/



/*do{
  return ("The line is currently:"+ `${i}``${katzDeliLine}`);
}while(!katzDeliLine.length)
}*/
