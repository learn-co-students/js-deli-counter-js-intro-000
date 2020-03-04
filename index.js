var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  console.log("Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.");
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.";
};

/* line.shift removes the first number of the array and goes to the next number.
If the line.length is "0" then user is notified that there is nowbody waiting to be served. */

function nowServing(line){
  if (line.length === 0){
    console.log("There is nobody waiting to be served!")
    return "There is nobody waiting to be served!";
  } else {
    return "Currently serving " + line.shift() + ".";
  }
};

function currentLine(katzDeliLine) {
  var line = [];
  if (katzDeliLine.length === 0){
    console.log("The line is currently empty.")
    return "The line is currently empty.";

  } for (var i=0; i < katzDeliLine.length; i++){
    line.push(i+1 + ". " + katzDeliLine[i]);
  }
    console.log("The line is currently: " + line);
    return "The line is currently: " + line.join(', ');
};
