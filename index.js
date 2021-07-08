var katzDeli=[];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  for (var i=0; i<katzDeliLine.length; i++) {
  var positionInLine=katzDeliLine.lastIndexOf(name)+1
  }
  return `Welcome, ${name}. You are number ${positionInLine} in line.`
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length===0) {
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`
  }
}

function currentLine(katzDeliLine){

  if (katzDeliLine.length===0) {
    return "The line is currently empty."
    } else {
    for (var i=0; i<katzDeliLine.length; i++) {
    var name= katzDeliLine[i]
    var spot=katzDeliLine.indexOf(name)+1+". "
    katzDeliLine.splice(i, 1, spot+name)
    }
    return `The line is currently: ${katzDeliLine.join(", ")}`
  }
}
