var katzDeliLine = [];

function takeANumber(katzDeliLine, customerName){
  katzDeliLine.push(customerName);
  return `Welcome, ${customerName}. You are number ${katzDeliLine.length} in line.`;

};

function nowServing(katzDeliLine){
  if (!katzDeliLine.length) {
    return "There is nobody waiting to be served!";
} else {
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
}

function currentLine(katzDeliLine) {
  if (!katzDeliLine.length) {
    return "The line is currently empty.";
}
var lineNames = [];

    for (var i = 0; i < katzDeliLine.length; i++) {
      lineNames.push(`${i+1}. ${katzDeliLine[i]}`)
    }

    return `The line is currently: ${lineNames.join(', ')}`;
}
