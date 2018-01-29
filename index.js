function takeANumber(katzDeli, name){
  katzDeli.push(`${name}`);
  var i = katzDeli.length;
  return `Welcome, ${name}. You are number ` + i + ` in line.`
}

function nowServing(array){
  if (array.length > 0) {
    return "Currently serving " + array.shift() + "."
    array;
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine){
  var array = [];

  if(katzDeliLine.length > 0) {
    for (var i = 0; i < katzDeliLine.length; i++)
      array.push(" " + (i+1) + ". " + katzDeliLine[i]);
      return "The line is currently:" + array
    } else {
    return "The line is currently empty."
  }
}
