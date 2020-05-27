const katzDeliLine = []

function takeANumber(katzDeliLine, new_name) {
    katzDeliLine.push(new_name);
    return "Welcome, " + new_name + ". You are number " + katzDeliLine.length + " in line."
  }

function nowServing(katzDeliLine) {
  if (katzDeliLine.length >= 1) {
    return "Currently serving " + katzDeliLine.shift() + ".";
  } else {
    return "There is nobody waiting to be served!";
  }
}


function currentLine(katzDeliLine) {
  const new_line = ["The line is currently:"]
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else {
    for (var i = 0; i < katzDeliLine.length; i++) {
      new_line.push(i + 1 + ". " + katzDeliLine[i] + ",");
    }
  }
  var line_str = new_line.join(" ")
  return line_str.slice(0, -1)
}
