function takeANumber(katzDeliLine, name) {
    katzDeliLine.push(name);
    return "Welcome, " + name + ". You are number " + (katzDeliLine.length) + " in line.";
  }

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else {
    //console.log("Currently serving " + katzDeliLine[0] + ".");
    var first = katzDeliLine.shift();
    return "Currently serving " + first + ".";
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  }
  else {
    //return "The line is currently: ";
    var newArray = [];
    for (let i = 0; i < katzDeliLine.length; i++) {
      newArray.push((i + 1) + ". " + katzDeliLine[i]);
    }
    return "The line is currently: " + newArray.join(', ');

  }
}
