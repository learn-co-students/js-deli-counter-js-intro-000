var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  console.log("before: length is " + katzDeliLine.length);
  if (katzDeliLine.length > 0) {
    return `Currently serving ${katzDeliLine.shift()}.`;
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine) {
  var retval;
  
  if (katzDeliLine.length > 0) {
    retval= "The line is currently:";
    for (var i = 0; i < katzDeliLine.length; i++) {
      retval = `${retval} ${i+1}. ${katzDeliLine[i]}`;
      if (i < katzDeliLine.length - 1) { //do not add ',' after last name
        retval = `${retval},`;
      }
    }
  } else {
    retval = "The line is currently empty."
  }
  return retval;
}