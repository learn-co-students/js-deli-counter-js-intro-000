function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length > 0){
    return 'Currently serving '+ katzDeliLine.shift() +'.'
  }else{
    return 'There is nobody waiting to be served!'
  }
}
let katzDeliLine = ['steve', 'mike', 'jim']
function currentLine(katzDeliLine){
  let line = [];
  for(let i = 0; i<katzDeliLine.length; i++){
    line.push(' '+[i+1]+'. '+katzDeliLine[i])
  }
  if (katzDeliLine.length >0){
      return 'The line is currently:'+ line
    }else{
      return 'The line is currently empty.'
    }
}
