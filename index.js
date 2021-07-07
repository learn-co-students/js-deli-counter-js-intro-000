

function takeANumber(lineNumber,newPerson){
  lineNumber.push(newPerson);
  return "Welcome, " + newPerson + ". You are number " + lineNumber.length + " in line."
}

function nowServing(lineNumber){
  if (lineNumber.length === 0){
    return "There is nobody waiting to be served!";
  }else{
    return "Currently serving " +  lineNumber.shift() + ".";
  }
}

  function currentLine(lineNumber){
    if (lineNumber.length === 0){
      return "The line is currently empty.";
    }
    let result = [];
      for (let i = 0; i < lineNumber.length; i++){
        result.push(i + 1 + ". " + lineNumber[i]);

  } return "The line is currently: " + result.join(", ");
}
