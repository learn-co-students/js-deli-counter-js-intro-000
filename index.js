var katzDeliLine = [];

function takeANumber (katzDeliLine, name) {
katzDeliLine.push(name);
  return (`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`)
}

function nowServing (katzDeliLine) {
     if (katzDeliLine.length > 0) {
    return (`Currently serving ${katzDeliLine.shift()}.`)
  } else {
    return ("There is nobody waiting to be served!");
}
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return ("The line is currently empty.")
  }
  var customerArray =  [];
  for (var counter = 0; counter < katzDeliLine.length; counter++) {
    customerArray.push(" " + (counter + 1) + `. ${katzDeliLine[counter]}`);
      }
    return ("The line is currently:" + customerArray);
}
