function takeANumber(katzDeliLine, person) {
  var number = katzDeliLine.length + 1;
  var str = `Welcome, ${person}. You are number ${number} in line.`;
  
  katzDeliLine.push(person);
  return str;
}

function nowServing(katzDeliLine) {
  if(!katzDeliLine.length) {
    return "There is nobody waiting to be served!";
  }
  var firstPerson = katzDeliLine.shift();
  var currentStr = `Currently serving ${firstPerson}.`;
  return currentStr;
}

function currentLine(katzDeliLine) {
  if(!katzDeliLine.length) {
    return "The line is currently empty.";
  }
  var string = "The line is currently: ";
  var newArray = katzDeliLine.slice(0);
  var person = ""; 
  for(var i = 0; i < katzDeliLine.length; i++) {
    person = newArray.shift();
    var index = i + 1;
    var currentStr = index + ". " + person + ", ";
    if ( i == katzDeliLine.length - 1) {
      string += index + ". " + person;
    }
    else {
      string += currentStr;
    }
  }
return string;
}