var takeANumber = (katzDeliLine,customerName) =>{
if(katzDeliLine.length===0){
  katzDeliLine[0]=customerName;
}
else{
   katzDeliLine.push(customerName);
 }
   return `Welcome, ${katzDeliLine[katzDeliLine.length-1]}. You are number ${katzDeliLine.length} in line.`;
}

var nowServing= katzDeliLine =>{
if(katzDeliLine.length===0){
  return `There is nobody waiting to be served!`;
}
else{

  return `Currently serving ${katzDeliLine.shift()}.`;
}
}

var currentLine= katzDeliLine =>{
  if(katzDeliLine.length===0){
    return `The line is currently empty.`;
  }
  else {
    var str="";
    for(let i=0;i<katzDeliLine.length;i+=1){
      if(i===(katzDeliLine.length-1)){
        str+=`${i+1}. ${katzDeliLine[i]}`
      }
      else{
        str+=`${i+1}. ${katzDeliLine[i]}, `
      }
    }
    return `The line is currently: ${str}`
  }
}
