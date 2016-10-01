

function takeANumber(katzDeliLine, n){
        katzDeliLine.push(n)
      return `Welcome, ${n}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(deliLine){

    if(deliLine.length === 0){
  return "There is nobody waiting to be served!"
  }

  else{
      if(deliLine.length > 0){
        var x = deliLine[0];
          deliLine.shift(x)
    return `Currently serving ${x}.`
    }
  }
}

function currentLine(katzDeliLine){

  if(katzDeliLine.length === 1){
  return  `The line is currently: 1. ${katzDeliLine[0]}`
}
  else if(katzDeliLine.length === 2){
    return `The line is currently: 1. ${katzDeliLine[0]}, 2. ${katzDeliLine[1]}`
  }
  else if(katzDeliLine.length === 3){
    return `The line is currently: 1. ${katzDeliLine[0]}, 2. ${katzDeliLine[1]}, 3. ${katzDeliLine[2]}`
  }
  else{
    if(katzDeliLine.length === 0){
      return "The line is currently empty."
    }

  }
}
