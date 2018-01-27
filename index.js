function takeANumber(deliLine, name){
  // names are pushed to the array here
 deliLine.push(name)
 return `Welcome, ${name}. You are number ${deliLine.length} in line.`
}

function nowServing(deliLine){
  if(deliLine.length < 1) {
    return "There is nobody waiting to be served!"
  }

  return `Currently serving ${deliLine.shift()}.`
}

function currentLine(deliLine) {
  // array deliLine currenty has names, numbers can be infered
  if(deliLine < 1){
    return "The line is currently empty."
  }

  var lineDetailed = []

  for (var i = 0, l = deliLine.length; i < l; i++ ) {
    lineDetailed.push(`${i + 1}. ${deliLine[i]}`)
  }

  return `The line is currently: ${lineDetailed.join(', ')}`

}
