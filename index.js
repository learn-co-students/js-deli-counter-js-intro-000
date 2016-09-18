
var katzDeliLine = [];

function takeANumber(deliLine, customer) {

 deliLine.push(customer)
  return `Welcome, ${customer}. You are number ${deliLine.length} in line.`
};

function nowServing(deliLine) {
if (deliLine.length === 0) {
  return `There is nobody waiting to be served!`
}
else {
  return `Currently serving ${deliLine.shift()}.`
}
};


function currentLine(deliLine) {
  if (deliLine.length === 0) {
   return `The line is currently empty.`
}
else {
      var CustomerPlaceInLine = [];
      deliLine.forEach(function(customer, index){
        CustomerPlaceInLine.push((index + 1).toString() + ". " + customer);
      });
      var lineString = "The line is currently: " + CustomerPlaceInLine.join(", ")
      return lineString;
    }
  }
