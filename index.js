function takeANumber(currentline,newName){
  currentline.push(newName)
  return `Welcome, ${newName}. You are number ${currentline.length} in line.`
}

function nowServing(katzDeliLine){
  var firstPerson=katzDeliLine[0]
  katzDeliLine.shift()
  if(katzDeliLine.length===0){
    return  "There is nobody waiting to be served!"
  }
  return `Currently serving ${firstPerson}.`

}

function currentLine(current){
var string='The line is currently:'
for(let i=0;i<current.length;i++){
  string=`${string} ${i+1}. ${current[i]}${current.length-1===i?'':','}`
}
if(current.length===0){
  return "The line is currently empty."
}
return string
}
