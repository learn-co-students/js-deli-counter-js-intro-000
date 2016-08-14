var katzDeliLine = [];

function takeANumber(katzDeliLine, newCustomer){
  katzDeliLine.push(newCustomer);
  return `Welcome, ${newCustomer}. You are number ${katzDeliLine.indexOf(newCustomer) + 1} in line.`;
};

function nowServing(katzDeliLine){
  if (katzDeliLine.count < 1){
      return "There is nobody waiting to be served!";
  }
  else{
    var curName = katzDeliLine.shift();
    return `Currently serving ${curName}.`;
  }


};
