var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.indexOf(name) + 1} in line.`;
}

function nowServing(deliLine) {
  if (deliLine.length <= 0) {
    return "There is nobody waiting to be served!";
  } else {
    return `Currently serving ${deliLine.shift()}.`;
  }
}

function currentLine(inLine) {
  var names = 'The line is currently: ';
  if (inLine.length <= 0) {
    return "The line is currently empty.";
  } else {
    for (var i = 0; i < inLine.length; i++) {
      if (inLine.length-1 === i) {
        names += `${i+1}. ${inLine[i]}`;
      } else {
        names += `${i+1}. ${inLine[i]}, `;
      }
    }
  }
  return names;
}
