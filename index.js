function takeANumber(deliLine, customerName) {

  deliLine.push(customerName)
  var stringA = `Welcome, ${customerName}. You are number ${deliLine.length} in line.`
  return stringA
}

function currentLine(deliLine){
  var newDeliLine = []
  var numInLine = 0
  if(deliLine.length === 0){
    return("The line is currently empty.")
  }
  for(var i=0; i< deliLine.length; i++){
    numInLine = i+1

  if (deliLine.length > 0 && deliLine.length != deliLine.length-1) {
    newDeliLine.push(` ${numInLine}. ${deliLine[i]}`)
  }

    else if(deliLine.length == deliLine.length-1){
      newDeliLine.push(` ${numInLine}. ${deliLine[i]}`)
    }
}
var stringA = newDeliLine.toString()
var stringB = "The line is currently:"
var stringC = stringB + stringA
return stringC
}



function nowServing(deliLine){
    var serving = deliLine.shift()

    if(serving == undefined){
      return "There is nobody waiting to be served!"}

  else{
      return(`Currently serving ${serving}.`)
    }

}
