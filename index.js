var katzDeliLine = [];

function takeANumber(katzDeliLine, newCustomer){
  katzDeliLine.push(newCustomer);
  return katzDeliLine.indexOf(newCustomer) + 1;

};
