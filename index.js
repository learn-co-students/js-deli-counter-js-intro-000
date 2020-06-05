var katzDeliLine = []

function takeANumber(katzDeliLine, new_name) {
    katzDeliLine.push(new_name);
    return "Welcome, " + new_name + ". You are number " + katzDeliLine.length + " in line."
  }// The return statement above is concatnating

  function nowServing(katzDeliLine) {
    if (katzDeliLine.length >= 1) {
      return "Currently serving " + katzDeliLine.shift() + ".";
    } else {
      return "There is nobody waiting to be served!";
    } //Uses an if statement to  compare and contrast
  }

  function currentLine(katzDeliLine) {
    const new_line = ["The line is currently:"] // new var
    if (katzDeliLine.length === 0) {
      return "The line is currently empty.";
    } else {
      for (var i = 0; i < katzDeliLine.length; i++) {
        console.log(new_line)
        new_line.push(i + 1 + ". " + katzDeliLine[i] + ",");
      }
    }
    var line_str = new_line.join(" ")
    return line_str.slice(0, -1)
  }
// Go over this with an Instructor!
