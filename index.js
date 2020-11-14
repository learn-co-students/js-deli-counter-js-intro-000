function takeANumber(current,newName){
  current.push(newName)
  return `Welcome, ${newName}. You are number ${current.length} in line.`
}
function nowServing(katzDeliLine){
  var firstPerson = katzDeliLine.shift()
  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  }
  return `Currently serving ${firstPerson}.`
}

function currentLine(katzDeliLine){
  var allNames=''
  for (let num = 0;num < katzDeliLine.length;num += 1){

    allNames +=` ${num+1}. ${katzDeliLine[num]}${num<katzDeliLine.length-1?',':''}`
  }
  if (katzDeliLine.length === 0){
    return 'The line is currently empty.'
  }

  return `The line is currently:${allNames}`

}
function isEmpty(array){
  if (array.length===0)
  {
    return 'True'
  }
}
