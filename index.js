function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}
function nowServing(katzDeliLine){
  if (katzDeliLine.length < 1) return "There is nobody waiting to be served!"
  else var solution = `Currently serving ${katzDeliLine[0]}.`
  katzDeliLine.shift()
  return solution
}
function currentLine(katzDeliLine){
  if (katzDeliLine.length === 0) { return "The line is currently empty." }
  else  {
    var solution = 'The line is currently: '
    for (var i=0; i < katzDeliLine.length; i++){
      var num = i
      solution += num+1 + "." + " " + katzDeliLine[i] + "," + " "
    }
    return solution.slice(0,solution.length - 2)
}
}
