var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  var i = katzDeliLine.length;
  var H = katzDeliLine.length + 1;
  while (i < H ) {
  katzDeliLine[i] = name;
  var  number = i + 1;
  i++;
}
  return "Welcome, " + name + ". You are number " + number + " in line."
  return katzDeliLine;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
      var kitkat = katzDeliLine.shift()
      return "Currently serving " + kitkat + "."

    }
  else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var i = 0;
    var array = [];

    while ( i < katzDeliLine.length) {
      var number = i + 1;
      array[i] = " " + number + ". " + katzDeliLine[i];
      i = i + 1;
   }
    return "The line is currently:" + array
  } else {
    return "The line is currently empty."
  }
}
