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
    for (var i=0; i<count; i++){
      string.push(`${i+1}. ${katzDeliLine[i]}`);
    }
    return `The line is currently: ${string}`;
  }
};
