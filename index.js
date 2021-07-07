function takeANumber(peopleInLine, name) {
    peopleInLine.push(name)
    var welcome = "Welcome, " + name + ". You are number " + peopleInLine.length + " in line."
    return welcome
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  }
  return "Currently serving " + katzDeliLine.shift() + "."
}

function currentLine(DeliLine) {
  if (DeliLine.length === 0) {
    return "The line is currently empty."
  }
  var toReturn = "The line is currently: "
  for (var i = 0; i < DeliLine.length; i++) {
    toReturn += i + 1 + ". " + DeliLine[i] + ", "
  /*  if(i < DeliLine.length -1) {
     toReturn += ", "
    }
     */
  }

  return toReturn.slice(0, -2) //toReturn.length -2)

}
