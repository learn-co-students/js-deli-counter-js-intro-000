
const katzDeliLine = []

function takeANumber(katzDeliLine, new_name) {
    katzDeliLine.push(new_name);
    return "Welcome, " + new_name + ". You are number " + katzDeliLine.length + " in line."
  }

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return "Currently serving " + katzDeliLine.shift() + ".";
    // takes the first element of the array and returns it with a string.
  } else {
    return "There is nobody waiting to be served!";
  }
}


function currentLine(katzDeliLine) {
  let line_str = ""
  if (katzDeliLine.length === 0) {
    // checks if the current line is empty
    return "The line is currently empty.";
  } else {
    for (var i = 0; i < katzDeliLine.length; i++) {
     line_str += i + 1 + ". " + katzDeliLine[i] + ", ";
      // if the line is not empty adds the current index + 1 as a cust num, plus cust @ index to line_str
    }
  }
  return "The line is currently: " + line_str.slice(0, -2);
   // returns a string without the last space and comma
}
