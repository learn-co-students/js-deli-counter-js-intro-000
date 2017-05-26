var katzDeli = [];
function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  var position = katzDeliLine.length; // Position of customer on line
  var message = `Welcome, ${name}. You are number ${position} in line.`; // Welcome message
  return message;  
}

function nowServing (katzDeliLine) {
  var firstPersonInLine;
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  }else {
    firstPersonInLine = katzDeliLine.shift();
    return `Currently serving ${firstPersonInLine}.`;
  }
}

function currentLine(katzDeliLine) {
  var message = '';
  var sep;
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  }else {
    for ( var i = 0; i < katzDeliLine.length; i++ ) {
      ( i === katzDeliLine.length - 1) ? sep = '' : sep = ',';
     message += ` ${(i + 1)}. ${katzDeliLine[i]}${sep}`;
    }
    return "The line is currently:" + message; 
  }
}