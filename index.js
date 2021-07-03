function takeANumber(katzDeliLine, otherDeli) {
  var deli;
  deli = katzDeliLine.push(otherDeli);

  var num = 0;
  for(var i = 0; i < katzDeliLine.length; i++) {
    num++;
  }

  return "Welcome, " + otherDeli + "." + " You are number " + num + " in line.";
}

function nowServing(deliLine) {
  var katzDeliLine = deliLine.shift();
  if(deliLine == 0) {
    return "There is nobody waiting to be served!";
  }else {
  return "Currently serving Steven.";
  }
}

function currentLine(line) {
  var str;
  str = line.join(", ");
  var currentLineString = "The line is currently";

  if(line == 0) {
    currentLineString += " empty.";
    return currentLineString;
  }else {
    currentLineString += ": ";
    for(var i = 0; i < line.length; i++) {
      if(i === line.length - 1) {
        var newStr;
        newStr = currentLineString += "" + (i + 1) + ". " + line[i];
        return newStr;
      }
     currentLineString += "" + (i + 1) + ". " + line[i] + ", ";
    }
  return currentLineString;
  }
}
