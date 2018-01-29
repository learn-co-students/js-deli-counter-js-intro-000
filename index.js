function takeANumber(katzDeliLine, customerName) {
  katzDeliLine.push(customerName)
  return `Welcome, ${customerName}. You are number ${katzDeliLine.length} in line.`
  //Welcome, Ada. You are number 1 in line.
}

function nowServing(katzLine) {
if(katzLine.length>0){
  return "Currently serving "+ katzLine.shift() +"."
} else if (katzLine.length===0){
  return "There is nobody waiting to be served!"
} else {
  return "Fire! run out everyone!"
}
}

function currentLine(line) {
  if(line.length>0){
    //"The line is currently: 1. Ada 2. Grace"
    var customersInLine = "The line is currently:"
    for (var i=0;i<line.length;i++){
      customersInLine = customersInLine+` ${i+1}. ${line[i]}${(line.length-i)===1?"":","}`
    }
    return customersInLine
  }
  else if(line.length===0){
    return "The line is currently empty."
  }
}
