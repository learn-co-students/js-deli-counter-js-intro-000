var katzDeliLine = [];


function takeANumber(katzDeliLine, newName) {
  katzDeliLine.push(newName);
  var name = katzDeliLine[katzDeliLine.length - 1];
  var place = katzDeliLine.length;
  return "Welcome, " + name + ". You are number " + place + " in line." ;
}

function nowServing(array) {

  // if(katzDeliLine.length === 0) {
  //   return "There is nobody waiting to be served!"
  // }

  if(array.length > 0) {
    //var next = katzDeliLine.shift();
    return "Currently serving " + array.shift()+".";
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(line) {

  if (!line.length) {
    return "The line is currently empty."
  }


  var lineString = "The line is currently: ";
    for(var i = 0; i < line.length -1; i++) {
      lineString += (i+1) + ". " + line[i] + ", ";
    }

    return lineString + "" + line.length+". " +line[line.length-1];


}
