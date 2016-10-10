function takeANumber(katzDeliLine, personName) {
  katzDeliLine.push(personName);
  return `Welcome, ${personName}. You are number ` + katzDeliLine.length + ` in line.`;

}

function nowServing(katzDeliLine) {
  var firstInLine = katzDeliLine[0];

  if (katzDeliLine.length > 0) {
    katzDeliLine.shift();
    return `Currently serving ${firstInLine}.`;
  } else {
    return "There is nobody waiting to be served!";
  }

}
function currentLine(katzDeliLine) {
  var x = function checkLine(katzDeliLine) {
    for (let i = 0; i < katzDeliLine.length; i++) {
     `${i+1}` + `. ` + katzDeliLine[i] + `, `;
    }
  }
  if (katzDeliLine.length > 0) {

    return `The line is currently ${x}`;
  } else {
    return "The line is currently empty.";
  }
}
