var katzDeli = []

function takeANumber (katzDeliLine, customerName){
  katzDeliLine.push(customerName);
  var linelength = katzDeliLine.length
  return `Welcome, ${customerName}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0){
    return `There is nobody waiting to be served!`
  }
 else {
   var nextPerson = katzDeliLine [0]
   katzDeliLine.shift()
   return `Currently serving ${nextPerson}.`
 }
}

function currentLine(katzDeliLine){
    var newLine =[];
  if (katzDeliLine.length === 0){
    return `The line is currently empty.`
}
  else {
    for (var i = 0; i < katzDeliLine.length; i++){
      newLine.push( " " + (i + 1) + ". " + katzDeliLine[i]);
    }
    return ("The line is currently:" + newLine)
  }
}
