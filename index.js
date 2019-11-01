function takeANumber(line, newPerson){
  line.push(newPerson)
  return "Welcome, "+newPerson+". You are number "+line.length+" in line."
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length===0) return "There is nobody waiting to be served!"
  else {
    return "Currently serving "+katzDeliLine.shift()+"."
  }
}

function currentLine(line){
  if (line.length === 0) return "The line is currently empty."
  let result = "The line is currently: "
  for (let i=1; i<line.length+1; i++){
    if (i===line.length) result = result+i+". "+line[i-1]
    else result = result+i+". "+line[i-1]+", "
  }
  return result;
}