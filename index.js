function takeANumber (katzDeliLine, newPerson){
  katzDeliLine.push(`${newPerson}`)
  var placeInLine = katzDeliLine.length
  return `Welcome, ${newPerson}. You are number ${placeInLine} in line.`
}

function nowServing (katzDeliLine){
  if (katzDeliLine.length > 0){
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
  else {
    return 'There is nobody waiting to be served!';
  }
}

function currentLine (katzDeliLine){
  const placeInLineAndName = []

  for (let i = 0; i < katzDeliLine.length; i++ ){
    placeInLineAndName.push(` ${i+1}. ${katzDeliLine[i]}`)
  }

  if (katzDeliLine.length > 0){
    return `The line is currently:${placeInLineAndName}`
  }
  else {
    return `The line is currently empty.`
  }
}
