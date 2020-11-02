var katzDeliLine= [];
function takeANumber(katzDeliLine, name){
   katzDeliLine.push(name)
  var i=0
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}
function nowServing(katzDeliLine){
  var i=0
  if (katzDeliLine.length===parseInt(0)){
   return "There is nobody waiting to be served!"
 }
  else{
    let current=katzDeliLine[0]
    katzDeliLine.shift()
    return `Currently serving ${current}.`
  }
}

function currentLine(katzDeliLine){
  var line= []
  if (katzDeliLine.length=== 0){
    return "The line is currently empty."
  }
  else {
    let i = 0;
  while (i < katzDeliLine.length) {
    line.push(` `+[i+1]+`. `  + katzDeliLine[i])
    i++;
  }
    }
    return(`The line is currently:` + line);
  }
