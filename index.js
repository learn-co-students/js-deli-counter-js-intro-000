var katzDeli = [];

function takeANumber(katzDeli, newPerson){
  katzDeli.push(newPerson);
  var lineLength = katzDeli.length
  return `Welcome, ${newPerson}. You are number ${lineLength} in line.`
}

function nowServing(katzDeli){
  if (katzDeli.length === 0){
    return `There is nobody waiting to be served!`
  }
  else{
    var nextPerson = katzDeli[0]
    katzDeli.shift()
    return `Currently serving ${nextPerson}.`
  }

}

function currentLine(katzDeli){
  if (katzDeli.length === 0){
    return `The line is currently empty.`
  }
  else{
    var i
    var arrayLength = katzDeli.length
    var sentenceParts = new Array()
    var sentence

    for (i = 0; i < arrayLength; i++){
      sentenceParts.push(` ${i+1}. ${katzDeli[i]}`)
    }
    sentence = `The line is currently:${sentenceParts.join()}`
    return sentence
  }

}
