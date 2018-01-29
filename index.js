function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  var position = katzDeliLine.indexOf(name) + 1
  return `Welcome, ${name}. You are number ${position} in line.`
}

function nowServing(deliLine){
  if (deliLine.length == 0){
    return "There is nobody waiting to be served!"
  }
  else {
    //var cur = deliLine.slice(1)
    //return "Currently serving " + deliLine.shift() + "."
    return `Currently serving ${deliLine.shift()}.`
  }
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length == 0){
    return "The line is currently empty."
  }
  else {
    var str = "The line is currently: "
    for (var i = 0; i < katzDeliLine.length; i++){
      var end = i + 1
      if (end == katzDeliLine.length) {
        str += (i+1) + ". " + katzDeliLine[i]
      }
      else {
        str += (i+1) + ". " + katzDeliLine[i] + ", "
      }
    }
    return str
  }
}
