var katzDeli = [];

function takeANumber(katzDeliLine, people){
  katzDeliLine.push(people);
  return "Welcome, " + people + ". You are number " + (katzDeliLine.length) + " in line."
}
function nowServing(katzDeliLine){
  var nextInLine = katzDeliLine.shift()
  if(katzDeliLine.length !== 0){
    return "Currently serving " + nextInLine + ".";
  }else{
    return "There is nobody waiting to be served!";
  }
}
function currentLine(katzDeliLine){
  var lineC = "The line is currently: "
      if(katzDeliLine.length !== 0){
          for(var i=0; i < katzDeliLine.length; i++){
              lineC+= (i+1) + ". " + katzDeliLine[i];
              if(i < katzDeliLine.length - 1){
                  lineC+= ", "
              }
            }
          return lineC;

      }else {
          return "The line is currently empty."
      }
}
