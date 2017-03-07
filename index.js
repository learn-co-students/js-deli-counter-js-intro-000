var katzDeli = {};
var deliLine = {};

function takeANumber(deliLine, name){
  deliLine.push(name);
  return "Welcome, " + (name) + ". You are number " + (deliLine.length) + " in line."
}

function nowServing(deliLine){
  if (deliLine.length > 0){
      return "Currently serving " + (deliLine.shift()) + "."
  }else {
    return "There is nobody waiting to be served!"
}
}

function currentLine(deliLine){
  var name = [];
  var greeting = 'The line is currently: '
  if (deliLine.length > 0){
    for (var i = 0; i < deliLine.length; i++){
    name.push(`${i+1}. ${deliLine[i]}`)
  }
  return greeting + name.join(", ")
  }else{
    return "The line is currently empty."
  }
}
