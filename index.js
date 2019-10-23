function takeANumber(katzDeliLine, walkin) {
  katzDeliLine.push(walkin)
  return `Welcome, ${walkin}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(deliLine) {
   if (deliLine.length === 0) {
    return ("There is nobody waiting to be served!");
  } else {
    var next = deliLine.shift();
    return ("Currently serving " + next + ".")
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  }
  var structuredString = "The line is currently: "
  for (let i = 0; i<katzDeliLine.length; i++) {
    structuredString += (`${i+1}. ${katzDeliLine[i]}, `);
  }
  structuredString = structuredString.substring(47, 0)
  return structuredString
}
