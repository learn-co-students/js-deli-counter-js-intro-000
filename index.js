function takeANumber(currentLine,person){
  currentLine.push(person)
  return `Welcome, ${person}. You are number ${currentLine.length} in line.`
}
function nowServing(katzDeliLine){
  if (katzDeliLine.length>=1){
    return "Currently serving "+katzDeliLine.shift()+"."
  }
  else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length===0){
    return 'The line is currently empty.'
  }
  else {
    let newstr="The line is currently: ";
    for (let i=0;i<katzDeliLine.length-1;i++){
      newstr+=`${i+1}. ${katzDeliLine[i]}, `
    }
    newstr+=`${katzDeliLine.length}. ${katzDeliLine[katzDeliLine.length-1]}`
    return newstr;
  }
}
