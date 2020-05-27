var katzDeliLine = [];
function takeANumber (katzDeliLine,customer){
  katzDeliLine.push(customer);
  return `Welcome, ${customer}. You are number ${katzDeliLine.length} in line.`;
}
function nowServing(katzDeliLine){
  if (katzDeliLine.length == 0){
    return "There is nobody waiting to be served!"
  }
  else {
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
}
function currentLine(katzDeliLine){
  if (katzDeliLine.length == 0){
    return "The line is currently empty.";
  }
  else{
    var tempList = "1. " + katzDeliLine.shift();
    var i = 1;
    while(katzDeliLine.length >0){

      tempList = `${tempList}, ${i+1}. ${katzDeliLine.shift()}`;
      i++;
    }







    return `The line is currently: ${tempList}`;


  }
}
