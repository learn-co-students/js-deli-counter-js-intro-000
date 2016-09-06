var katzDeli = [];

/* deli takeANumber adds a person to the line:
ReferenceError: takeANumber is not defined -->*/

function takeANumber(katzDeliLine, personName) {
   katzDeliLine.push(personName);
return `Welcome, ${personName}. You are number ${katzDeliLine.length} in line.`;
}

// ----------------------------------------
/* deli nowServing returns the line is empty when no on is on line:
ReferenceError: nowServing is not defined -->*/

/* deli nowServing returns an announcement about the person it is serving, and
shifts the line: ReferenceError: nowServing is not defined  -->*/

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  }

  else {
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

function currentLine() {
  if (katzDeliLine >= 1) {
    return `The line is currently: ${katzDeliLine}`;
  }

  else {
    return "The line is currently empty.";
  }

}
