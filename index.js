function takeANumber(katzDeliLine, name){
  var i=katzDeliLine.length +1
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${i} in line.`
}


function nowServing(katzDeliLine){
  if (katzDeliLine.length===0){
    return 'There is nobody waiting to be served!'
  }
  else {
    var i=katzDeliLine[0]
    katzDeliLine.shift()
    return (`Currently serving ${i}.`);}
  }


function currentLine(katzDeliLine){
  if (katzDeliLine.length===0){
    return `The line is currently empty.`
  }
  else {
    var curLine=[]
    for (let i=0; i<katzDeliLine.length; i++){
      curLine.push(` ${i+1}. ${katzDeliLine[i]}`)
    }
  }
  return `The line is currently:`+curLine
}
