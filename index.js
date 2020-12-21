function takeANumber (line, name) {
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(katzDeliLine){
  return katzDeliLine.length === 0 ? 'There is nobody waiting to be served!' : `Currently serving ${katzDeliLine.shift()}.`
}

function currentLine(line){
 if (line.length === 0){
   return 'The line is currently empty.'
  }else{
    var currentLine = []
    for(let i =0; i< line.length; i++){
      currentLine.push(`${i+1}. ${line[i]}`)
    }
   return `The line is currently: ${currentLine.join(', ')}`
  }
}