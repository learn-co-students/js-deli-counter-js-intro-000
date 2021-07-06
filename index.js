var katzDeliLine = []; // empty array to be filled

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name); // pushes new name to end of array.
  var spot = katzDeliLine.length
  return `Welcome, ${name}. You are number ${spot} in line.`
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length > 0) {
    return `Currently serving ${katzDeliLine.shift()}.` // shift() removes first element of array and returns that element
  } else if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var lineup = [] // empty string to build new array.
    for (var i = 0; i < katzDeliLine.length; i++) {  //loops and increments index staring from 0
      lineup += (i + 1) + ". " + katzDeliLine[i] + ", "; // 1. Bill, 2. Jane,
    }
    lineup = lineup.slice(0, -2); // slice method returns selected elements in an array as a new array object. first parameter starting position or 0
    return `The line is currently: ${lineup}`;
  } else if (katzDeliLine.length === 0){
    return "The line is currently empty."
  }
}
