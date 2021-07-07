function takeANumber(katzDeliLine, name) {
  var i = 1;
  do  {
    i++;
    katzDeliLine.push(name);
    var key = katzDeliLine.indexOf(name);
    var array = `Welcome, ${name}. You are number ${key+1} in line.`;
  } while (name < name.length)
  return array;
}

function nowServing(katzDeliLine) {
  var i = 0;
  var name = katzDeliLine.shift();
    if (katzDeliLine.length > 0) {
      for (i = 0; i < katzDeliLine.length; i++) {
      return `Currently serving ${name}.`}
    } else {
      return "There is nobody waiting to be served!";
    }
  }

  function currentLine(katzDeliLine) {
    var i = 0;
    var array = [];
    if (katzDeliLine.length > 0) {
      for (i = 0; i < katzDeliLine.length; i++) {
        array.push(` ${i+1}. ${katzDeliLine[i]}`)
    } return `The line is currently:${array}`;
  }
    else {
      return "The line is currently empty.";
  }
}
