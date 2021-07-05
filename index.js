var katzDeli = [];

function takeANumber(katzDeliLine, name){
    katzDeliLine.push(name);
    return("Welcome, " + name + ". You are number " +  katzDeliLine.length + " in line.");
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0) {
    return("There is nobody waiting to be served!");
  } else {
    return("Currently serving " + katzDeliLine.shift() + ".");
  }
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length === 0) {
    return("The line is currently empty.");
  }

  var line = "The line is currently: ";
  var array = [];

  for (var i = 0; i < katzDeliLine.length; i++) {
      array.push((i + 1) + ". " + katzDeliLine[i]);
  }
  return line + array.join(', ');
}

// var line = katzDeliLine.map(function(element, index){
//   return (i + 1) + '. ' + element;
// }).join(', ');
//
// return "The line is currently: " + line;
