var katzDeli = []
function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}
function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0){
    return 'There is nobody waiting to be served!'
  }
  else{
    return `Currently serving ${katzDeliLine.shift()}.`
  }
}
function currentLine(line){
  var string = 'The line is currently'
  if(line.length===0){
    string += ' empty.'
  }
  else{
    string += ': '
    for(var i=1;i<line.length;i++){
      string += `${i}. ${line[i-1]}, `
    }
    string += `${line.length}. ${line[line.length-1]}`
  }
  return string
}
