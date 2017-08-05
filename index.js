var katzDeli = []

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`

}

function nowServing(katzDeliLine){
  if (katzDeliLine.length > 0) {
    var current = katzDeliLine[0]
    katzDeliLine.shift()
    return `Currently serving ${current}.`

  }

  else {
    return 'There is nobody waiting to be served!'
  }

}

function currentLine(line){
  var finalLine = []
  if (line.length > 0){
    for (var i = 0; i < line.length; i++){
       finalLine.push (` ${i+1}. ${line[i]}`)
    }
    return `The line is currently:${finalLine}`
  }
  else {
    return 'The line is currently empty.'
  }
}
