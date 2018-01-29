var katzDeliLine = [];
function takeANumber(katzDeliLine, customer){
  katzDeliLine.push(customer);
  return `Welcome, ${customer}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
    return katzDeliLine.length > 0 ? `Currently serving ${katzDeliLine.shift()}.` : "There is nobody waiting to be served!"
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length === 0) {
   return 'The line is currently empty.'
 }
  var nameLine = [];
  for (var i = 0; i < katzDeliLine.length; i++){
      nameLine.push(`${i + 1}. ${katzDeliLine[i]}`)
  }
  return `The line is currently: ${nameLine.join(', ')}`
}
