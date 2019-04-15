

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
return "Welcome, " + name + ". You are number "
+ katzDeliLine.length + " in line."
}

function nowServing(katzDeliLine, name) {
if (katzDeliLine.length > 0){
  return "Currently serving " + katzDeliLine.shift(name) +"."
  }
  return "There is nobody waiting to be served!"
}


function currentLine(katzDeliLine){
  if(katzDeliLine.length == 0){
     return "The line is currently empty."
  }
  var output = "The line is currently:"
  for (var i = 0; i < katzDeliLine.length; i++){
    output += ( ` ${i+1}. ${katzDeliLine[i]}`)

    if (i < katzDeliLine.length - 1) {
      output += ","
    }
  }

  return output

}
