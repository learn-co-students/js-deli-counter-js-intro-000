function takeANumber(katzDeliLine, personName) {
  var n = katzDeliLine.length + 1;
  katzDeliLine.push(personName);
  return "Welcome, " + personName + ". You are number " + n + " in line.";
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length>0) {
    var myString = "Currently serving " + katzDeliLine[0] + ".";
    katzDeliLine.shift();
  } else {
    myString = "There is nobody waiting to be served!";
  }
  return myString;
}

function currentLine(katzDeliLine) {

  var myString;
  if (katzDeliLine.length>0) {
    myString = "The line is currently: ";

    for (var i = 0; i<katzDeliLine.length; i++) {
      if (i < katzDeliLine.length-1) {
        myString += i+1 + ". " + katzDeliLine[i] + ", ";
      } else {
        myString += i+1 + ". " + katzDeliLine[i]
      }
    }

  } else {
    myString = "The line is currently empty."
  }

  return myString;
}
