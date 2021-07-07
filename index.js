function takeANumber(katzDeli,newPersonName){
katzDeli.push(newPersonName);
return `Welcome, ${newPersonName}. You are number ${katzDeli.length} in line.`
}
function nowServing(katzDeliLine){
  if (katzDeliLine.length > 0){
    var nowServingCustomer = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${nowServingCustomer}.`;
  }
  else{
    return `There is nobody waiting to be served!`;
  }
}
function currentLine(katzDeliLine){
  if (katzDeliLine.length > 0){
    let message = "The line is currently:"
    for(let i=0; i < katzDeliLine.length; i++){
      if (i === katzDeliLine.length-1){
        message = `${message} ${i+1}. ${katzDeliLine[i]}`
      }
      else{
        message = `${message} ${i+1}. ${katzDeliLine[i]},`
      }
    }
    return message
  }
  else{
    return "The line is currently empty."
  }
}
