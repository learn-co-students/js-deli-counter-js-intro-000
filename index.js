var katzDeli = [];

function takeANumber(katzDeliLine, personName) {
  //Accept a current line of people, along with current persons name.
  //Return their position in line with a "Welcome, [name].  You are [#] in line."
  //If it is a repeat, return the # they are in line.
  var i;

  for ( i = 0 ; i < katzDeliLine.length ; i++) {
    if (katzDeliLine[i] === personName) { return i.toString() }
  }
  if (personName[0].length > 1) {
    katzDeliLine.push(personName[0]);
    takeANumber(katzDeliLine, personName.slice(1))
  } else {
    katzDeliLine[katzDeliLine.length] = personName;
  }
  return "Welcome, " + personName + ". You are number " + katzDeliLine.length +" in line.";
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    return "Currently serving " + katzDeliLine.shift() + ".";
  }
}

function currentLine(katzDeliLine) {
  var aString;
  var i;
  aString = "The line is currently: ";

  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
    for ( i = 0 ; i < (katzDeliLine.length-1) ; i++) {
      aString = aString + (i+1) + ". " + katzDeliLine[i] + ", ";
    }
    aString = aString + (i+1) + ". " + katzDeliLine[katzDeliLine.length - 1]
  }
  return aString;
}
