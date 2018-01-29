var katzDeliLin = [];

function takeANumber(array, customer) {
  var x=array.push(customer);
    return "Welcome, "+customer+". You are number "  +x+ " in line.";
}

function nowServing(array) {
  if (array.length === 0 ) { return "There is nobody waiting to be served!";}
  var servStr = array[0];
  array.splice(0,1)
  return "Currently serving "+servStr +".";

}

function currentLine(line) {
  if (line.length === 0 ) { return "The line is currently empty.";}
  var retStr = "The line is currently: ";
  for (var i=0;i<line.length;i++) {
    var  x = i+1;
    retStr = retStr + x + ". "+line[i]+(i===line.length-1?'':', ');
  }
  return retStr;
}
