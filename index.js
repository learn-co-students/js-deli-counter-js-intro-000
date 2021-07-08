var katzDeliLine = [];

function takeANumber( katzDeliLine, name ) {

  katzDeliLine.push(name);
  var lineNumber = katzDeliLine.length;
  var message = "Welcome, " + name + ". You are number " + lineNumber.toString() + " in line.";
  return message;
}

function nowServing( katzDeliLine ) {
  if ( katzDeliLine.length > 0 ) {
    var personToServe = katzDeliLine[0];
    katzDeliLine.shift();
    var message = "Currently serving " + personToServe + ".";
    return message;
  } else {
    return 'There is nobody waiting to be served!';
  }
}

function currentLine( katzDeliLine ) {
  if ( katzDeliLine.length === 0 ) {
    return 'The line is currently empty.'
  } else {
    var message = "The line is currently: ";
    for (let i = 0; i < katzDeliLine.length; i++ ) {
      var linePosition = i + 1;
      message += linePosition.toString() + ". " + katzDeliLine[i];
      if ( i < (katzDeliLine.length - 1) ) {
        message += ", ";
      }
    }
    return message;
  }
}
