function takeANumber(katzDeliLine , name){
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!";
  }
  else {
    return (`Currently serving ${katzDeliLine.shift()}.`)
  }
}


function currentLine(array){
  var line = [];
  if (array.length === 0){
    return "The line is currently empty.";
  }
  else {
    for (let i = 0 ; i < array.length ; i++){
      line.push(` ${i+1}. ${array[i]}`)
    }
    return 'The line is currently:' + line
  }
}
