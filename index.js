function takeANumber(katzDeliLine,name) {
  var namesplace;
  var output;
  katzDeliLine.push(name);
  namesplace = katzDeliLine.length;
  output = `Welcome, ${name}. You are number ${namesplace} in line.`
  return output;
}

function nowServing(katzDeliLine) {
  var current;
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    current = katzDeliLine[0];
    katzDeliLine.splice(0,1);
    return `Currently serving ${current}.`
  }
}

function currentLine(katzDeliLine) {
  var current;
  var i;
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
    var output = "The line is currently: ";
    for (i = 0; i < katzDeliLine.length; i++) {
      if (i === katzDeliLine.length - 1) {
        output += `${i+1}. ` + `${katzDeliLine[i]}`
      } else {
        output += `${i+1}. ` + `${katzDeliLine[i]}, `
      }
    }
    return output;
  }
}
