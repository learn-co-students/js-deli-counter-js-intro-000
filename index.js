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

}
