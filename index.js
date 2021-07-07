var katzDeli = [];

function takeANumber(katzDeliLine, newPersonName){
katzDeliLine.push(newPersonName)

return(`Welcome, ${newPersonName}. You are number ${katzDeliLine.length} in line.`)
}

function nowServing(katzDeliLine){
if (katzDeliLine.length == 0){
return "There is nobody waiting to be served!"
}
return `Currently serving ${katzDeliLine.shift()}.`
}

var lineList = [];
function currentLine(katzDeliLine){
  if (katzDeliLine.length == 0){
    return "The line is currently empty."
  }else{
    for (let i = 0; i < katzDeliLine.length; i++)

    lineList.push(`${i + 1}. ${katzDeliLine[i]}`)
  }
     return `The line is currently: ${lineList.join(', ')}`
}
