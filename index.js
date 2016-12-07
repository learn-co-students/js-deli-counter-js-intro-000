var katzDeliLine = []
function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
/*Since katzDeliLine is a global, it doesn't actually need to be passed to the
function. However, the test is designed to expect it to be passed like this.*/
  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  }
  else {
    var name = katzDeliLine[0]
    katzDeliLine.shift()
    return `Currently serving ${name}.`
  }
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length === 0){
    return "The line is currently empty."
  }
  else {
    var reportString = "The line is currently: "
    for (var i = 0; i < katzDeliLine.length-1; i++){
      reportString = reportString.concat(`${i+1}. ${katzDeliLine[i]}, `)
    }
    reportString = reportString.concat(`${i+1}. ${katzDeliLine[i]}`)
    /*OK, so it's not an Oxford comma...*/
    return reportString
  }
}