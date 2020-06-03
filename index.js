
const katzDeliLine = []

function takeANumber(katzDeliLine, new_name) {
    katzDeliLine.push(new_name);
    return "Welcome, " + new_name + ". You are number " + katzDeliLine.length + " in line."
      // push new_name parameter to the end of the katzDeliLine array
  }

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return "Currently serving " + katzDeliLine.shift() + ".";
    // removes the first element of the katzDeliLine array and returns it concatenating to a string.
    // result - "Currently serving Name."
  } else {
    // this return happens if the line length is = 0
    return "There is nobody waiting to be served!";
  }
}


function currentLine(katzDeliLine) {
  let line_str = ""
  if (katzDeliLine.length === 0) {
    // checks if the line is empty
    return "The line is currently empty.";
  } else {
    for (let i = 0; i < katzDeliLine.length; i++) {
     line_str += i+1 + ". " + katzDeliLine[i] + ", ";
      // if katzDeliLine is not empty adds the current index + 1 as a cust num, plus cust @ index to line_str on every iteration
    }
  }
  return "The line is currently: " + line_str.slice(0, -2);
   // returns a string without the last space and comma
   // result - "The line is currently: 1. Name, 2. Name" etc.
}
