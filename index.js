var katzDeli=[];

var katzDeliLine = [];


function takeANumber(katzDeliLine, customerName){
  katzDeliLine.push(customerName);
  var i = katzDeliLine.length
  return "Welcome, " + customerName + ". You are number " + i + " in line."
}

function nowServing(katzDeliLine){
if (katzDeliLine.length===0){
  return "There is nobody waiting to be served!"
} else{
  var customerServed= katzDeliLine.shift();
  return "Currently serving " + customerServed + ".";
}
}

function currentLine (katzDeliLine){
  if (katzDeliLine.length===0){
    return "The line is currently empty.";
  } else{
    for (var i=0; i<katzDeliLine.length; i++) {
      var j=i +1;
      katzDeliLine[i]= " " + j + ". " + katzDeliLine[i];
  }
    return "The line is currently:" + katzDeliLine
  }
}
