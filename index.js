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
  return ("The line is currently: " + for (let i = 0; i<katzDeliLine.length; i++) {
    (i++ +". katzDeliLine[i], ");
  }) 
}
