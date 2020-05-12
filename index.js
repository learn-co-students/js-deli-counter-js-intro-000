function takeANumber(current,newPerson){

  current[current.length] = newPerson
  var number = current.length
  return "Welcome, " + newPerson + ". You are number " + number + " in line."
}
function nowServing(current){
  var number = current.length
  var serving = current[0]
  if (current.length > 0){

    current.shift();
    return "Currently serving " + serving + "."
  }
    else {
        return "There is nobody waiting to be served!"
    }
}
function currentLine(current){
  var number = current.length
  var line = "The line is currently: "
  if(current.length === 0){
    return "The line is currently empty."

  } else {
      for (var i = 0; i < current.length; i++) {
        if(i === current.length - 1){
          line = line + (i+1) + ". " + current[i]
        } else {
          line = line + (i+1) + ". " + current[i] + ", "
        }

      }

      return line;
  }
}
