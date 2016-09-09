var katzDeli = []
function takeANumber(katzDeliLine, custName){
  katzDeliLine.push(custName)
  return "Welcome, "+ custName + ". You are number " + katzDeliLine.length + " in line."
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0)
    return "There is nobody waiting to be served!"
  else
    return "Currently serving " + katzDeliLine.shift() + "."

}

function currentLine(katzDeliLine){
  var i
  var msg
  if (katzDeliLine.length === 0)
    msg = "The line is currently empty."

  else{
    msg = "The line is currently: "
    for (i=1; i <= katzDeliLine.length; i++){
      if (i===katzDeliLine.length)
        msg = msg + i +". "+ katzDeliLine[i-1]
      else
        msg = msg + i +". "+ katzDeliLine[i-1] + ", "
    }
  }
  return msg
}
