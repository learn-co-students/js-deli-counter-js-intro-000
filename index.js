var katzDeliLine = []

function takeANumber(katzDeliLineLine, name){
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(){
  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  }
  else{
    var head = katzDeliLine.splice(0,1)
    return `Currently serving ${head}.`
  }
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length === 0){
    return "The line is currently empty."
  }
  else{
    var strLine = ""
    for (var i =0; i<katzDeliLine.length; i++){
      if (i === 0){
        strLine = strLine.concat(i+1, ". ", katzDeliLine[i])
      }
      else{
        strLine = strLine.concat(", ", i+1, ". ", katzDeliLine[i])
      }
    }
    return ("The line is currently: ".concat(strLine))
  }

}
