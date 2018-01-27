var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return "Welcome, " + name + ". You are number " + (katzDeliLine.indexOf(name) + 1) + " in line."
}

function nowServing (array) {
  if (array.length === 0) {
    return "There is nobody waiting to be served!"
    }
  else {
    var first = array.shift();
    return "Currently serving " + first + ".";
  }
}

function currentLine(array) {
  var a = [];
  var b = "The line is currently:"
  if (array.length === 0 ){
    return "The line is currently empty."
  }
  else {
    for (var i = 0 ; i < array.length ; i++){
      a.push(" "+ (i+1) + ". " + array[i]);
    }
    return b + a;
  }
}
