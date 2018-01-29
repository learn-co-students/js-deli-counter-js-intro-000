function takeANumber(katzDeliLine, name) {
  var num;
  var mess;

  num = katzDeliLine.push(name);
  mess = `Welcome, ${name}. You are number ${num} in line.`;

  return mess;
}

function nowServing(katzDeliLine) {
  var mess;

  if (katzDeliLine.length === 0)
    mess = "There is nobody waiting to be served!"
  else
    mess = `Currently serving ${katzDeliLine.shift()}.`;

  return mess;
}

function currentLine(katzDeliLine) {

  var mess;

  if (katzDeliLine.length === 0)
    {
      mess = "The line is currently empty."
    }
  else
    {
      mess = "The line is currently: ";
       for (var i = 0; i < katzDeliLine.length; i++) {
         if (i >0)
           mess = mess + ", ";

         mess = mess + `${i+1}. ${katzDeliLine[i]}`
       }
    }
  return mess;
}
