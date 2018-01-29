var katzDeli = []
function takeANumber(katzDeli, person){
    var string = (katzDeli, person)
        katzDeli.push(string)
    var stringTwo = ("Welcome, "+person+". You are number "+ (katzDeli.length)+ " in line.");
    return stringTwo
}

function nowServing(listOfPeople){
  if (listOfPeople.length < 1){
    var noOne = "There is nobody waiting to be served!"
    return noOne
  }else{
    var who = listOfPeople[0]
    var string = ("Currently serving " + who+".")
    listOfPeople.shift()
  return string
}}

function currentLine(listOfPeople){
  if (listOfPeople.length < 1){
    var noOne = "The line is currently empty."
    return noOne
  }else{
    var string = ("The line is currently: 1. " + listOfPeople[0] + ", 2. " + listOfPeople[1] + ", 3. " + listOfPeople[2])
  return string
}}
