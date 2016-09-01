var katzDeli=[];
function takeANumber(array, name){
  array.push(name)
  return `Welcome, ${name}. You are number ${array.indexOf(name)+1} in line.`;
}
function nowServing(katzDeli){
if (katzDeli.length>0){
  var remove = katzDeli.shift()
  return `Currently serving ${remove}.`

}
else if (katzDeli.length<1) {
  return "There is nobody waiting to be served!"
}
}
function currentLine(array){
  if (array.length>0){
    var line = [];
    for(var x=0; x<array.length;x++){
      line[x]= ` ${x+1}. ${array[x]}`
    }

  return `The line is currently:${line}`
}
else if (array.length<1){
  return "The line is currently empty."
}
}
