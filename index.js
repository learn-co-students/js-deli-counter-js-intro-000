var katzDeliLine = [];

function takeANumber(katzDeliLine, newCustomer){
  katzDeliLine.push(newCustomer);
  return `Welcome, ${newCustomer}. You are number ${katzDeliLine.indexOf(newCustomer) + 1} in line.`;
};

function nowServing(katzDeliLine){
  if (katzDeliLine.length < 1){
      return "There is nobody waiting to be served!";
  }
  else{
    var curName = katzDeliLine.shift();
    return `Currently serving ${curName}.`;
  }
};

function currentLine(katzDeliLine){
  var string = [];

  if (katzDeliLine.length < 1){
    return "The line is currently empty.";
  }
  else{
    var count = katzDeliLine.length;
    var i=0;
    do{
      if (i===0){
          string.push(`${i+1}. ${katzDeliLine[i]}`);
      }
      else{
        string.push(` ${i+1}. ${katzDeliLine[i]}`);
      }
      i++;
    }while(i<count);
    return `The line is currently: ${string}`;
  }

};
