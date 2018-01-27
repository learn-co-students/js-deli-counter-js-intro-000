var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    let firstInLine = katzDeliLine.shift();
    return `Currently serving ${firstInLine}.`;
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    let string = "The line is currently: ";
    for (let i = 0; i < katzDeliLine.length; i++) {
      string += `${i + 1}. ${katzDeliLine[i]}, `;
    }
    return string.slice(0, -2); // Remove last 2 characters from string, then return
  } else {
    return "The line is currently empty.";
  }
}
