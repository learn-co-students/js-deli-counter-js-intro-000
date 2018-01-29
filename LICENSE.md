var katzDeli = []
function takeANumber(katzDeliLine, custName){
  katzDeliLine.push(custName)
  return "Welcome, "+ custName + ". You are number " + katzDeliLine.length + " in line."
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length = 0)
    return "There is nobody waiting to be served!"
  else
    return "Currently serving " + katzDeliLine.shift() "."

}
