/*var katzDeli = [];
function takeANumber(katzDeli, newPersonName) {
    katzDeli.push(newPersonName);
  return `Welcome, ${newPersonName}. You are number ${katzDeli.length} in line.`
}

function nowServing(katzDeli) {
  if (katzDeli.length > 0) {
    var firstPerson = katzDeli[0];
    katzDeli.shift();
    return `Currently serving ${firstPerson}.`
  }else {
    return "There is nobody waiting to be served!"
  }
}
// The code below is different way to solve this question
/*function nowServing(katzDeli) {
  // katzDeli which is an array people who are hungry
  if (katzDeli.length > 0) {
    var firstPerson = katzDeli[0];
    function removePerson(){
      katzDeli.shift();
      return `Currently serving ${firstPerson}.`
    }
      return removePerson()
    // return exits the function(stops running anymore code in the function)
    // and just returns the value
  } else {
    return "There is nobody waiting to be served!"
  }
// else
  // tell them the line is empty
}*/
/*function currentLine(katzDeli) {
  if (katzDeli.length > 0) {
    var newArray = [];
    for (var i = 0; i < katzDeli.length; i++) {
      newArray.push(`${i+1}. ${katzDeli[i]}`)
    }
    // newArray.join(", ")
    // the opposite is split
  return `The line is currently: ${newArray.join(", ")}`
}else {
    return "The line is currently empty."
  }
}*/


var katzDeli = [];

function takeANumber(katzDeli, newPersonsName) {
  katzDeli.push(newPersonsName);
  return "Welcome, " + newPersonsName + ". You are number " + katzDeli.length + " in line."

} takeANumber(katzDeli, "Ali"); takeANumber(katzDeli, "Sara"); takeANumber(katzDeli, "Rusul");
//************************************************************
function nowServing(katzDeli) {
  if (katzDeli[0]) {
    var firstPerson = katzDeli.shift();
    return "Currently serving " + firstPerson + "."
  } else {
    return "There is nobody waiting to be served!"
  }
}nowServing(katzDeli);
//************************************************************

function currentLine(katzDeli) {
  if (katzDeli.length > 0) {
    var newarray = [];
    for (var i = 0; i < katzDeli.length; i++) {

     newarray.push(`${i+1}. ${katzDeli[i]}`);

    }
     return `The line is currently: ${newarray.join(", ")}`
  }else {
    return "The line is currently empty."
  }
} currentLine(katzDeli);
