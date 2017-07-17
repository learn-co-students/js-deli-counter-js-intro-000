
function takeANumber(katzDeliLine, newName) {
  katzDeliLine.push(newName);
  return `Welcome, ${newName}. You are number ${katzDeliLine.length} in line.`
}


function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`
  }
}


function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else {
    // Create a string to store the line info in.
    var peopleInLine = "The line is currently: ";
    // Loop over each person in line and add them to the string.
    for (var i = 0; i < katzDeliLine.length; i++) {
      peopleInLine += `${i+1}. ${katzDeliLine[i]}`;
      // If it's not the last person in line, add a comma and space.
      if (katzDeliLine.length > i + 1) {
        peopleInLine += ', '
      }
    }
    // Return the list of people in line.
    return peopleInLine;
  }

}
