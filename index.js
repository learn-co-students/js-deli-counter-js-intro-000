function takeANumber(katzDeliLine, newPerson){

  katzDeliLine.push(newPerson); //adds new person in line
  return `Welcome, ${newPerson}. You are number ${katzDeliLine.length} in line.`; //tells new person where they are in the queue

}

function nowServing(katzDeliLine) {

  if(katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  }
  var firstPerson = katzDeliLine[0];
  katzDeliLine.shift();
  return `Currently serving ${firstPerson}.` //function stops executing after a "return"

}

function currentLine(katzDeliLine){

  if(katzDeliLine.length === 0) {
    return "The line is currently empty."
  }

  var array = [];

  katzDeliLine.forEach((name, index) => {
    array.push(` ${index + 1}. ${name}`);
  });

  return "The line is currently:" + array.join();
}

// function currentLine(katzDeliLine){
//   if(katzDeliLine.length === 0) {
//     return "The line is currently empty."
//   }
//   var string = "The line is currently: "
//   for(var i = 0; i < katzDeliLine.length; i++){
//     string = string + `${i + 1}. ${katzDeliLine[i]}, `
//   }
//   string = string.substring(0, string.length-2)
//   return string;
// }
