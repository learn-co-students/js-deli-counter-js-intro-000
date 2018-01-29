var katzDeli = []

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.indexOf(name) + 1} in line.`
}

function nowServing(katzDeliLine){
  while(katzDeliLine.length > 0){
    var output = `Currently serving ${katzDeliLine[0]}.`
    katzDeliLine.shift()
    return output
  }
  return "There is nobody waiting to be served!"
}

function currentLine(katzDeliLine){
  if(katzDeliLine.length > 0){
    var output = "The line is currently:"
    for(var i = 0; i < katzDeliLine.length; i++){
      output = output + ` ${i + 1}. ${katzDeliLine[i]},`
    }
    return output.slice(0, -1)
  } else {
    return "The line is currently empty."
  }
}
