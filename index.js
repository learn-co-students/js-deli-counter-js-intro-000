/*
starts with empty deli => empty array titled "katzDeliLine"
*/

var katzDeliLine = [];

/*
creates function where a name is pushed into the array titled "katzDeliLine",
where index starts at 0.
*/

function takeANumber(katzDeliLine,name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

/* katzDeliLine.length referrs to the position of the name referrenced in the
array. E.g., if Ada is first entered, she becomes position 1 */

// if array is greater than empty [], then....//

function nowServing(katzDeliLine) {
  if(katzDeliLine > []) {
    return `Currently serving ${katzDeliLine.shift()}.`
  }
  else {
    return "There is nobody waiting to be served!"
  }
}

/* .shift returns the beginning of array and then removes it (e.g., Ada)*/

function currentLine(katzDeliLine) {
var line = [];
if(katzDeliLine > []) {
  for(var i = 0; i < katzDeliLine.length; i++) {
      line.push(` ${i+1}. ${katzDeliLine[i]}`);
    }
    return "The line is currently:" + line;
}
    else {
      return "The line is currently empty."
    }
}
