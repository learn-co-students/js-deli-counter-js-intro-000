function takeANumber(katzDeliLine, name)  {
  katzDeliLine.push(name);
  for (let i = 0; i < katzDeliLine.length; i++)  {
    if (katzDeliLine[i] === name) {
      let getIndex = i + 1;
      return `Welcome, ${name}. You are number ${getIndex} in line.`;
    }
  }
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0)  {
    return "There is nobody waiting to be served!";
  }
  else {
    var getFirstPerson = katzDeliLine.shift();
    return `Currently serving ${getFirstPerson}.`;
  }
}

function currentLine(katzDeliLine)  {

  var tempArray = [];
  var returnLineList = "";
  var counter = 1;

  if (katzDeliLine.length === 0)  {
    return "The line is currently empty.";
  }
  else {
    for (let i = 0; i < katzDeliLine.length; i++)  {
      tempArray[i] = counter+ ". " +katzDeliLine[i];
      returnLineList = tempArray.join(', ');
      counter++;
    }
    return `The line is currently: ${returnLineList}`;
  }
}
