var katzDeliLine = []; // Empty array = empty deli line at the beginning of the day

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(`${name}`); // Pushes the name of a customer into the katzDeliLine array
  return(`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`); // Greets each new customer and provides their number in the line
}

function nowServing(katzDeliLine) {
  let i = 0; // i = number of people served; At the beginning, the number of people served is 0
  while (i < katzDeliLine.length) { // While fewer people have been served than there are in katzDeliLine, run the code
    i++; // Increments the number of people served
  }
  if (katzDeliLine.length === 0) { // If there are no more people in katzDeliLine
    return "There is nobody waiting to be served!";
  }
  else // If there are still people in katzDeliLine
  return (`Currently serving ${katzDeliLine.shift()}.`); // Statement of person currently being served; removes the former first person in katzDeliLine after service
}

function currentLine(katzDeliLine){
  if(!katzDeliLine.length) { // If the current line of people is empty
    return "The line is currently empty."; // Return this statement
  }
  var lineNamesandNumbers = []; // Array of the names and line numbers of people awaiting service

  // For loop declaring a variable value, stating that the code should run while the varible is less than katzDeliLine's length, incrementing the variable value,
  // then pushing the variable number (the number in line) and name of the person at that line number to the array lineNamesandNumbers
  for(var l = 0; l < katzDeliLine.length; l++) {
    lineNamesandNumbers.push(l + 1 + ". " + katzDeliLine[l]);
  }
  console.log("The line is currently: " + lineNamesandNumbers) // Console logging the array of lineNamesandNumbers: People's place in line and name
  return "The line is currently: " + lineNamesandNumbers.join(', '); // Returning the list of people in line and their numbers
}
