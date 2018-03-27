function takeANumber(katzDeliLine, newName){
  katzDeliLine.push(newName);
  return `Welcome, ${newName}. You are number ${katzDeliLine.length} in line.`
}



function nowServing(katzDeliLine){
  if (!katzDeliLine.length){
    return "There is nobody waiting to be served!"
  }
  return `Currently serving ${katzDeliLine.shift()}.`
}



function currentLine(katzDeliLine) {
  if (!katzDeliLine.length){
    return "The line is currently empty."
  }
  const numbersAndNames = [];
  for (let i=0, l=katzDeliLine.length; i<l; i++){
    numbersAndNames.push(`${i+1}. ${katzDeliLine[i]}`);
  }
  return `The line is currently: ${numbersAndNames.join(', ')}`

}

















/*function currentLine(line) {
  if (!line.length) {
    return "The line is currently empty."
  }

  const numbersAndNames = []

  for (let i = 0, l = line.length; i < l; i++) {
    numbersAndNames.push(`${i + 1}. ${line[i]}`)
  }

  return `The line is currently: ${numbersAndNames.join(', ')}`
};

function nowServing(line) {
  if (!line.length) {
    return "There is nobody waiting to be served!"
  }

  return `Currently serving ${line.shift()}.`
};

function takeANumber(line, name) {
  line.push(name);

  return `Welcome, ${name}. You are number ${line.length} in line.`
};*/
