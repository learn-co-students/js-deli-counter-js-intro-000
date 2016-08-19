var katzDeli = [];

function takeANumber(line, person){
  line.push(person)
  return "Welcome, " + person + ". You are number " + line.length.toString() + " in line."

}

function nowServing(line){

  if(line.length === 0){
    return "There is nobody waiting to be served!"
  }
  else{
    var person = line.shift()
    return "Currently serving " + person + "."
  }
}

function currentLine(line){

  if(line.length === 0){
    return "The line is currently empty."
  }
  else{
    var printLine = "The line is currently: "
    for(var i = 0; i < line.length; i++){
      printLine += (i+1).toString() + ". " + line[i]
      if (i < line.length-1){
        printLine += ", "
      }
    }

    return printLine
  }
}
