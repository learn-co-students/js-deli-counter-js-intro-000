function takeANumber(currentLine,newName){
  currentLine.push(newName)
  return `Welcome, ${newName}. You are number ${currentLine.length} in line.`

}
function nowServing(katzDeliLine){
  var firstPerson=katzDeliLine.shift()
  if(katzDeliLine.length===0){
    return "There is nobody waiting to be served!"
  }
  return `Currently serving ${firstPerson}.`
}

function currentLine(line){
  var newLine='The line is currently:'
  if(line.length===0){
    return "The line is currently empty."}
    for(let i=0;i<line.length;i++)
    {
      newLine=`${newLine} ${i+1}. ${line[i]}${i===line.length-1?'':','}`
    }
    return newLine
  }
