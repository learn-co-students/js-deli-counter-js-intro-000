
var katzDeliLine = [];

function takeANumber(deliLine, customer) {

 deliLine.push(customer)
  return `Welcome, ${customer}. You are number ${deliLine.length} in line.`
};

/*
2. Build a function `nowServing`. This function should return the next person in
 line and then remove them from the line. If there is nobody in line, it should return
  "There is nobody waiting to be served!"
*/
function nowServing(deliLine) {
if (deliLine.length === 0) {
  return `There is nobody waiting to be served!`
}
else {
  return `Currently serving ${deliLine.shift()}.`
}
};

// currentLine()  returns `"The line is currently: 1. Ada 2. Grace"`.  If nobody in line, return `"The line is currently empty."`

function currentLine(deliLine) {
  if (deliLine.length === 0) {
   return `The line is currently empty.`
}
else {
      var CustomerPlaceInLine = [];
      deliLine.forEach(function(customer, index){ // this will allow us to access the person and index out of the deliLine
        CustomerPlaceInLine.push((index + 1).toString() + ". " + customer);
      });
      var lineString = "The line is currently: " + CustomerPlaceInLine.join(", ")
      return lineString;
    }
  }
/*
else {
  var lineString = "The line is currently: "
      for (var i = 1; deliLine.length >= 1; i++) {
        lineString.push(`${i}. ${deliLine[i]}`)
        return lineString
    }
  }
}
*/
