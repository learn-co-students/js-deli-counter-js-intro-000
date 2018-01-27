

//for (var i = 1; i < 100; i++)

//deli
var katzDeli = [];

//  for (katzDeli = 1; katzDeli < 10; ) {
//take a number takes the current deli line counter
//along with the person's name
//for each count, log a welcome message to the name
function takeANumber(katzDeli, name) {
    var katzDeliLine = katzDeli.length + 1;
    katzDeli.push(name);
    return("Welcome, " + name + ". You are number "  + katzDeliLine + " in line.");

}



function nowServing(deliLine) {
  if (deliLine.length < 1) {
    return 'There is nobody waiting to be served!'
  }
  else {
    return "Currently serving " + deliLine.shift(0) + ".";

  }
}








function currentLine(line) {



  if (line.length < 1) {
    return 'The line is currently empty.';
  }
  else {
    var i = 0
    while (i < line.length) {
      line[i] = ((i+1) + '. ' + line[i] );
      i++;
    }
    var newLine = line.join(', ')

    return 'The line is currently: ' + newLine ;
    }

}
