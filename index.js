var katzDeli = [];
var otherDeli = [];

function takeANumber(katzDeliLine,name){
katzDeliLine.push(name)
var length = katzDeliLine.length;
return "Welcome, " + name + "."+ " You are number " + length + " in line."
}

function nowServing(katzDeliLine)
{

    katzDeliLine.unshift()
    if(katzDeliLine.unshift() === 0){
      return "There is nobody waiting to be served!"
    }else{
      return "Currently serving " + katzDeliLine.shift() +"."
    }
}

function currentLine(line){
  var array = " "
  var j = 1
  if(line.length === 0){
    return "The line is currently empty."
  }else {
    array ="The line is currently: "
    for(var i = 0; i < line.length; i++){
    array += j + ". "+ line[i]
    ++j
    if (i < line.length-1) {
        array += ", "
      }
    }
  }
    return array
}
