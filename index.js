var katzDeliLine = [];
function takeANumber(katzDeliLine, name) {
katzDeliLine.push(name)
var num = katzDeliLine.length
return `Welcome, ${name}. You are number ${num} in line.`
}

function nowServing(katzDeliLine) {
if (katzDeliLine.length ===0) {return "There is nobody waiting to be served!"}
else {
var up = katzDeliLine[0]
  katzDeliLine.shift()
  return 'Currently serving ' +up+'.'
}
}

function currentLine(katzDeliLine) {
var i=0
var list= new String ()
  if (katzDeliLine.length > 0) { for (i=0; i < katzDeliLine.length; i++) {
    list = list +` ${i+1}. ${katzDeliLine[i]},`
    var newlist = list
  }
  return "The line is currently:"+newlist.substring(0,newlist.length -1)
}
else {return "The line is currently empty."}
}
