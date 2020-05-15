function takeANumber(katzDeli, newPerson){
  katzDeli.push(newPerson)
  return `Welcome, ${newPerson}. You are number ${katzDeli.length} in line.`
}


function nowServing(deliLine){
  if (!deliLine.length){
  return  "There is nobody waiting to be served!"
  }
  return `Currently serving ${deliLine.shift()}.`
}



function currentLine(line){
  var newDeliLine=[]
  if (line.length <= 0){
    return "The line is currently empty."
  }else {
    for (let i = 0; i< line.length; i++)
    newDeliLine.push(` ${i+1}. ${line[i]}`)
  }

  return `The line is currently:${newDeliLine}`
}
