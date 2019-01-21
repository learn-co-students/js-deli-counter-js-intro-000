function takeANumber(array,name){
   array.push(name);
   return `Welcome, ${name}. You are number ${array.length} in line.`
 }

 function nowServing(array){
   if (array.length===0){
     return `There is nobody waiting to be served!`

   }else{
     var name=array[0];
     array.shift();
     return `Currently serving ${name}.` ;
   }
 }




 function currentLine(array){

   if(!array.length){
     return `The line is currently empty.`
   }else{
     var array2=new Array();
     for(var i=0;i<array.length;i++){
     array2.push(`${i+1}. ${array[i]}`)
 }

     return `The line is currently: ${array2.join(', ')}`
 }
}
