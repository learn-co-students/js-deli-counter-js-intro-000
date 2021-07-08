var katzDeliLine = [];
function takeANumber(katzDeliLine, name) {
  let counter = katzDeliLine.length;
  katzDeliLine.push(name);
  counter += 1;
  return `Welcome, ${name}. You are number ${counter} in line.`
}
function nowServing(katzDeliLine) {
  if(katzDeliLine.length > 0){
    let cur = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${cur}.`
  }
  else{
    return "There is nobody waiting to be served!"
  }
}
function currentLine(katzDeliLine){
  if (katzDeliLine.length > 0) {
    let queue = ''
    for (let i = 0; i < katzDeliLine.length; i++) {
      if (i < katzDeliLine.length - 1) {
        queue +=`${i + 1}. ${katzDeliLine[i]}, `
      }else {
        queue +=`${i + 1}. ${katzDeliLine[i]}`
      }
    }
    return `The line is currently: ${queue}`

  }
    return "The line is currently empty.";
}
