var katzDeli=[]

function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name)

  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
  var customer=katzDeliLine[0]

  if (katzDeliLine.length===0){
    return "There is nobody waiting to be served!"
  }

  else {
    katzDeliLine.shift()
    return `Currently serving ${customer}.`
    }
}

function currentLine(katzDeliLine){
  var n=0
  var customer

  if (katzDeliLine.length===0){
    return "The line is currently empty."
  }
  else {

    while(n<katzDeliLine.length){
      customer=katzDeliLine[n]
      katzDeli.push(` ${n+1}. ${customer}`)
      n++
    }
  }
  return "The line is currently:"+katzDeli
}
