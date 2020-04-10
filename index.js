var katzDeliLine = []

function takeANumber(katzDeliLine, name){
// for (let i = 0; i < katzDeliLine.length; i++)
katzDeliLine.push(name) //get name in line done ASAP
var i = 0 // people counter - first person will become 1
while ( i < katzDeliLine.length){ // will be true
  i++
  }
  return(`Welcome, ${name}. You are number ${i} in line.`) //also allows us to use i here
}



function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0){ // scan line ASAP
    return "There is nobody waiting to be served!"
  }else{
    return('Currently serving ' + katzDeliLine.shift() + '.') //shift perfect here allows us to remove first person in/from line AND print name
  }
}

function currentLine(katzDeliLine){
  if(katzDeliLine.length === 0){ // scan line ASAP
    return "The line is currently empty."
}else{
  const inline = []
  var i = 0
  while(i < katzDeliLine.length){
    inline.push(' ' + (i + 1) + '. ' + katzDeliLine[i])
    i++
  }
  return ('The line is currently:' + inline)
    }
}
