function takeANumber(line, person){
  line.push(person);
  var num = line.length;
  return `Welcome, ${person}. You are number ${num} in line.`
}

function nowServing(line){
  if(line.length === 0){
    return "There is nobody waiting to be served!"
  }else{
    var currentCust = line[0];
    line.shift();
    return `Currently serving ${currentCust}.`
  }
}

function currentLine(line){
  if(line.length === 0){
    return "The line is currently empty."
  }else{
    var greeting = "The line is currently:"
    var i = 0
    var l = line.length
    var newLine = new Array();
    while(i < l){
      newLine.push(` ${i+1}. ${line[i]}`)
      i++
    }
    var list = newLine.toString();
  }
  return `${greeting}${list}`
}
