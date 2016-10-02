var katzDeliLine = [];

function takeANumber (katzDeliLine, newPerson) {
  katzDeliLine.push(newPerson);
  var yourPosition = katzDeliLine.indexOf(newPerson)+1;
  return `Welcome, ${newPerson}. You are number ${yourPosition} in line.`
  //or return `Welcome, ${newPerson}. You are number ${katzDeliLine.indexOf(newPerson) + 1} in line.`;
}

function nowServing (line){
  while (line.length > 0){
// this also works >>    return `Currently serving ${line.shift()}.`;
  var customerName = line[0];
  line.shift();
  return `Currently serving ${customerName}.`;
// for some reason line.shift() at the end of the loop didnt' work. have to figure out why later.
  }
  return "There is nobody waiting to be served!"
}

function currentLine(line){
  if (line.length > 0){
    var myList = [];
    for (var counter = 0; counter < line.length; counter++) {
      myList.push (` ${counter+1}. ${line[counter]}`)
      }
    return `The line is currently:${myList}`
    }else{
    return `The line is currently empty.`
  }
}
