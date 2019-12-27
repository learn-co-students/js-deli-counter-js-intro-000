
function takeANumber(lineOfPeople,newPersonName){
  var lineNumber = lineOfPeople.length+1
  lineOfPeople.push(newPersonName)
  return `Welcome, ${newPersonName}. You are number ${lineNumber} in line.`

}

function nowServing(lineOfPeople){
  var name = lineOfPeople[0]
  while(lineOfPeople.length>0){
    lineOfPeople.shift()
    return `Currently serving ${name}.`
  }
  return "There is nobody waiting to be served!"
}


function currentLine(lineOfPeople){
  if(lineOfPeople.length>0){
    var names=[]
    for(let i=1;i<=lineOfPeople.length;i++){
      names.push(` ${i}. ${lineOfPeople[i-1]}`)
    }
    return `The line is currently:${names}`
  }else{
    return "The line is currently empty."
  }

}
