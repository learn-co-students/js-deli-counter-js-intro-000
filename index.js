//takeANumber adds a person to the line, and handles multiple people being added
function takeANumber(currentLine, newName){
  currentLine.push(newName);
  return `Welcome, ${newName}. You are number ${currentLine.length} in line.`
}

/*nowServing returns "There is nobody waiting to be served!" if there is no one on line,
and an anouncement about who it's serving if the line shifts*/
function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  }
  else{
    var currentlyServing = katzDeliLine[0]
    katzDeliLine.shift()
    return `Currently serving ${currentlyServing}.`
  }
}

/*currentLine returns "The line is currently empty." if no one is in line,
says who is in line if people are waiting, and returns a different
response programmatically given a different array of names.*/
function currentLine(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "The line is currently empty."
  }
  else{
    var response = "The line is currently: "
    for(let i = 1; i < katzDeliLine.length; i++){
      response = response + i + ". " + katzDeliLine[i-1] +", "
    }
    response = response + katzDeliLine.length + ". " + katzDeliLine[katzDeliLine.length - 1]
    return response
  }
}
