function takeANumber(deliLine, name){
  let currentCount = deliLine.length
  deliLine.push(name)
  return (`Welcome, ${name}. You are number ${currentCount+1} in line.`)
}

function nowServing(deliLine){
  if(deliLine.length>0){
    name = deliLine[0]
    deliLine.shift()
    return `Currently serving ${name}.`
  }
  else{
    return "There is nobody waiting to be served!"
  }
}

function currentLine(deliLine){
  if(deliLine.length>0){
    let message = 'The line is currently: '
    for(var i = 0; i < deliLine.length; i++){
      if((deliLine.length - 1) == i){
        message += `${i+1}. ${deliLine[i]}`
      }
      else{
        message += `${i+1}. ${deliLine[i]}, `
      }
    }
    return message;
  }
  else{
    return "The line is currently empty."
  }
}
