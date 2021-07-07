function takeANumber(katzDeliLine, name) {

katzDeliLine.push(name)

  return(`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`)
}

///code above is correct

function nowServing(katzDeliLine) {
if (katzDeliLine.length > 0) {
  return `Currently serving ${katzDeliLine.shift()}.`
} else {
  return("There is nobody waiting to be served!")}

}

function currentLine(array) {
var lineArray = []
  if (array.length > 0){
    for(var i = 0; i < array.length; i++) {
      lineArray.push(`${i + 1}. ${array[i]}` );
  }
  return "The line is currently: " + lineArray.join(', ')
} else {
 return("The line is currently empty.")}
}
