var katzDeli = []

function takeANumber(katzDeliLine, name) {
  var myName
  katzDeliLine.push(name)
  if(katzDeliLine.length > 0){
    for (var i = 1; i < katzDeliLine.length + 1; i++) {
      myName = ("Welcome, " + name + ". You are number " + i + " in line.")
    }
    return myName
  }
}

function nowServing(katzDeliLine) {
  var i = 0
  var newKatz
  if(katzDeliLine.length > 0) {
    newKatz = `Currently serving ${katzDeliLine[i]}.`
    katzDeliLine.shift()
    return newKatz
  }
  else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine) {
  var newArray = []
  if(katzDeliLine.length - 1 >= 0) {
    for(var i = 1; i < katzDeliLine.length + 1; i++ ){
      if(i == 1){
        newArray[i-1] = (`${i}. ${katzDeliLine[i-1]}`)
      }
      else {
        newArray[i-1] = (` ${i}. ${katzDeliLine[i-1]}`)
      }
    }
  }
   else {
        newArray[i-1] = (`${i}. ${katzDeliLine[i-1]}`)
      }

  if(katzDeliLine.length > 0) {
    return (`The line is currently: ${newArray}`)
  }
  else {
    return "The line is currently empty."
  }
}
