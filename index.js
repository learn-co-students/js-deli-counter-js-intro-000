var katzDeliLine = [];
function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);

  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."
}
takeANumber(katzDeliLine, "Ada")
takeANumber(katzDeliLine, "Grace")
takeANumber(katzDeliLine, "Kent")


function nowServing(a) {
  if (a.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var name = a[0];
    a.splice(0,1);
    return "Currently serving " + name + ".";
  }
}

function currentLine(currentLinePeople) {
    var line = '';
    if (currentLinePeople.length === 0) {
      return "The line is currently empty."
    } else {
      for(var i = 0; i < currentLinePeople.length; i++) {
        line =  line + (i + 1) + ". " + currentLinePeople[i] + ", "
      }
      line = line.slice(0, line.length-2)
      return "The line is currently: " + line
    }
}
