// At the beginning of the day, the deli is empty and is represented
// by an empty array, e.g.,
// var katzDeli = [];

// Build a function that a new customer will use when entering the deli.
// The function, takeANumber, should accept the current line of people,
// katzDeliLine, along with the new person's name as parameters.
var katzDeli = [];
var katzDeliLine = [];

function takeANumber(katzDeliLine, newPersonName){


// The function should return their position in line.
// And don't go being too programmer-y and give them their index.
// These are normal people. If they are 7th in line, tell them that.
// Don't get their hopes up by telling them they are number 6 in line.
   katzDeli.push(katzDeliLine.length + 1); katzDeliLine.push(newPersonName)
   return `Welcome, ${newPersonName}. You are number ${katzDeliLine.length} in line.`
}

// Build a function nowServing.
function nowServing(katzDeliLine){

// This function should return the first person
// in line and then remove that individual from the line.
 if (katzDeliLine.length >= 1) {
   let deDuc = (`Currently serving ${katzDeliLine[0]}.`);
   katzDeliLine.shift()
   return deDuc
 } else { return ("There is nobody waiting to be served!")
   }
 }
// If there is nobody in line, it should return
// "There is nobody waiting to be served!"



// Build a function currentLine
function currentLine(katzDeliLine){

// that returns the current line.
// For example, if katzDeliLine is currently
// ["Ada", "Grace"], currentLine(katzDeliLine)
// would return
// "The line is currently: 1. Ada 2. Grace".
// If there is nobody in line, it should
// return "The line is currently empty."
var nuArray = []
if (katzDeliLine.length === 0) {
  return  "The line is currently empty."
}
for(var i = 0; i < katzDeliLine.length; i++){
  var index = i + 1
  if (katzDeliLine.length === 0) {
    return  "The line is currently empty."
  } else if (i >= 0 && i <= katzDeliLine.length) {
    nuArray.push(" " + index + ". " + katzDeliLine[i])
    }
  } return `The line is currently:${nuArray}`
}
 // katzDeliLine[i]
