

function takeANumber (katzDeliLine, name) {

/*katzDeliLine++

var opening = "Welcome, "
var middle = ". You are number "
var lineNo = katzDeliLine.toString()
var personName = name
var closing = " in line."



return 'Welcome, ' + name + '. You are number ' + lineNo + ' in line'


//WHY DOESN'T THIS WORK?!?!!  return "Welcome, " + name + ". You are number " + katzDeliLine + " in line."
*/

katzDeliLine.push(name)

return 'Welcome, ' + name + '. You are number ' + katzDeliLine.length + ' in line.'

}

function nowServing (katzDeliLine){

while (katzDeliLine.length > 0)

{
  var atCounter = katzDeliLine.shift()
  return "Currently serving " + atCounter + "."
}

return "There is nobody waiting to be served!"

}

function currentLine(katzDeliLine) {
var i = 0
var no = 1
var lineList = [...katzDeliLine]

if (katzDeliLine.length > 0){

while (i < katzDeliLine.length)
{

if (no == 1) {
  lineList.splice(i, 1, no + ". " + lineList[i])
  i++
  no++
}
else {
  lineList.splice(i, 1, " " + no + ". " + lineList[i])
  i++
  no++
}



}
  return "The line is currently: " + lineList//"The line is currently empty."
}

else {

return "The line is currently empty."
}

}
