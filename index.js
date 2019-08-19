
function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return "Welcome, " + name + ". " + "You are number " + katzDeliLine.length + " in line.";
}

function nowServing(x){
  if (x.length === 0){
    return "There is nobody waiting to be served!";
  }else{
    var name = x[0];
    x.splice(0, 1);
    return "Currently serving " + name + "."
  }
}

function currentLine(line){
  var x = [];
  if (line.length === 0){
    return "The line is currently empty."
  } else {
    for(var i = 0; i < line.length; i++){
      x += (i + 1) + ". " + line[i] + ", "
    }
    x = x.slice(0, x.length-2)
    return "The line is currently: " + x;
  }
}
