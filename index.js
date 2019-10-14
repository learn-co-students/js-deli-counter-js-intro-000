function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}
function nowServing(katzDeliLine){
  if (katzDeliLine.length===0){
    return 'There is nobody waiting to be served!'
  }
  return `Currently serving ${katzDeliLine.shift()}.`
}
function currentLine(line){
  if (line.length===0){
    return 'The line is currently empty.'
  }
  var string=''
  for (var i=0; i<line.length-1; i++){
    string+=`${i+1}. ${line[i]}, `
  }
  string+=`${i+1}. ${line.pop()}`
  return `The line is currently: ` + string
}
