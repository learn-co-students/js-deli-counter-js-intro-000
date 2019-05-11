function takeANumber(katzDeliLine,newPersonInLine){
  katzDeliLine.push(newPersonInLine)
  return `Welcome, ${newPersonInLine}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length>0) {
    return `Currently serving ${katzDeliLine.shift()}.`
  }else {
    return `There is nobody waiting to be served!`
  }      //Verified length function can never be negative
}

function currentLine(katzDeliLine){
  var retVar = ""
  for(var quantity=katzDeliLine.length;quantity>0;quantity){
    if (!(quantity=== katzDeliLine.length)){ retVar = `,`+retVar}
    retVar=` ${quantity}. ${katzDeliLine[quantity-1]}`+ retVar
    quantity--
  }
  if (!(retVar==="")){
    return `The line is currently:`+ retVar
  }else return `The line is currently empty.`
}
