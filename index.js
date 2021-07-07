var katzDeli = [];

var takeANumber = (katzDeliLine, newName) => {
  katzDeliLine.push(newName)
  return `Welcome, ${newName}. You are number ${katzDeliLine.length} in line.`;
}

var nowServing = (katzDeliLine) => {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var holder = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${holder}.`
  }
}

var currentLine = (katzDeliLine) => {
  var stringReturn = "The line is currently: "
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
    for (var n = 0; n < katzDeliLine.length - 1; n++) {
      stringReturn += `${n+1}. ${katzDeliLine[n]}, `
    }
    stringReturn += `${n+1}. ${katzDeliLine[n]}`

    return stringReturn;
  }
}
