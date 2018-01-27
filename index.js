var katzDeli = [];

function takeANumber(katzDeliLine, name) {
    katzDeliLine.push(name);
    var currentNumber = katzDeliLine.indexOf(name);
    return `Welcome, ${name}. You are number ${currentNumber + 1} in line.`;
}

function nowServing(deliLine) {
  if (deliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var currentPerson = deliLine[0]
    deliLine.shift();
    return `Currently serving ${currentPerson}.`;
  }
}

function currentLine(deliline) {
  var order = "The line is currently: ";
  if (deliline.length === 0) {
    return "The line is currently empty."
  } else {
    for (var i = 0; i < deliline.length; i++) {
      order = order + `${i+1}. ${deliline[i]}`;
      if(deliline[i] !== deliline[deliline.length-1]) {
        order = order + ", ";
      }
    }
  }
  return order;
}
