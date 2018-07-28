var katzDeliLine = []
function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name);
  for(var i =0; i<katzDeliLine.length; i++){
    if(katzDeliLine[i] === name )
    return "Welcome, " + katzDeliLine[i] + ". You are number " + (i+1) + " in line."
  }
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length == 0)
    return "There is nobody waiting to be served!"
  else {
    return ("Currently serving " + katzDeliLine.shift() + ".");

  }

}

function currentLine(katzDeliLine){
  if(katzDeliLine.length == 0)
    return "The line is currently empty."
  else {
    var x =0;
    var string = "The line is currently: ";
    while(x<katzDeliLine.length){

      x++
        string += x + ". "  + katzDeliLine[x-1] + ", ";
    }
    return string.substr(0,string.length - 2);
  }
}
