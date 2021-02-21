function takeANumber(currntLine, newName){
  currntLine.push(newName)
  return `Welcome, ${newName}. You are number ${currntLine.length} in line.`
} 

function nowServing(currntLine){
  if (currntLine[0]) {
    return `Currently serving ${currntLine.shift()}.`;
  }else{
    return "There is nobody waiting to be served!"
  }
}
//${i === 0 ? \'\' : \'s\'}.
  function currentLine(katzDeliLine){
    var message = "The line is currently:";
    if (katzDeliLine.length > 0){
    for (var i = 0; i < katzDeliLine.length; i++){
      message = message + " " + `${katzDeliLine.indexOf(katzDeliLine[i]) + 1}. ` +
                                       `${katzDeliLine[i]}` +
                                       `${i != (katzDeliLine.length-1) ? ',' : ''}`;
     }
    }else{
      return "The line is currently empty."
    }
    return message;
  }
  