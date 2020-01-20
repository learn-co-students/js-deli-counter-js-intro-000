function takeANumber(katzDeliLine, name) {
  var deliLine = katzDeliLine.length +1;
  katzDeliLine.push(name);
  return (`Welcome, ${name}. You are number ${deliLine} in line.`);

}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`
  }
  }

  function currentLine(katzDeliLine) {
    if (katzDeliLine.length > 0) {
      var output = "";
      for(var i = 0; i < katzDeliLine.length; i++) {
          output += (i + 1) + ". " + katzDeliLine[i] + ", ";
        }
      output = output.slice(0, -2);
      return `The line is currently: ${output}`;
    } else {
      return "The line is currently empty.";
    }
  }
