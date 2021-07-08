
var katzDeli = [];
var katzDeliLine = [];

function takeANumber(katzDeliLine, newPerson){
  katzDeliLine.push(newPerson);
  return ("Welcome, "+ newPerson + "." +" You are number " + katzDeliLine.length + " in line.");
   //return katzDeliLine[0];
};


function nowServing(katzDeliLine) {
  console.log(katzDeliLine);
  var currentlyServed = katzDeliLine[0];
  katzDeliLine.shift();
  console.log(katzDeliLine);

  if (katzDeliLine.length > 0){

    return ("Currently serving "+ currentlyServed +".");
  }
  else if (katzDeliLine.length === 0) {
    return ("There is nobody waiting to be served!");
  }




};

function currentLine(katzDeliLine){
  if (katzDeliLine.length > 0){
  katzDeliLine[0] =  1 + ". " + katzDeliLine[0];
  }
  for (var x =1; x < katzDeliLine.length; x++){
    katzDeliLine[x] =  " "+(x+1) + ". " + katzDeliLine[x];
  }
  if (katzDeliLine.length > 0){

    return ("The line is currently: " + katzDeliLine);



  }
  else return ("The line is currently empty.");
}
