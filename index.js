var katzDeliLine = [];

function takeANumber(katzDeliLine, personName){
  katzDeliLine.push(personName);

  for(let i = 0; i < katzDeliLine.length; i++) {

      return "Welcome, " + personName + "." + " You are number " + (katzDeliLine.length) + " in line."
  }
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`
    //   var firstPerson = katzDeliLine[0]
    //   katzDeliLine.shift()
    //
    // return "Currently serving " + firstPerson + "."
  }
}

function currentLine(katzDeliLine){
  var sentence = "The line is currently: ";

  if(katzDeliLine.length === 0){
    return "The line is currently empty."
  }

  for(var i = 0; i < katzDeliLine.length; i++){
    if(i != katzDeliLine.length - 1){
      sentence += (i + 1) + ". " + katzDeliLine[i] + ", "
    } else {
      sentence += (i + 1) + ". " + katzDeliLine[i]
    }
  }

  return sentence;
}
