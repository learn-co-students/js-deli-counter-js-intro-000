
var katzDeliLine = [];
function takeANumber(katzDeli, name){
  katzDeli.push(`${name}`)
  return (`Welcome, ${name}. You are number ${katzDeli.length} in line.`)
}

Function nowServing(katzDeli){
  let i =0 ;
  while (i < katzDeli.length) {
    i++
  }
  if (katzDeli.length === 0){
    return "There is nobody waiting to be served!"
  } else{
    return (`Currently serving ${katzDeli.shift()}.`)
}
}







Function currentLine(katzDeli){
  var line = []
  let i =0;
  while (i < katzDeli.length) {
    line.push('' + [i+1] + '.' + katzDeli[i])
  }
  if (katzDeli.length === 0){
    return "The line is currently empty.";
  }else{
    return `the line is currently:` + line
  }
}
