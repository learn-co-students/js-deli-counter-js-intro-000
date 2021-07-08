var katzDeli=[];
function takeANumber(katzDeli,otherDeli){
  katzDeli.push(otherDeli);
  var n=katzDeli.length;
  var s="";
    s="Welcome, "+otherDeli+". You are number "+n+" in line.";
  return s;
}
function nowServing(katzDeliLine){
  var l=katzDeliLine.length;
  if(l>=1){
    var serving=katzDeliLine[0];
    katzDeliLine.shift();
    return "Currently serving "+serving+".";
  }
  else{
    return "There is nobody waiting to be served!";
  }
}
function currentLine(katzDeliLine){
  var l=katzDeliLine.length;
  var frase=[];
  if(l>=1){
	   for (let i = 0; i <l; i++) {
      frase.push(` ${i+1}. ${katzDeliLine[i]}`);
    }
	return "The line is currently:"+frase;
  }
  else{
	  return "The line is currently empty.";
  }
}