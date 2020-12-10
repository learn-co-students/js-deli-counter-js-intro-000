function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  console.log(katzDeliLine);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
  }


function nowServing(katzDeliLine){
  if(katzDeliLine.length > 0){
      let curName = katzDeliLine.shift();
      return `Currently serving ${curName}.`
      }

  else{
      return "There is nobody waiting to be served!"
      }
}

function currentLine(deliLine){

  if (deliLine.length > 0){
    for( let i = 0; i < deliLine.length; i++){
      return `The line is currently: 1. ${deliLine[0]}, 2. ${deliLine[1]}, 3. ${deliLine[2]}`
      }
  }

  else{
  return "The line is currently empty."
  }

}
