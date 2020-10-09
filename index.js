function takeANumber(katzDeliLine, name)
{
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

var nowServing = katzDeliLine => {
  if (katzDeliLine.length > 0) {
     var mostrar = katzDeliLine[0];
     katzDeliLine.shift();
     return `Currently serving ${mostrar}.`;
  }else {
     return "There is nobody waiting to be served!";
  }
}

var currentLine = katz => {
  if (katz.length === 0) {
    return "The line is currently empty."
  }else {
    var array = [];
    for (var i = 0; i < katz.length; i++) {
      array.push(` ${i+1}. ${katz[i]}`);
  }
  return `The line is currently:`+ array;
  }
}
