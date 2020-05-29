function takeANumber(peopleInLine, newPersonName) {
  peopleInLine.push(newPersonName)
  return "Welcome, " + newPersonName + ". You are number " + peopleInLine.length + " in line."
}

function nowServing(peopleInLine) {
  if (peopleInLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var name = peopleInLine[0];
    peopleInLine.splice(0, 1);
    return "Currently serving " + name + ".";
  }
}

function currentLine(peopleInLine) {
    var output = [];
    if (peopleInLine.length > 0) {
      for(var i = 0; i < peopleInLine.length; i++) {
        output += (i + 1) + ". " + peopleInLine[i] + ", ";
      }
      output = output.slice(0, - 2);
      return "The line is currently: " + output;
    } else {
        return "The line is currently empty.";
    }
}