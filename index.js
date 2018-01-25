var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  var index = katzDeliLine.indexOf(name);
  const numberInLine = parseInt(index) + 1
  return `Welcome, ${name}. You are number ${numberInLine} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var firstInLine = katzDeliLine.shift();
    return `Currently serving ${firstInLine}.`
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var lineList = "";
    for (let i = 1; i <= katzDeliLine.length; i++) {
      const index = i - 1;
      if (i == katzDeliLine.length) {
        lineList += `${i}. ${katzDeliLine[index]}`
      } else {
        lineList += `${i}. ${katzDeliLine[index]}, `
      }
    }
    return `The line is currently: ${lineList}`
  } else {
    return "The line is currently empty."
  }
}
