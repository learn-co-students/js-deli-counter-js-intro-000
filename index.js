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
    var str = "The line is currently:";
    var i = 0;
    curLine.foreach(person => () {
      if(i === curLine.length - 1){
        str += ` ${i}. ${person}`;
      }
      else{
          str += ` ${i}. ${person},`;
      }
      ++i;
    }
    return str;
  })
  else{
    return "The line is currently empty.";
  }
}
