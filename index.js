function takeANumber(currentLine, newPerson) {
  currentLine.push(newPerson);
  return "Welcome, " + newPerson + ". You are number " + currentLine.length + " in line.";
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return "Currently serving " + katzDeliLine.shift() + ".";
  }
}

function currentLine(deliLine) {
  if (deliLine.length === 0) {
    return "The line is currently empty.";
  } else {
      return `The line is currently: 1. ${deliLine[0]}, 2. ${deliLine[1]}, 3. ${deliLine[2]}`;
  /*  I really wanted to make a for loop out of this with something along the lines of the following:
                Under  else {
                var callNames = "The line is currently: "
                  for (let i=0; i < deliLine.length; i++) {
                    callNames += ++i + ". " + deliLine[--i] + ", ";
                  }
                return callNames
                }
      I had difficulty figuring out how to remove the comma at the end. */
    }
}
