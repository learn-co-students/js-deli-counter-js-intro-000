var katzDeliLine = [];
function takeANumber(katzDeliLine, name) {
  let counter = katzDeliLine.length;
  katzDeliLine.push(name);
  counter += 1;
  return `Welcome, ${name}. You are number ${counter} in line.`
}
function nowServing(katzDeliLine) {
  if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  }
  else{

    console.log(`Currently serving ${katzDeliLine[0]}.`)
    katzDeliLine.shift();
  }
}
