function takeANumber (katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}
// .push() adds name to the end of the array (i.e. end of the customer line)

function nowServing (katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var newLine = katzDeliLine.shift();
    return `Currently serving ${newLine}.`
  } else {
    return `There is nobody waiting to be served!`
  }
}
// .shift() removes the beginning of the array (i.e. first person in line)
// if/else identifies if there is a line or not and uses the correct statement for either scenario

function currentLine(katzDeliLine) {
  var lineNum = [];
  if (katzDeliLine.length === 0) {
    return `The line is currently empty.`
  } else {
      for (var i = 0; i < katzDeliLine.length; i++) {
        lineNum.push(` ${i + 1}. ${katzDeliLine[i]}`)
  } return `The line is currently:${lineNum}`;
  }
}
// for loop iterates through the array (the line of customers), and outputs each element in the array (customer names)
