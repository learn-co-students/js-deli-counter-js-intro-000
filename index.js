function takeANumber(line,name){
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}
function nowServing(katzDeliLine){
  var firstPerson=katzDeliLine.shift()
  if(katzDeliLine.length===0){
    return  "There is nobody waiting to be served!"
  }
  return `Currently serving ${firstPerson}.`
}
function currentLine(line){

  if(line.length===0){
    return "The line is currently empty."
  }

  var currentLineString="The line is currently:"
  for(let i=0;i<line.length;i++){

   currentLineString = `${currentLineString} ${i+1}. ${line[i]}${i===line.length-1?'':','}`

  }

  return currentLineString

}
