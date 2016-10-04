function takeANumber(katzDeliLine,name){

   var len=katzDeliLine.length;
   katzDeliLine[len]=name;
   return `Welcome, ${name}. You are number ${len+1} in line.`;

}

function nowServing(katzDeliLine){
     var retMessage;
     if(katzDeliLine.length>0){
     retMessage=`Currently serving ${katzDeliLine[0]}.`
      }
     else{
       retMessage="There is nobody waiting to be served!";
     }
     katzDeliLine.shift();
     return retMessage;
}

function currentLine(line){
     var retMessage="The line is currently:"
     if(line.length>0){
       for(var i=0;i<line.length;i++)
       {
         retMessage=retMessage+ ` ${i+1}. ${line[i]}${i===line.length-1?'':','}`
       }
     }
     else {
       retMessage='The line is currently empty.'
     }
     return retMessage;
}
