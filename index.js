function takeANumber(curLine, newGuest){
    curLine.push(newGuest)
    var temp = curLine.length;
    return `Welcome, ${newGuest}. You are number ${temp} in line.`;
}

function nowServing(curLine){

  var str = "There is nobody waiting to be served!"
  if(curLine.length <= 0){
    return str
  }
  var strNext = curLine[0]
  curLine.shift()
  return `Currently serving ${strNext}.`

}

function currentLine(curLine){
  if(curLine.length > 0){
    var str = ""
    curLine.foreach(person =>  {

    }
  }
  else{
    return "The line is currently empty."
  }

}
