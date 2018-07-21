var katzDeliLine = new Array()

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length===0){
    return "There is nobody waiting to be served!"
  }
  else{
    var first = katzDeliLine.shift()
    return `Currently serving ${first}.`
  }
}

function currentLine(katzDeliLine){
  if(katzDeliLine.length===0){
    return "The line is currently empty."
  }
  else{
    var newArr= new Array()
    var str = ""
    for (var i = 0; i<katzDeliLine.length; i++){
      if(i===0){
      str=`${i+1}. ${katzDeliLine[i]}`
    }
    else{
      str=` ${i+1}. ${katzDeliLine[i]}`
    }
    newArr[i]=str
    }
    return "The line is currently: " +newArr
  }
}
