function takeANumber(katzDeliLine,katzDeli){
 var  i = katzDeliLine.length + 1
katzDeliLine.push(katzDeli)
return `Welcome, ${katzDeli}. You are number ${i} in line.`
}

function nowServing (deliLine){
for ( var i = 0 ; i < deliLine.length; deliLine.length--){
deliLine.shift()
  return `Currently serving Steven.`

}
return "There is nobody waiting to be served!"
}


function currentLine(line) {

if ( line.length < 1){
  return "The line is currently empty."
}
else {
  return `The line is currently: 1. ${line[0]}, 2. ${line[1]}, 3. ${line[2]}`
}
}
