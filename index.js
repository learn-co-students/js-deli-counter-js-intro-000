var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  var numberInLine = katzDeliLine.indexOf(name)+1;
  return "Welcome, "+name+". You are number "+numberInLine+" in line.";
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length>1) {
    var currentlyServing = "Currently serving "+katzDeliLine[0]+".";
    katzDeliLine.shift(katzDeliLine[0]);
    return currentlyServing;
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length>1) {
    var myString = "The line is currently: ";
    for(var i=0;i<katzDeliLine.length;i++) {
      var position = parseInt(i)+1;
      if (i!==katzDeliLine.length-1) {
      myString = myString+position+". "+katzDeliLine[i]+", ";
      } else {
      myString = myString+position+". "+katzDeliLine[i]
      }
    }
    return myString;
  } else {
    return "The line is currently empty."
  }
}
