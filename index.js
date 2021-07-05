// A pretty important deli needs somebody to program the "Take a Number" feature for their counter.


// At the beginning of the day, the deli is empty and is represented by an empty array, e.g.,
var katzDeli = ["Summer","Sami","Mimi"];

// Build a function that a new customer will use when entering the deli. The function, takeANumber, should accept the current line of people, katzDeliLine, along with the new person's name as parameters. The function should return their position in line.
function takeANumber(katzDeliLine,name){

  // add new customers name to the line
  katzDeliLine.push(name);

  var position = katzDeliLine.length;
  //find the index of the person on line. because index starts at 0, add 1.
  return "Welcome, "+ name + ". You are number " + position + " in line.";
}

//test takeANumber
console.log(takeANumber(katzDeli,"Farah"));



function nowServing(katzDeliLine){
  // If there is nobody in line, it should return "There is nobody waiting to be served!"
  var now_serving_msg = "";
  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!";

  // This function should return the first person in line and then remove that individual from the line.
  // The shift() method removes the first element from an array and returns that element. This method changes the length of the array.
  } else {
   return "Currently serving "+ katzDeliLine.shift() + ".";
  }
}
//test nowServing
console.log(nowServing(katzDeli));
console.log(katzDeli);

//Build a function currentLine that returns the current line
function currentLine(katzDeliLine){
  if (katzDeliLine.length === 0){
    return "The line is currently empty.";
  } else {
    var current_line = [];
    for (var i = 0; i<katzDeliLine.length; i++){
      current_line.push((i+1)+". "+katzDeliLine[i]);
    }
    return "The line is currently: " + current_line.join(", ");
  }
}



console.log(currentLine(katzDeli));
