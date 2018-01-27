var katzDeliLine = []

function takeANumber(katzDeliLine, personName) {
  katzDeliLine.push(personName);
  return `Welcome, ${personName}. You are number ${katzDeliLine.length} in line.`;
};

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var whatEver = `Currently serving ${katzDeliLine[0]}.`;
    katzDeliLine.shift();
    return whatEver;
  } else {
    return "There is nobody waiting to be served!";
  }

}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length > 0) {
       function lone() {
         var i=0;
         var array = [];
      while (i < katzDeliLine.length) {
      array.push(` ${i+1}. ${katzDeliLine[i]}`);
         i++;
                }
       console.log(array);
       return array;
          }
    return `The line is currently:` + lone();
  } else {
    return "The line is currently empty.";
        }

}
