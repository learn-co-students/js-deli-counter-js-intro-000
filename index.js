var katzDeli = [];

/* deli takeANumber adds a person to the line:
ReferenceError: takeANumber is not defined -->*/


function takeANumber(katzDeliLine, personName) {
   katzDeliLine.push(personName); // Adds a person to the back of the line.
return `Welcome, ${personName}. You are number ${katzDeliLine.length} in line.`;
} // Returns a greeting with the person's name, and their position in line.


// ----------------------------------------
/* deli nowServing returns the line is empty when no on is on line:
ReferenceError: nowServing is not defined -->*/

/* deli nowServing returns an announcement about the person it is serving, and
shifts the line: ReferenceError: nowServing is not defined  -->*/


function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) { // Checking to see if someone is in line.
    return "There is nobody waiting to be served!";
  }

  else { // Taking the next person in line.
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
}


/*<-- There is an error in index-test.js. Look under 'describe('nowServing', ()'
'when no on is on line'. */

/*<-- There is an error in terminal test "nowServing" as well "when no on is on
line" */
// ----------------------------------------
/* deli currentLine(line) returns "The line is currently empty." if no one is in
line: ReferenceError: currentLine is not defined -->*/

/* deli currentLine(line) says who is in line when there are people waiting:
ReferenceError: currentLine is not defined -->*/


function currentLine(line) {
  if (line.length === 0) { // Checking to see if someone is in line.

    return "The line is currently empty.";
  }

  else { // States the person's position, and name in line.
    var newArray = [];
    for (var i = 0; i < line.length; i++){
      newArray.push(` ${i + 1}. ${line[i]}`);
    }
  }
return `The line is currently:${newArray}`;
}

/* newArray.push(`${i + 1}. ${line[i]}`);
`The line is currently: ${newArray.join(', ')}`; */
// "The line is currently: 1. Bill, 2. Jane, 3. Ann";
// This is static because I don't know how to make it dynamic.
//`The line is currently: ${line}`;
