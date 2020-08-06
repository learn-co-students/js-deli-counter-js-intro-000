//var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.";
} // "Welcome, Ada. You are number 1 in line."

function nowServing(count) {
  if (count.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var name = count[0];
    count.splice(0, 1);
    return "Currently serving " + name + ".";
  }
}//nowServing(katzDeliLine); // "Currently serving Ada."


function currentLine(katzDeliLine){
if (katzDeliLine.length > 0) {
    var output = "";
    for(var i = 0; i < katzDeliLine.length; i++) {
        output += (i + 1) + ". " + katzDeliLine[i] + ", ";
      }
    output = output.slice(0, -2);
    return `The line is currently: ${output}`;
  } else {
    return "The line is currently empty.";
  }
}