var takeANumber = function (katz, nextCustomer) {
  if (katz.length > 0);
  katz.push(nextCustomer);
  return "Welcome, " + nextCustomer + ". You are number " + katz.length + " in line."
}

function nowServing (katzDeliLine) {
   if(katzDeliLine.length===0) {
   return 'There is nobody waiting to be served!';
}
   var customer = katzDeliLine.shift();
   return "Currently serving " + customer + ".";
}

var currentLine = function (katzDeliLine) {
  if (katzDeliLine.length===0) {
  return "The line is currently empty.";
}
   var customerAndNumber = [];
   for (var line=0; line<katzDeliLine.length; line++) {
   customerAndNumber.push(line+1 + ". " + katzDeliLine[line])
}
  return "The line is currently: " + customerAndNumber.join(", ");
}
