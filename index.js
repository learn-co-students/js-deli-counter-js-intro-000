var katzDeliLine = []

function takeANumber(array, name){
array.push(name)
return `Welcome, ${name}. You are number ${array.length} in line.`
}

function nowServing(katzDeliLine){
if(katzDeliLine.length === 0) {
 return "There is nobody waiting to be served!"
} else{
return `Currently serving ${katzDeliLine.shift()}.`
}
}

function currentLine(katzDeliLine){
if (katzDeliLine.length === 0) {
  return "The line is currently empty."
}
var array = []
for(let i = 0; i < katzDeliLine.length; i+=1) {
  array.push(`${i+1}. ${katzDeliLine[i]}`)
}
return `The line is currently: ${array.join(", ")}`
}
