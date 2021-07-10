var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);

  return `Welcome, ${name}. You are number ` + katzDeliLine.length + ` in line.`;
}

function nowServing(katzDeliLine) {

  if (katzDeliLine.length === 0)
  {
    return "There is nobody waiting to be served!";
  }
  else{
    let nextPerson = katzDeliLine[0];

    katzDeliLine.splice(0,1);
    return `Currently serving ${nextPerson}.`;
  }
}

function currentLine(line) {

  if (line.length === 0) {
    return "The line is currently empty.";
  }
  else {
    let message = "The line is currently: ";

    for (var i = 0; i < line.length; i++) {
      message += `${i+1}. ` + line[i];

      if (i !== (line.length -1))
      {
        message += ", ";
      }
    }
    return message;
  }
}
