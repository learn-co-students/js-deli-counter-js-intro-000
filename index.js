// Takes in a customer's name & adds them into the queue.
// Returns the customer's name and their position in queue.
function takeANumber(line, name) {
  line.push(name);

  return `Welcome, ${name}. You are number ${line.length} in line.`;
}

// REFACTORED
// Checks line to determine if any in queue.
// If customers in queue, it displays current customer.
// If no customers in queue, it advises there are no customers.
function nowServing(katzDeliLine) {
  return katzDeliLine.length
    ? `Currently serving ${katzDeliLine.shift()}.`
    : "There is nobody waiting to be served!";
}

// ORIGINAL nowServing() - REFACTORED TO CHECK LINE LENGTH WITH SIMPLIFIED BOOLEAN
// function nowServing(katzDeliLine) {
//   return katzDeliLine.length > 0
//     ? `Currently serving ${katzDeliLine.shift()}.`
//     : "There is nobody waiting to be served!";
// }

function currentLine(katzDeliLine) {
  if (!katzDeliLine.length) {
    return "The line is currently empty.";
  }

  var lineList = [];

  for (let i = 0; i < katzDeliLine.length; i++) {
    lineList.push(`${i + 1}. ${katzDeliLine[i]}`);
  }

  return `The line is currently: ${lineList.join(", ")}`;
}

// function currentLine(katzDeliLine) {
//   var line = [];
//   if (katzDeliLine.length === 0) {
//     return "The line is currently empty.";
//   } else {
//     for (var i = 0; i < katzDeliLine.length; i++) {
//       line += i + 1 + ". " + katzDeliLine[i] + ", ";
//     }
//     line = line.slice(0, line.length - 2);
//     return "The line is currently: " + line;
//   }
// }
