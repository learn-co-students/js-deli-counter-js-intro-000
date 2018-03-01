var katzDeli = [];
function takeANumber(katzDeliLine,name){

  katzDeliLine.push(name)

  var index = katzDeliLine.length


  return `Welcome, ${name}. You are number ${index} in line.`

}
function nowServing(katzDeliLine){
  if (katzDeliLine.length > 0)
  {
    return "Currently serving " + katzDeliLine.shift() + "."
  }

  else{
  return "There is nobody waiting to be served!"
      }

}
function currentLine(katzDeliLine){
  var i = 0
  if (katzDeliLine.length == 0){
    return "The line is currently empty."
  }
  var lineupdate = "The line is currently: "
  while(i < katzDeliLine.length){ if (i == katzDeliLine.length - 1)
    lineupdate = lineupdate + (i + 1)  + ". " +  katzDeliLine[i] 
    else  lineupdate = lineupdate + (i + 1)  + ". " +  katzDeliLine[i] +", "
    i++
  }
    return lineupdate
}
