function takeANumber(katzDeliLine, name) {
  for (var i = 0; i < katzDeliLine.length; i++) {
    katzDeliLine.push(`Welcome, ${name}. You are number ` + i + " in line.")
  }
  return katzDeliLine
}
/*
function nowServing(katzDeliLine){
  if (katzDeliLine.length !=== 0) {
    katzDeliLine.shift()
      return 'Currently serving ${[katzDeliLine[0]]}';
  } else (katzDeliLine.length === 0) {
    return "There is nobody left to be served!"
  }
  }
}
*/
