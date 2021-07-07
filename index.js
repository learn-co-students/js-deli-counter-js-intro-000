function takeANumber(lineOfPeople,newPersonsname){
	lineOfPeople.push(newPersonsname)
  return `Welcome, ${newPersonsname}. You are number ${lineOfPeople.length} in line.`
}

function nowServing(line){
  if(line.length === 0){
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${line.shift()}.`
  }
}

function currentLine(currentLine){
let finalLine = "The line is currently: "
  if(currentLine.length === 0){
    return "The line is currently empty."
  } else {
    var names = []
    for(let i = 1; i <= currentLine.length; i++){
  names.push(`${i}. ${currentLine[i- 1]}`)
  }

  }
  return "The line is currently: " + names.join(", ")
}
