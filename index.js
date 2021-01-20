function takeANumber(currentLine, newPerson){
  currentLine.push(newPerson)
  return `Welcome, ${newPerson}. You are number ${currentLine.length} in line.`
}

function nowServing(deliLine){
  if(deliLine.length > 0){
    name = deliLine[0]
    deliLine.shift()
    return `Currently serving ${name}.`

} else {
  return "There is nobody waiting to be served!"
}
  }


function currentLine(deliLine){
let newLine = []
  if(deliLine.length === 0){
    return `The line is currently empty.`
  }else
  for(let i = 0; i < deliLine.length; i++) {
    newLine.push(`${(i+1)}. ${deliLine[i]}`)
  }
   return `The line is currently: ` +  newLine.join(', ')
}
