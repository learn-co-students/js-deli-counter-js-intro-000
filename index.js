function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!";
  } else {
  var result = `Currently serving ${katzDeliLine[0]}.`
    katzDeliLine.shift();
      }
      return result;
}

function currentLine(line){
  var pos = 0,
      string = "The line is currently: ";
  if (line.length === 0){
    return "The line is currently empty.";
  } else {
    for (var i = 0; i < line.length; i++){
      pos = i + 1;
      if (i === line.length - 1){
        string += pos + ". " + line[i];
      } else {
        string += pos + ". " + line[i] + ", ";
      }
    }
  }
  return string;
}
