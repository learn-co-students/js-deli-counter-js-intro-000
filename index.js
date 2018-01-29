function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length < 1){
    return "There is nobody waiting to be served!"
  }
  return  `Currently serving ${katzDeliLine.shift()}.`
}

function currentLine(katzDeliLine){
  var list = "The line is currently:"
  if(katzDeliLine.length < 1){
    return "The line is currently empty."
  }
  for(let i = 0; i < katzDeliLine.length; i++){
    list += ` ${i+1}. ${katzDeliLine[i]}${i < katzDeliLine.length-1?',':''}`
  }
  return list
}
